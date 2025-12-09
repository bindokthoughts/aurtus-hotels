import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendContactEmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  phone,
  message
}: SendContactEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Aurtus Hotels <noreply@aurtushotels.com>',
      to: ['reservations@aurtushotels.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #666; margin-bottom: 5px; }
              .value { color: #333; }
              .message-box { background: #fff; padding: 15px; border-left: 3px solid #d4af37; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Aurtus Hotels</h1>
                <p>New Contact Form Submission</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

export async function sendNewsletterEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Aurtus Hotels <noreply@aurtushotels.com>',
      to: ['reservations@aurtushotels.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Aurtus Hotels</h1>
                <p>New Newsletter Subscription</p>
              </div>
              <div class="content">
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p>A new user has subscribed to receive updates about Aurtus Hotels.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send newsletter email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
