'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { PlusCircle, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getMedications, deleteMedication } from '@/services/api';
import { Medication } from '@/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function MedicationsPage() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [filteredMeds, setFilteredMeds] = useState<Medication[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        setIsLoading(true);
        const data = await getMedications();
        setMedications(data);
        setFilteredMeds(data);
      } catch (error) {
        console.error('Error fetching medications:', error);
        toast.error('Failed to load medications');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedications();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMeds(medications);
    } else {
      const filtered = medications.filter(
        (med) =>
          med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          med.dosage.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMeds(filtered);
    }
  }, [searchQuery, medications]);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await deleteMedication(id);
      setMedications(medications.filter((med) => med.id !== id));
      toast.success('Medication deleted successfully');
    } catch (error) {
      console.error('Error deleting medication:', error);
      toast.error('Failed to delete medication');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold tracking-tight">
            Your Medications
          </h1>
          <Link href="/dashboard/medications/new">
            <Button size="sm" className="w-full sm:w-auto cursor-pointer">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground text-sm mt-4 sm:mt-0">
          Manage your medication list and details
        </p>
      </motion.div>

      <div className="relative max-w-lg mx-auto sm:mx-0">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search medications..."
          className="pl-10 pr-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-9 w-9 rounded-full"
            onClick={() => setSearchQuery('')}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="animate-pulse text-muted-foreground">
            <LoadingSpinner />
          </div>
        </div>
      ) : filteredMeds.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
          <p className="text-muted-foreground text-sm">
            {searchQuery
              ? 'No medications match your search'
              : "You haven't added any medications yet"}
          </p>
          {!searchQuery && (
            <Link href="/dashboard/medications/new">
              <Button className="cursor-pointer">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Medication
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="space-y-4 max-w-xl mx-auto sm:max-w-none">
          {filteredMeds.map((med, i) => (
            <motion.div
              key={med.id}
              className="flex items-center justify-between rounded-lg border p-4 shadow-sm "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-16 rounded-sm"
                  style={{ backgroundColor: med.color || '#3b82f6' }}
                />
                <div>
                  <div className="font-medium">{med.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {med.dosage}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {med.frequency} • {med.timeOfDay.join(', ')}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link href={`/dashboard/medications/${med.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    Edit
                  </Button>
                </Link>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="cursor-pointer"
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete medication</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete {med.name}? This action
                        cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(med.id)}
                        disabled={deletingId === med.id}
                      >
                        {deletingId === med.id ? 'Deleting...' : 'Delete'}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
