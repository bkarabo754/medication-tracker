'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getMedication, updateMedication } from '@/services/api';
import { MedicationForm } from '@/components/medications/medication-form';
import { Medication } from '@/types';

export default function EditMedicationPage() {
  const router = useRouter();
  const params = useParams();
  const medicationIdParam = params?.medicationId;
  const medicationId = Array.isArray(medicationIdParam)
    ? medicationIdParam[0]
    : medicationIdParam;

  const [medication, setMedication] = useState<Medication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchMedication = async () => {
      if (!medicationId) return;

      try {
        setIsLoading(true);
        const data = await getMedication(medicationId);
        setMedication(data);
      } catch (error) {
        console.error('Error fetching medication:', error);
        toast.error('Failed to load medication details');
        router.push('/dashboard/medications');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedication();
  }, [medicationId]); // removed router from deps to avoid re-renders

  const handleSubmit = async (data: any) => {
    if (!medicationId) return;

    try {
      setIsSubmitting(true);
      await updateMedication(medicationId, data);
      toast.success('Medication updated successfully');
      router.push('/dashboard/medications');
    } catch (error) {
      console.error('Error updating medication:', error);
      toast.error('Failed to update medication');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-pulse text-muted-foreground">
          Loading medication details...
        </div>
      </div>
    );
  }

  if (!medication) {
    return (
      <div className="flex justify-center py-10">
        <div className="text-muted-foreground">Medication not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Edit Medication</h1>
          <p className="text-muted-foreground">
            Update the details of {medication.name}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MedicationForm
          medication={medication}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </motion.div>
    </div>
  );
}
