'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Medication } from '@/types';

const timeOfDayOptions = [
  { id: 'morning', label: 'Morning' },
  { id: 'afternoon', label: 'Afternoon' },
  { id: 'evening', label: 'Evening' },
  { id: 'night', label: 'Night' },
] as const;

const colorOptions = [
  { value: '#3b82f6', label: 'Blue' },
  { value: '#10b981', label: 'Green' },
  { value: '#f97316', label: 'Orange' },
  { value: '#ef4444', label: 'Red' },
  { value: '#a855f7', label: 'Purple' },
  { value: '#ec4899', label: 'Pink' },
] as const;

const frequencyOptions = [
  'Daily',
  'Twice daily',
  'Three times daily',
  'Weekly',
  'As needed',
  'Custom',
] as const;

const medicationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  dosage: z.string().min(1, 'Dosage is required'),
  frequency: z.string().min(1, 'Frequency is required'),
  timeOfDay: z.array(z.string()).min(1, 'At least one time of day is required'),
  startDate: z.date({ required_error: 'Start date is required' }),
  endDate: z.date().optional().nullable(),
  instructions: z.string().optional(),
  color: z.string().min(1, 'Color is required'),
});

type MedicationFormValues = z.infer<typeof medicationSchema>;

interface MedicationFormProps {
  medication?: Medication | null;
  onSubmit: (data: MedicationFormValues) => void;
  isSubmitting: boolean;
}

export function MedicationForm({
  medication,
  onSubmit,
  isSubmitting,
}: MedicationFormProps) {
  const form = useForm<MedicationFormValues>({
    resolver: zodResolver(medicationSchema),
    defaultValues: {
      name: '',
      dosage: '',
      frequency: 'Daily',
      timeOfDay: ['morning'],
      startDate: new Date(),
      endDate: null,
      instructions: '',
      color: '#3b82f6',
    },
  });

  useEffect(() => {
    if (medication) {
      form.reset({
        name: medication.name,
        dosage: medication.dosage,
        frequency: medication.frequency,
        timeOfDay: medication.timeOfDay,
        startDate: new Date(medication.startDate),
        endDate: medication.endDate ? new Date(medication.endDate) : null,
        instructions: medication.instructions || '',
        color: medication.color || '#3b82f6',
      });
    }
  }, [medication, form]);

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4 pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Medication Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Medication name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dosage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dosage</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 500mg, 2 tablets" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frequency</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {frequencyOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <div
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: field.value }}
                              />
                              {colorOptions.find((c) => c.value === field.value)
                                ?.label || 'Color'}
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {colorOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <div
                                className="h-4 w-4 rounded-full"
                                style={{ backgroundColor: option.value }}
                              />
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="timeOfDay"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>Time of Day</FormLabel>
                    <FormDescription>
                      Select when you need to take this medication
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {timeOfDayOptions.map((option) => (
                      <FormField
                        key={option.id}
                        control={form.control}
                        name="timeOfDay"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={option.id}
                              className="flex items-center space-x-2 space-y-0 rounded-md border p-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          option.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== option.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date (Optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>No end date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={(date) =>
                            date < form.getValues('startDate') ||
                            date < new Date()
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Leave blank for ongoing medications
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Special instructions (e.g., Take with food)"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? 'Saving...'
                : medication
                  ? 'Update Medication'
                  : 'Add Medication'}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
