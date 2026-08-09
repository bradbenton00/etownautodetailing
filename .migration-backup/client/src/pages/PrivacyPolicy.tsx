import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="text-white/50 mb-8">Effective Date: March 2026</p>
          <p className="lead text-xl text-white/90 mb-8">
            All Seasons Mobile Detailing LLC ("we", "our", or "us") respects your privacy and is committed to protecting your personal information.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Information We Collect</h3>
          <p>
            When you visit our website or request our services, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Vehicle details</li>
            <li>Service location</li>
            <li>Information submitted through website forms or booking requests</li>
          </ul>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Schedule and confirm detailing appointments</li>
            <li>Provide service updates and arrival notifications</li>
            <li>Respond to quote requests</li>
            <li>Send follow-up communication and review requests</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">SMS Messaging & Communication</h3>
          <p>
            By providing your phone number through our website, booking form, or direct request, you consent to receive SMS text messages from All Seasons Mobile Detailing LLC regarding appointments, service reminders, and follow-up communication.
          </p>
          <p className="mt-4">
            Message frequency varies. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. Reply <strong>HELP</strong> for assistance.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Cookies and Tracking Technologies</h3>
          <p>
            Our website may use cookies or basic analytics tools to understand how visitors interact with our site and improve performance.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Data Security</h3>
          <p>
            We take reasonable security measures to protect your information from unauthorized access, disclosure, or misuse.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">User Rights</h3>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Mobile Information Sharing</h3>
          <p>
            Mobile information will not be shared, sold, or transferred to third parties or affiliates for marketing or promotional purposes.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Third-Party Services</h3>
          <p>
            We may use third-party services such as booking platforms, messaging systems, or payment processors to operate our business.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Contact Information</h3>
          <p>
            If you have questions about this Privacy Policy, you may contact us:
          </p>
          <p className="mt-4">
            <strong>All Seasons Mobile Detailing LLC</strong><br />
            Elizabethtown, Kentucky<br />
            Phone: (270) 319-6059
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}