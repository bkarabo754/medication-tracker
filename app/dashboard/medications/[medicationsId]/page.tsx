'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getMedication, updateMedication } from '@/services/api';
import { MedicationForm } from '@/components/medications/medication-form';
import { Medication } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function EditMedicationPage({
  params,
}: {
  params: Promise<{ medicationsId: string }>;
}) {
  const router = useRouter();
  const [medicationsId, setMedicationsId] = useState<string | null>(null);
  const [medication, setMedication] = useState<Medication | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveParamsAndFetch = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const resolvedParams = await params;

        if (!resolvedParams?.medicationsId) {
          throw new Error('Medication ID not provided.');
        }

        setMedicationsId(resolvedParams.medicationsId);

        const data = await getMedication(resolvedParams.medicationsId);
        setMedication(data);
      } catch (error: any) {
        setError(error.message || 'Failed to load medication details');
        toast.error('Failed to load medication details');
      } finally {
        setIsLoading(false);
      }
    };

    resolveParamsAndFetch();
  }, [params]);

  const handleSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      if (!medicationsId) throw new Error('Medication ID is not available.');
      await updateMedication(medicationsId, data);
      toast.success('Medication updated successfully');
      router.push('/dashboard/medications');
    } catch (error) {
      toast.error('Failed to update medication');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-pulse text-muted-foreground">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.back()}
          className="gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="flex justify-center py-10">
          <div className="text-destructive">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.back()}
        className="gap-1"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Edit Medication</h1>
        <p className="text-muted-foreground">
          Update the details of {medication?.name}
        </p>
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
