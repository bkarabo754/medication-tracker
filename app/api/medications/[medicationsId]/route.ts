// app/api/medications/[medicationsId]/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

// Define the expected type for the 'params' object when it resolves
interface MedicationRouteParams {
  medicationsId: string;
}

export async function GET(
  request: Request,
  // CRITICAL CHANGE: Type 'params' directly as a Promise<MedicationRouteParams>
  // and destructure it directly from the second argument.
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // CRITICAL CHANGE: Await 'params' directly here
    const { medicationsId } = await params; // This is the exact fix

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
  // Apply the same Promise typing for params
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    // console.log('PATCH request body:', body);

    const { medicationsId } = await params; // Await params directly

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
        userId: session.user.id,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(updatedMedication);
  } catch (error) {
    console.error('[MEDICATION_PATCH_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  // Apply the same Promise typing for params
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { medicationsId } = await params; // Await params directly

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
        userId: session.user.id,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('[MEDICATION_DELETE_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
