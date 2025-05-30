export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  timeOfDay: string[];
  startDate: Date;
  endDate: Date | null; // Allows null values
  instructions?: string | null;
  color?: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface MedicationLog {
  id: string;
  taken: boolean;
  skipped: boolean;
  scheduledFor: Date;
  takenAt: Date | null; // Allows null values
  note?: string | null;
  medicationId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  medication?: {
    name: string;
    dosage: string;
    color?: string | null;
  };
}

export interface ReminderSettings {
  id: string;
  userId: string;
  emailReminders: boolean;
  reminderTimeOffset: number;
  createdAt: Date;
  updatedAt: Date;
}
