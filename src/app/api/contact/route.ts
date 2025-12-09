import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { validateContactForm, ContactFormData } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate form data
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Send email via Resend
    const result = await sendContactEmail({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
