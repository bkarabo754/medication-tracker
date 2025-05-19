'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Bell, CheckCircle, XCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  getMedications,
  getMedicationLogs,
  createMedicationLog,
} from '@/services/api';
import { Medication, MedicationLog } from '@/types';
import { DashboardHeader } from '@/components/dashboard/dashboard-stats';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function DashboardPage() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [todayLogs, setTodayLogs] = useState<MedicationLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const medsData = await getMedications();
        setMedications(medsData);

        const logsData = await getMedicationLogs({
          startDate: today.toISOString(),
          endDate: tomorrow.toISOString(),
        });

        setTodayLogs(logsData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        toast.error('Failed to load dashboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const timeGroups = {
    morning: medications.filter((med) => med.timeOfDay.includes('morning')),
    afternoon: medications.filter((med) => med.timeOfDay.includes('afternoon')),
    evening: medications.filter((med) => med.timeOfDay.includes('evening')),
    night: medications.filter((med) => med.timeOfDay.includes('night')),
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <p className="text-muted-foreground">
          {format(today, 'EEEE, MMMM d, yyyy')}
        </p>
      </motion.div>

      <DashboardHeader medications={medications} logs={todayLogs} />

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="space-y-4">
          {isLoading ? (
            <div className="flex justify-start py-10">
              <div className="animate-pulse text-muted-foreground">
                <LoadingSpinner />
              </div>
            </div>
          ) : medications.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No medications added</CardTitle>
                <CardDescription>
                  You haven't added any medications yet. Add your first
                  medication to get started.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full cursor-pointer"
                  asChild
                >
                  <Link href="/dashboard/medications/new">Add Medication</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(timeGroups).map(([time, meds]) => {
                if (meds.length === 0) return null;
                return (
                  <Card key={time} className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="capitalize">{time}</CardTitle>
                      <CardDescription>
                        {meds.length} medication{meds.length !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {meds.map((med) => (
                          <motion.div
                            key={med.id}
                            className="flex items-center justify-between p-4"
                            whileHover={{
                              backgroundColor: 'rgba(0,0,0,0.02)',
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                  backgroundColor: med.color || '#3b82f6',
                                }}
                              />
                              <div>
                                <div className="font-medium">{med.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {med.dosage}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm">Take</Button>
                              <Button size="sm" variant="outline">
                                Skip
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
