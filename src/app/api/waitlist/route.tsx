import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// TODO: Add imports for Email client libraries

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // --- Input Validation ---
    if (!email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // --- Email Sending using Resend ---
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey || !recipientEmail) {
       console.error("Resend API key or recipient email missing in environment variables.");
       throw new Error('Server configuration error. Notification could not be sent.'); 
    }

    try {
       const resend = new Resend(resendApiKey);
       
       console.log(`Attempting to send email notification to ${recipientEmail}...`);
       
       const { data, error } = await resend.emails.send({
        from: `Pushable Early Access <${fromEmail}>`,
        to: [recipientEmail],
        subject: '🚀 New Pushable Early Access Request',
        html: `
          <h1>New Early Access Request</h1>
          <p><strong>Email:</strong> ${email}</p>
         
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        throw new Error(`Failed to send notification email: ${error.message}`);
      }

      console.log('Email sent successfully:', data?.id);

    } catch (emailError: any) {
      console.error('Email Sending Error:', emailError);
      console.error('Could not send notification email, but proceeding...');
    }

    // --- Success Response ---
    return NextResponse.json({ message: 'Request received successfully!' }, { status: 200 });

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
} 