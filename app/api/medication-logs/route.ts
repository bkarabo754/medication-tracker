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

    const url = new URL(req.url);
    const medicationId = url.searchParams.get('medicationId');
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');

    const where: any = {
      userId: session.user.id,
    };

    if (medicationId) {
      where.medicationId = medicationId;
    }

    if (startDate && endDate) {
      where.scheduledFor = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    } else if (startDate) {
      where.scheduledFor = {
        gte: new Date(startDate),
      };
    } else if (endDate) {
      where.scheduledFor = {
        lte: new Date(endDate),
      };
    }

    const logs = await db.medicationLog.findMany({
      where,
      include: {
        medication: {
          select: {
            name: true,
            dosage: true,
            color: true,
          },
        },
      },
      orderBy: {
        scheduledFor: 'desc',
      },
    });

    return NextResponse.json(logs);
  } catch (error) {
    console.log('[MEDICATION_LOGS_GET_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { medicationId, taken, skipped, scheduledFor, note } = body;

    if (!medicationId || scheduledFor === undefined) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Check if medication belongs to user
    const medication = await db.medication.findUnique({
      where: {
        id: medicationId,
        userId: session.user.id,
      },
    });

    if (!medication) {
      return NextResponse.json(
        { error: 'Medication not found' },
        { status: 404 }
      );
    }

    // Get the current time
    const now = new Date();
    const currentHour = now.getHours();

    // Determine time of day based on hour
    let timeOfDay;
    if (currentHour >= 5 && currentHour < 12) {
      timeOfDay = 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      timeOfDay = 'afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      timeOfDay = 'evening';
    } else {
      timeOfDay = 'night';
    }

    // Only allow logging if the medication is scheduled for the current time of day
    if (!medication.timeOfDay.includes(timeOfDay)) {
      return NextResponse.json(
        { error: `This medication is not scheduled for ${timeOfDay}` },
        { status: 400 }
      );
    }

    // Check if a log for this medication and time already exists
    const existingLog = await db.medicationLog.findFirst({
      where: {
        medicationId,
        userId: session.user.id,
        scheduledFor: new Date(scheduledFor),
      },
    });

    let log;

    if (existingLog) {
      // Update existing log
      log = await db.medicationLog.update({
        where: {
          id: existingLog.id,
        },
        data: {
          taken: taken ?? false,
          skipped: skipped ?? false,
          note,
          takenAt: taken ? new Date() : existingLog.takenAt,
        },
        include: {
          medication: {
            select: {
              name: true,
              dosage: true,
              color: true,
            },
          },
        },
      });
    } else {
      // Create new log
      log = await db.medicationLog.create({
        data: {
          medicationId,
          userId: session.user.id,
          taken: taken ?? false,
          skipped: skipped ?? false,
          scheduledFor: new Date(scheduledFor),
          note,
          takenAt: taken ? new Date() : undefined,
        },
        include: {
          medication: {
            select: {
              name: true,
              dosage: true,
              color: true,
            },
          },
        },
      });
    }

    return NextResponse.json(log);
  } catch (error) {
    console.log('[MEDICATION_LOGS_POST_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
