import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export interface MedicationReminderProps {
  recipientEmail: string;
  recipientName: string;
  medicationName: string;
  dosage: string;
  time: string;
  date: string;
}

export async function sendMedicationReminder({
  recipientEmail,
  recipientName,
  medicationName,
  dosage,
  time,
  date,
}: MedicationReminderProps) {
  try {
    const data = await resend.emails.send({
      from: 'Medication Tracker <notifications@medication-tracker.com>',
      to: recipientEmail,
      subject: `Reminder: Time to take ${medicationName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h1 style="color: #3B82F6; margin-top: 0;">Medication Reminder</h1>
          <p>Hello ${recipientName},</p>
          <p>It's time to take your medication:</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <h2 style="margin-top: 0; color: #1f2937;">${medicationName}</h2>
            <p style="margin-bottom: 8px;"><strong>Dosage:</strong> ${dosage}</p>
            <p style="margin-bottom: 8px;"><strong>Time:</strong> ${time}</p>
            <p style="margin-bottom: 0;"><strong>Date:</strong> ${date}</p>
          </div>
          <p>Remember to log this medication in your tracker after taking it.</p>
          <p style="margin-bottom: 0;">Be well,<br>Medication Tracker Team</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending medication reminder:', error);
    return { success: false, error };
  }
}
