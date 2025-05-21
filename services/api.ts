import { axiosInstance } from '@/lib/axios';
import { Medication, MedicationLog, ReminderSettings } from '@/types';

// Authentication
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/api/register', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || 'Failed to register user');
  }
};

// Medications
export const getMedications = async (): Promise<Medication[]> => {
  try {
    const response = await axiosInstance.get('/api/medications');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to fetch medications'
    );
  }
};

export const getMedication = async (id: string): Promise<Medication> => {
  try {
    const response = await axiosInstance.get(`/api/medications/${id}`);
    if (!response.data) {
      throw new Error('Medication not found');
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to fetch medication'
    );
  }
};

export const createMedication = async (
  data: Partial<Medication>
): Promise<Medication> => {
  try {
    const response = await axiosInstance.post('/api/medications', data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to create medication'
    );
  }
};

export const updateMedication = async (
  id: string,
  data: Partial<Medication>
): Promise<Medication> => {
  try {
    const response = await axiosInstance.patch(`/api/medications/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to update medication'
    );
  }
};

export const deleteMedication = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/api/medications/${id}`);
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to delete medication'
    );
  }
};

// Medication Logs
export const getMedicationLogs = async (params?: {
  medicationId?: string;
  startDate?: string;
  endDate?: string;
}): Promise<MedicationLog[]> => {
  try {
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
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to fetch medication logs'
    );
  }
};

export const createMedicationLog = async (data: {
  medicationId: string;
  taken?: boolean;
  skipped?: boolean;
  scheduledFor: string;
  note?: string;
}): Promise<MedicationLog> => {
  try {
    const response = await axiosInstance.post('/api/medication-logs', data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to create medication log'
    );
  }
};

// Reminder Settings
export const getReminderSettings = async (): Promise<ReminderSettings> => {
  try {
    const response = await axiosInstance.get('/api/reminder-settings');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to fetch reminder settings'
    );
  }
};

export const updateReminderSettings = async (data: {
  emailReminders?: boolean;
  reminderTimeOffset?: number;
}): Promise<ReminderSettings> => {
  try {
    const response = await axiosInstance.patch('/api/reminder-settings', data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to update reminder settings'
    );
  }
};
export const deleteReminderSettings = async (): Promise<void> => {
  try {
    await axiosInstance.delete('/api/reminder-settings');
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || 'Failed to delete reminder settings'
    );
  }
};
