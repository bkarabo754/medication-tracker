'use client';

import { Medication, MedicationLog } from '@/types';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

interface DashboardHeaderProps {
  medications: Medication[];
  logs: MedicationLog[];
}

export function DashboardHeader({ medications, logs }: DashboardHeaderProps) {
  // Calculate statistics
  const totalMedications = medications.length;
  const takenCount = logs.filter((log) => log.taken).length;
  const skippedCount = logs.filter((log) => log.skipped).length;
  const pendingCount = medications.length - (takenCount + skippedCount);

  // Calculate adherence percentage
  const adherencePercentage =
    totalMedications > 0
      ? Math.round((takenCount / totalMedications) * 100)
      : 0;

  const stats = [
    {
      title: 'Adherence',
      value: `${adherencePercentage}%`,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Taken',
      value: takenCount,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Pending',
      value: pendingCount,
      icon: Clock,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      title: 'Skipped',
      value: skippedCount,
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="rounded-lg border bg-card p-4 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className={`rounded-full p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <div className="font-medium">{stat.title}</div>
          </div>
          <div className="mt-2 text-2xl font-bold">{stat.value}</div>
        </motion.div>
      ))}
    </div>
  );
}
