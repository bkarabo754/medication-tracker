import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  context: { params: { medicationsId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { medicationsId } = context.params;

    if (!medicationsId) {
      return new NextResponse('Medication ID is required', { status: 400 });
    }

    const medication = await db.medication.findUnique({
      where: {
        id: medicationsId,
        userId: session.user.id,
      },
    });

    if (!medication) {
      return new NextResponse('Medication not found', { status: 404 });
    }

    return NextResponse.json(medication);
  } catch (error) {
    console.error('[MEDICATION_GET_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  context: { params: { medicationsId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { medicationsId } = context.params;

    if (!medicationsId) {
      return new NextResponse('Medication ID is required', { status: 400 });
    }

    const existingMedication = await db.medication.findUnique({
      where: {
        id: medicationsId,
        userId: session.user.id,
      },
    });

    if (!existingMedication) {
      return new NextResponse('Medication not found or unauthorized', {
        status: 404,
      });
    }

    const updatedMedication = await db.medication.update({
      where: {
        id: medicationsId,
      },
      data: body,
    });

    return NextResponse.json(updatedMedication);
  } catch (error) {
    console.error('[MEDICATION_PATCH_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: { medicationsId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { medicationsId } = context.params;

    if (!medicationsId) {
      return new NextResponse('Medication ID is required', { status: 400 });
    }

    const existingMedication = await db.medication.findUnique({
      where: {
        id: medicationsId,
        userId: session.user.id,
      },
    });

    if (!existingMedication) {
      return new NextResponse('Medication not found or unauthorized', {
        status: 404,
      });
    }

    await db.medication.delete({
      where: {
        id: medicationsId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[MEDICATION_DELETE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

// Similar fixes apply to PATCH and DELETE methods
