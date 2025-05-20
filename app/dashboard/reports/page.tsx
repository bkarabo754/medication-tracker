'use client';

import { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getMedicationLogs } from '@/services/api';
import { cn } from '@/lib/utils';
import { MedicationLog } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ReportsPage() {
  const [startDate, setStartDate] = useState<Date>(subDays(new Date(), 7));
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [logs, setLogs] = useState<MedicationLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setIsLoading(true);
        const data = await getMedicationLogs({
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        });
        setLogs(data);
      } catch (error) {
        console.error('Error fetching medication logs:', error);
        toast.error('Failed to load reports');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogs();
  }, [startDate, endDate]);

  // Calculate statistics
  const totalLogs = logs.length;
  const takenCount = logs.filter((log) => log.taken).length;
  const skippedCount = logs.filter((log) => log.skipped).length;
  const adherenceRate = totalLogs > 0 ? (takenCount / totalLogs) * 100 : 0;

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[160px] justify-start text-left font-normal'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(startDate, 'MMM d, yyyy')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(date) => date && setStartDate(date)}
                  initialFocus
                  disabled={(date) => date > endDate || date > new Date()}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[160px] justify-start text-left font-normal'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(endDate, 'MMM d, yyyy')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(date) => date && setEndDate(date)}
                  initialFocus
                  disabled={(date) => date < startDate || date > new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <p className="text-muted-foreground">
          View your medication adherence statistics
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Medications
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalLogs}</div>
                <p className="text-xs text-muted-foreground">
                  Scheduled during this period
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Medications Taken
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{takenCount}</div>
                <p className="text-xs text-muted-foreground">
                  Successfully taken
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Medications Skipped
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{skippedCount}</div>
                <p className="text-xs text-muted-foreground">
                  Intentionally skipped
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Adherence Rate
                </CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {adherenceRate.toFixed(1)}%
                </div>
                <p className="text-xs text-muted-foreground">
                  Overall compliance
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logs.map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">
                        {log.medication?.name || 'Medication'}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {format(new Date(log.scheduledFor), 'PPP p')}
                      </div>
                    </div>
                    <div
                      className={cn(
                        'text-sm font-medium',
                        log.taken
                          ? 'text-green-500'
                          : log.skipped
                            ? 'text-amber-500'
                            : 'text-muted-foreground'
                      )}
                    >
                      {log.taken
                        ? 'Taken'
                        : log.skipped
                          ? 'Skipped'
                          : 'No Record'}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
