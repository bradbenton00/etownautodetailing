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
  <p class="text-white/50 mb-8">Effective Date: March 2026</p>
  <p class="lead">All Seasons Mobile Detailing LLC ("we", "our", or "us") respects your privacy and is committed to protecting your personal information.</p>
  
  <h3>Information We Collect</h3>
  <p>When you visit our website or request our services, we may collect the following information:</p>
  <ul>
    <li>Name</li>
    <li>Phone number</li>
    <li>Email address</li>
    <li>Vehicle details</li>
    <li>Service location</li>
    <li>Information submitted through website forms or booking requests</li>
  </ul>

  <h3>How We Use Your Information</h3>
  <p>We use the information we collect to:</p>
  <ul>
    <li>Schedule and confirm detailing appointments</li>
    <li>Provide service updates and arrival notifications</li>
    <li>Respond to quote requests</li>
    <li>Send follow-up communication and review requests</li>
    <li>Improve our services and customer experience</li>
  </ul>

  <h3>SMS Messaging & Communication</h3>
  <p>By providing your phone number through our website, booking form, or direct request, you consent to receive SMS text messages from All Seasons Mobile Detailing LLC regarding appointments, service reminders, and follow-up communication.</p>
  <p>Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance.</p>

  <h3>Cookies and Tracking Technologies</h3>
  <p>Our website may use cookies or basic analytics tools to understand how visitors interact with our site and improve performance.</p>

  <h3>Data Security</h3>
  <p>We take reasonable security measures to protect your information from unauthorized access, disclosure, or misuse.</p>

  <h3>User Rights</h3>
  <p>You may request access to, correction of, or deletion of your personal information by contacting us.</p>

  <h3>Mobile Information Sharing</h3>
  <p>Mobile information will not be shared, sold, or transferred to third parties or affiliates for marketing or promotional purposes.</p>

  <h3>Third-Party Services</h3>
  <p>We may use third-party services such as booking platforms, messaging systems, or payment processors to operate our business.</p>

  <h3>Contact Information</h3>
  <p>If you have questions about this Privacy Policy, you may contact us:</p>
  <p><strong>All Seasons Mobile Detailing LLC</strong><br>Elizabethtown, Kentucky<br>Phone: 270-319-6059</p>
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

  <h3>8. SMS Terms of Service</h3>
  <p>By opting in to receive SMS messages from All Seasons Mobile Detailing LLC, you agree to receive messages related to service inquiries, appointment reminders, booking confirmations, service updates, and customer support. Consent to receive SMS messages is not a condition of purchase.</p>
  <p>Message frequency may vary depending on your interaction with our services. Message and data rates may apply.</p>

  <h4>Opt-Out</h4>
  <p>You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message.</p>

  <h4>Help</h4>
  <p>Reply <strong>HELP</strong> for assistance.</p>

  <h4>Customer Support</h4>
  <p>If you need assistance, please contact All Seasons Mobile Detailing LLC.</p>
  <p><strong>All Seasons Mobile Detailing LLC</strong><br>Email: bradbenton@etownautodetailing.com<br>Phone: (270) 319-6059</p>

  <h4>Carrier Disclaimer</h4>
  <p>Mobile carriers are not responsible for delayed or undelivered messages.</p>

  <h4>Age Requirement</h4>
  <p>You must be at least 18 years old to use our SMS communication services.</p>

  <p>Please review our <a href="/privacy-policy" style="color: #fff; text-decoration: underline;">Privacy Policy</a> for more information.</p>
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
  { name: 'privacy', title: 'Privacy Policy', content: privacyContent },
  { name: 'terms-of-service', title: 'Terms of Service', content: termsContent },
  { name: 'sms-terms-of-service', title: 'Terms of Service', content: termsContent },
  { name: 'terms', title: 'Terms of Service', content: termsContent },
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
