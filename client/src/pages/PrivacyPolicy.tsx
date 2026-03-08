import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="lead text-xl text-white/90 mb-8">
            All Seasons Mobile Detailing LLC respects your privacy. This policy explains how we collect, use, and protect your information.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Information We Collect</h3>
          <p>
            We may collect personal information including your name, phone number, email address, vehicle details, and service location when you submit a form on our website.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">How We Use Your Information</h3>
          <p>
            Your information is used to respond to inquiries, schedule appointments, provide detailing services, send service updates, and communicate with you regarding your request.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">SMS Communications</h3>
          <p>
            If you provide your phone number and consent, you may receive SMS messages from All Seasons Mobile Detailing LLC regarding appointment reminders, service updates, and customer support.
          </p>
          <p className="mt-4">
            Message frequency may vary. Message and data rates may apply.
          </p>
          <p className="mt-4">
            You may opt out at any time by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for assistance.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Cookies and Tracking</h3>
          <p>
            Our website may use cookies or analytics tools to improve website functionality and user experience.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Data Security</h3>
          <p>
            We take reasonable steps to protect your information from unauthorized access or disclosure.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">User Rights</h3>
          <p>
            You may request access, correction, or deletion of your personal information by contacting us.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">Mobile Information Sharing</h3>
          <p>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}