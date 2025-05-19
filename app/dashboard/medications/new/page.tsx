'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createMedication } from '@/services/api';
import { MedicationForm } from '@/components/medications/medication-form';

export default function NewMedicationPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      await createMedication(data);
      toast.success('Medication added successfully');
      router.push('/dashboard/medications');
    } catch (error) {
      console.error('Error adding medication:', error);
      toast.error('Failed to add medication');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.back()}
          className="gap-1 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">
          Add New Medication
        </h1>
        <p className="text-muted-foreground">
          Enter the details of your medication
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <MedicationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </motion.div>
    </div>
  );
}
