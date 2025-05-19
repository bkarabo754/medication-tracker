import { axiosInstance } from '@/lib/axios';
import { Medication, MedicationLog, ReminderSettings } from '@/types';

// Authentication
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post('/api/register', data);
  return response.data;
};

// Medications
export const getMedications = async () => {
  const response = await axiosInstance.get<Medication[]>('/api/medications');
  return response.data;
};

export const getMedication = async (id: string) => {
  const response = await axiosInstance.get<Medication>(
    `/api/medications/${id}`
  );
  return response.data;
};

export const createMedication = async (data: Partial<Medication>) => {
  const response = await axiosInstance.post<Medication>(
    '/api/medications',
    data
  );
  return response.data;
};

export const updateMedication = async (
  id: string,
  data: Partial<Medication>
) => {
  const response = await axiosInstance.patch<Medication>(
    `/api/medications/${id}`,
    data
  );
  return response.data;
};

export const deleteMedication = async (id: string) => {
  const response = await axiosInstance.delete(`/api/medications/${id}`);
  return response.data;
};

// Medication Logs
export const getMedicationLogs = async (params?: {
  medicationId?: string;
  startDate?: string;
  endDate?: string;
}) => {
  const queryParams = new URLSearchParams();

  if (params?.medicationId) {
    queryParams.append('medicationId', params.medicationId);
  }

  if (params?.startDate) {
    queryParams.append('startDate', params.startDate);
  }

  if (params?.endDate) {
    queryParams.append('endDate', params.endDate);
  }

  const url = `/api/medication-logs${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  const response = await axiosInstance.get<MedicationLog[]>(url);
  return response.data;
};

// Update Medication Log
export const updateMedicationLog = async (data: {
  medicationId: string;
  status: 'taken' | 'skipped';
}) => {
  const response = await axiosInstance.patch<MedicationLog>(
    `/api/medication-logs/${data.medicationId}`,
    { status: data.status }
  );
  return response.data;
};

export const createMedicationLog = async (data: {
  medicationId: string;
  taken?: boolean;
  skipped?: boolean;
  scheduledFor: Date | string;
  note?: string;
}) => {
  const response = await axiosInstance.post<MedicationLog>(
    '/api/medication-logs',
    data
  );
  return response.data;
};

// Reminder Settings
export const getReminderSettings = async () => {
  const response = await axiosInstance.get<ReminderSettings>(
    '/api/reminder-settings'
  );
  return response.data;
};

export const updateReminderSettings = async (data: {
  emailReminders?: boolean;
  reminderTimeOffset?: number;
}) => {
  const response = await axiosInstance.patch<ReminderSettings>(
    '/api/reminder-settings',
    data
  );
  return response.data;
};
