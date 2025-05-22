import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { medicationsId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { medicationsId } = params;

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

// Similar fixes apply to PATCH and DELETE methods
