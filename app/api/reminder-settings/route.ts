import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let settings = await db.reminderSettings.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!settings) {
      // Create default settings if none exist
      settings = await db.reminderSettings.create({
        data: {
          userId: session.user.id,
          emailReminders: true,
          reminderTimeOffset: 15,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.log('[REMINDER_SETTINGS_GET_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { emailReminders, reminderTimeOffset } = body;

    let settings = await db.reminderSettings.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!settings) {
      // Create settings if none exist
      settings = await db.reminderSettings.create({
        data: {
          userId: session.user.id,
          emailReminders: emailReminders ?? true,
          reminderTimeOffset: reminderTimeOffset ?? 15,
        },
      });
    } else {
      // Update existing settings
      settings = await db.reminderSettings.update({
        where: {
          userId: session.user.id,
        },
        data: {
          emailReminders:
            emailReminders !== undefined
              ? emailReminders
              : settings.emailReminders,
          reminderTimeOffset:
            reminderTimeOffset !== undefined
              ? reminderTimeOffset
              : settings.reminderTimeOffset,
        },
      });
    }

    return NextResponse.json(settings);
  } catch (error) {
    console.log('[REMINDER_SETTINGS_PATCH_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
