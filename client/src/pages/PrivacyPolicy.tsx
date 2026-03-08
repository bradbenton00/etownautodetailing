import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you fill out a contact form, request a quote, book an appointment, or communicate with us. This may include your name, phone number, email address, vehicle details, service address, and appointment information.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">How We Use Your Information</h3>
          <p>
            We use your information to respond to inquiries, schedule and confirm appointments, provide detailing services, send service updates, and deliver customer support.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">SMS Communications</h3>
          <p>
            By providing your phone number and checking the consent box on our forms, you agree to receive SMS messages from All Seasons Mobile Detailing LLC related to service inquiries, appointment reminders, booking confirmations, service updates, and customer support.
          </p>
          <p className="mt-4">
            Message frequency may vary. Message and data rates may apply.
          </p>
          <p className="mt-4">
            You may opt out of SMS communications at any time by replying <strong>STOP</strong>. For assistance, reply <strong>HELP</strong>.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Cookies & Tracking</h3>
          <p>
            Our website may use cookies or similar technologies to improve website performance, user experience, and analytics.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Data Security</h3>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">User Rights</h3>
          <p>
            You may request access to, correction of, or deletion of your personal information by contacting us directly.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Mobile Information Sharing</h3>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}