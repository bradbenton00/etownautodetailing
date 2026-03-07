import fs from 'fs';
import path from 'path';

// Template base
const template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>All Seasons Mobile Detailing LLC | {{TITLE}}</title>
    <meta name="description" content="Top-rated mobile auto detailing in Elizabethtown, KY. {{TITLE}}" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@200..800&display=swap" rel="stylesheet">
    <style>
      body { background-color: #000; color: #fff; font-family: 'Manrope', sans-serif; margin: 0; padding: 0; }
      .container { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
      h1, h2, h3 { font-family: 'Cormorant Garamond', serif; }
      h1 { font-size: 3rem; margin-bottom: 2rem; }
      h3 { font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1rem; }
      p, li { color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 1rem; }
      ul { padding-left: 1.5rem; }
      strong { color: #fff; }
      /* Include the main JS so it hydrates if JS is available */
    </style>
  </head>
  <body>
    <div class="container">
      {{CONTENT}}
    </div>
    <!-- Hydration root -->
    <div id="root" style="display: none;"></div>
    <script>
      // Automatically redirect to the SPA version once loaded
      window.onload = function() {
        setTimeout(function() {
          window.location.reload();
        }, 100);
      };
    </script>
  </body>
</html>`;

const privacyContent = `
  <h1>Privacy Policy</h1>
  
  <h3>Information We Collect</h3>
  <p>We collect personal information that you voluntarily provide to us when you fill out a contact form, request information, or communicate with us. This may include your name, phone number, email address, and service details.</p>

  <h3>How We Use Your Information</h3>
  <p>The information we collect may be used to respond to inquiries, provide services, send appointment reminders, service updates, and customer support communications.</p>

  <h3>SMS Communications</h3>
  <p>By providing your phone number and checking the consent box on our forms, you agree to receive SMS messages from Ironpoint Consulting Group. These messages may include appointment reminders, service updates, and responses to your inquiries.</p>
  <p>Message frequency may vary. Message and data rates may apply.</p>
  <p>You may opt out of SMS communications at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.</p>

  <h3>Mobile Information Sharing</h3>
  <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

  <h3>Cookies & Tracking</h3>
  <p>Our website may use cookies or similar technologies to improve user experience and website functionality.</p>

  <h3>Data Security</h3>
  <p>We implement reasonable security measures to protect your personal information from unauthorized access or disclosure.</p>

  <h3>User Rights</h3>
  <p>You may request access, correction, or deletion of your personal data by contacting us.</p>
`;

const termsContent = `
  <h1>Terms of Service</h1>
  <p class="lead">Please read these Terms of Service carefully before booking services with All Seasons Mobile Detailing LLC.</p>

  <h3>1. Appointments & Booking</h3>
  <p>Appointments are available by booking online or contacting us. We operate on a scheduled basis and strive to arrive within the scheduled time window. However, unforeseen traffic or previous job complications may cause slight delays. We will communicate any delays promptly.</p>

  <h3>2. Pricing & Payment</h3>
  <p>All prices listed are starting prices based on vehicles in average condition. Excessive dirt, pet hair, staining, or hazardous materials may incur additional charges. Final price will be confirmed upon vehicle inspection before work begins. Payment is due upon completion of service.</p>

  <h3>3. Cancellation Policy</h3>
  <p>We respectfully request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the appointment slot to other clients.</p>

  <h3>4. Service Expectations</h3>
  <p>We aim for perfection, but we cannot guarantee the removal of all stains, scratches, or defects depending on their severity and age. We are not responsible for pre-existing damage.</p>

  <h3>5. Personal Property</h3>
  <p>Please remove all personal items, valuables, and car seats from the vehicle prior to our arrival. We are not responsible for any lost or damaged personal items left in the vehicle.</p>

  <h3>6. Weather Conditions</h3>
  <p>As a mobile service, we are subject to weather conditions. In the event of severe weather (heavy rain, storms, extreme cold), we may need to reschedule your appointment for the safety of our team and the quality of the work.</p>

  <h3>7. Liability</h3>
  <p>All Seasons Mobile Detailing LLC is insured. However, we are not liable for damage related to pre-existing conditions (e.g., loose trim, oxidized paint, cracked leather) that may be exacerbated by standard cleaning processes.</p>

  <h3>8. SMS/Text Messaging Terms</h3>
  <p>By providing your phone number and opting in to our SMS communications, you agree to receive text messages from All Season Mobile Detailing LLC. Messages may include:</p>
  <ul>
    <li>Appointment confirmations and reminders</li>
    <li>Service status updates and notifications</li>
    <li>Follow-up messages after completed services</li>
    <li>Review and feedback requests</li>
    <li>Promotional offers and discounts (with your consent)</li>
  </ul>
  <p><strong>Opt-Out:</strong> You may opt out of receiving SMS messages at any time by replying STOP to any message. After opting out, you will receive a one-time confirmation message. You will no longer receive SMS messages unless you re-subscribe.</p>
  <p><strong>Help:</strong> For assistance with our SMS program, reply HELP to any message or contact us directly.</p>
  <p><strong>Message and Data Rate Disclosure:</strong> Message and data rates may apply depending on your wireless carrier and mobile plan. All Season Mobile Detailing LLC is not responsible for any charges incurred from your carrier. Message frequency varies based on your interactions with our services.</p>
  <p><strong>Carrier Liability Disclaimer:</strong> Wireless carriers are not liable for any delayed or undelivered messages. Message delivery is subject to effective transmission by your wireless carrier. All Season Mobile Detailing LLC is not responsible for messages not received due to carrier issues, phone settings, or other factors outside our control.</p>
  <p><strong>Age Restriction:</strong> Our services and SMS messaging program are intended for individuals who are 18 years of age or older.</p>
`;

const publicDir = path.join(process.cwd(), "dist", "public");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate static HTML files
const pages = [
  { name: 'privacy-policy', title: 'Privacy Policy', content: privacyContent },
  { name: 'sms-privacy', title: 'Privacy Policy', content: privacyContent },
  { name: 'terms-of-service', title: 'Terms of Service', content: termsContent },
  { name: 'sms-terms-of-service', title: 'Terms of Service', content: termsContent },
];

pages.forEach(page => {
  const html = template
    .replace('{{TITLE}}', page.title)
    .replace('{{TITLE}}', page.title)
    .replace('{{CONTENT}}', page.content);
    
  // Save to the specific route file (e.g., sms-privacy.html)
  fs.writeFileSync(path.join(publicDir, `${page.name}.html`), html);
  
  // Also create a directory with index.html for direct folder access
  const routeDir = path.join(publicDir, page.name);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  
  console.log(`Generated static file for /${page.name}`);
});
