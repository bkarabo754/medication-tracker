import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { db } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: { medicationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const medication = await db.medication.findUnique({
      where: {
        id: params.medicationId,
        userId: session.user.id,
      },
    });

    if (!medication) {
      return NextResponse.json(
        { error: 'Medication not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(medication);
  } catch (error) {
    console.log('[MEDICATION_GET_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { medicationId: string } }
) {
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

    const medication = await db.medication.findUnique({
      where: {
        id: params.medicationId,
        userId: session.user.id,
      },
    });

    if (!medication) {
      return NextResponse.json(
        { error: 'Medication not found' },
        { status: 404 }
      );
    }

    const updatedMedication = await db.medication.update({
      where: {
        id: params.medicationId,
      },
      data: {
        name,
        dosage,
        frequency,
        timeOfDay,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : null,
        instructions,
        color,
      },
    });

    return NextResponse.json(updatedMedication);
  } catch (error) {
    console.log('[MEDICATION_PATCH_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { medicationId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const medication = await db.medication.findUnique({
      where: {
        id: params.medicationId,
        userId: session.user.id,
      },
    });

    if (!medication) {
      return NextResponse.json(
        { error: 'Medication not found' },
        { status: 404 }
      );
    }

    await db.medication.delete({
      where: {
        id: params.medicationId,
      },
    });

    return NextResponse.json({ message: 'Medication deleted' });
  } catch (error) {
    console.log('[MEDICATION_DELETE_ERROR]', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
