'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMedicationLogs, getMedications } from '@/services/api';
import { cn } from '@/lib/utils';
import { Medication, MedicationLog } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SchedulePage() {
  const [date, setDate] = useState<Date>(new Date());
  const [medications, setMedications] = useState<Medication[]>([]);
  const [logs, setLogs] = useState<MedicationLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [medsData, logsData] = await Promise.all([
          getMedications(),
          getMedicationLogs({
            startDate: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
            endDate: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
          }),
        ]);
        setMedications(medsData);
        setLogs(logsData);
      } catch (error) {
        console.error('Error fetching schedule data:', error);
        toast.error('Failed to load schedule');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [date]);

  const timeSlots = [
    { id: 'morning', label: 'Morning (6 AM - 12 PM)' },
    { id: 'afternoon', label: 'Afternoon (12 PM - 6 PM)' },
    { id: 'evening', label: 'Evening (6 PM - 9 PM)' },
    { id: 'night', label: 'Night (9 PM - 12 AM)' },
  ];

  const getMedicationsForTimeSlot = (timeSlot: string) => {
    return medications.filter((med) => med.timeOfDay.includes(timeSlot));
  };

  const getMedicationStatus = (medicationId: string) => {
    const log = logs.find((log) => log.medicationId === medicationId);
    if (!log) return null;
    if (log.taken) return 'taken';
    if (log.skipped) return 'skipped';
    return null;
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Schedule</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn('w-[240px] justify-start text-left font-normal')}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(date, 'PPP')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-muted-foreground">
          View your medication schedule for {format(date, 'MMMM d, yyyy')}
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="animate-pulse text-muted-foreground">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {timeSlots.map((slot) => {
            const slotMedications = getMedicationsForTimeSlot(slot.id);
            if (slotMedications.length === 0) return null;

            return (
              <Card key={slot.id}>
                <CardHeader>
                  <CardTitle>{slot.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {slotMedications.map((med) => {
                      const status = getMedicationStatus(med.id);
                      return (
                        <div
                          key={med.id}
                          className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
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
                          <div>
                            {status === 'taken' ? (
                              <div className="flex items-center text-sm text-green-500 gap-1">
                                <CheckCircle className="h-4 w-4" />
                                <span>Taken</span>
                              </div>
                            ) : status === 'skipped' ? (
                              <div className="flex items-center text-sm text-amber-500 gap-1">
                                <XCircle className="h-4 w-4" />
                                <span>Skipped</span>
                              </div>
                            ) : (
                              <div className="text-sm text-muted-foreground">
                                Scheduled
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
