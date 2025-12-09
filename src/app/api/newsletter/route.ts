import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterEmail } from '@/lib/email';
import { validateNewsletter, NewsletterFormData } from '@/lib/validators';

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterFormData = await request.json();

    // Validate email
    const validation = validateNewsletter(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Send notification email via Resend
    const result = await sendNewsletterEmail(body.email);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to our newsletter.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
