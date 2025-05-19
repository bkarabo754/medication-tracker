'use client';

import { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';
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
import { getMedicationLogs } from '@/services/api';
import { MedicationLog } from '@prisma/client';
import { cn } from '@/lib/utils';

export default function HistoryPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setIsLoading(true);
        const startDate = new Date(date);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date);
        endDate.setHours(23, 59, 59, 999);

        const data = await getMedicationLogs({
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        });

        setLogs(data);
      } catch (error) {
        console.error('Error fetching medication logs:', error);
        toast.error('Failed to load medication history');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, [date]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            Medication History
          </h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
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
                disabled={(date) => date > new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-muted-foreground">
          View your medication history for {format(date, 'MMMM d, yyyy')}
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="animate-pulse text-muted-foreground">
            Loading history...
          </div>
        </div>
      ) : logs.length === 0 ? (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>No records found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              There are no medication records for {format(date, 'MMMM d, yyyy')}
              .
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {logs.map((log, i) => (
            <motion.div
              key={log.id}
              className="rounded-lg border bg-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <div className="flex items-center p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: log.medication.color || '#3b82f6',
                      }}
                    />
                    <div className="font-medium">{log.medication.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {log.medication.dosage}
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {format(new Date(log.scheduledFor), 'h:mm a')}
                  </div>
                  {log.note && (
                    <div className="mt-2 text-sm border-l-2 pl-2 border-muted">
                      {log.note}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {log.taken ? (
                    <div className="flex items-center text-sm text-green-500 gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Taken</span>
                    </div>
                  ) : log.skipped ? (
                    <div className="flex items-center text-sm text-amber-500 gap-1">
                      <XCircle className="h-4 w-4" />
                      <span>Skipped</span>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      No record
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
