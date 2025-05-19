'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getReminderSettings, updateReminderSettings } from '@/services/api';
import { ReminderSettings } from '@/types';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SettingsPage() {
  const [settings, setSettings] = useState<ReminderSettings | null>(null);
  const [emailReminders, setEmailReminders] = useState(true);
  const [reminderOffset, setReminderOffset] = useState(15);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setIsLoading(true);
        const data = await getReminderSettings();
        setSettings(data);
        setEmailReminders(data.emailReminders);
        setReminderOffset(data.reminderTimeOffset);
      } catch (error) {
        console.error('Error fetching settings:', error);
        toast.error('Failed to load settings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    if (settings) {
      setHasChanges(
        emailReminders !== settings.emailReminders ||
          reminderOffset !== settings.reminderTimeOffset
      );
    }
  }, [emailReminders, reminderOffset, settings]);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateReminderSettings({
        emailReminders,
        reminderTimeOffset: reminderOffset,
      });

      setSettings({
        ...settings!,
        emailReminders,
        reminderTimeOffset: reminderOffset,
      });

      setHasChanges(false);
      toast.success('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setIsSaving(false);
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

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your notification preferences
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Reminder Settings
            </CardTitle>
            <CardDescription>
              Configure how and when you receive medication reminders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-reminders" className="flex-1">
                  Email Reminders
                </Label>
                <Switch
                  id="email-reminders"
                  checked={emailReminders}
                  onCheckedChange={setEmailReminders}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for your medication schedule.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Reminder Time</Label>
                <span className="text-sm font-medium">
                  {reminderOffset} minutes before
                </span>
              </div>
              <Slider
                defaultValue={[reminderOffset]}
                min={5}
                max={60}
                step={5}
                onValueChange={(value) => setReminderOffset(value[0])}
                disabled={!emailReminders}
              />
              <p className="text-sm text-muted-foreground">
                How many minutes before your scheduled medication time you want
                to receive a reminder.
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button
              onClick={handleSave}
              disabled={isSaving || !hasChanges}
              className="ml-auto"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
