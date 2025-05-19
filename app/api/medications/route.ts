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

    const medications = await db.medication.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(medications);
  } catch (error) {
    console.log('[MEDICATIONS_GET_ERROR]', error);
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
    const {
      name,
      dosage,
      frequency,
      timeOfDay,
      startDate,
      endDate,
      instructions,
      color,
    } = body;

    if (!name || !dosage || !frequency || !timeOfDay || !startDate) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    const medication = await db.medication.create({
      data: {
        name,
        dosage,
        frequency,
        timeOfDay,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        instructions,
        color,
        userId: session.user.id,
      },
    });

    return NextResponse.json(medication);
  } catch (error) {
    console.log('[MEDICATIONS_POST_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
