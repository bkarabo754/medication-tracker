// app/api/medications/[medicationsId]/route.ts

import { NextResponse, type NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

// Define the expected type for the 'params' object when it resolves
interface MedicationRouteParams {
  medicationsId: string;
}

export async function GET(
  request: NextRequest,
  // CRITICAL FIX: Type 'params' as a Promise<MedicationRouteParams>
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // CRITICAL FIX: Await 'params' directly here
    const { medicationsId } = await params;

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
  request: NextRequest,
  // CRITICAL FIX: Apply the same Promise typing for params
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    // CRITICAL FIX: Await 'params' directly
    const { medicationsId } = await params;

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
  request: NextRequest,
  // CRITICAL FIX: Apply the same Promise typing for params
  { params }: { params: Promise<MedicationRouteParams> }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // CRITICAL FIX: Await 'params' directly
    const { medicationsId } = await params;

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
