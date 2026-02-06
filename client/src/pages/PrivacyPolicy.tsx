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
            At All Seasons Mobile Detailing LLC, we prioritize the privacy and security of our clients. This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">1. Information We Collect</h3>
          <p>
            We collect information that you voluntarily provide when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Book an appointment for our services</li>
            <li>Contact us via phone, email, or our website contact form</li>
            <li>Sign up for our newsletter or promotions</li>
          </ul>
          <p>
            This information may include your name, phone number, email address, vehicle details, and service location address.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Schedule and perform mobile detailing services</li>
            <li>Communicate with you regarding your appointment</li>
            <li>Process payments securely</li>
            <li>Send appointment reminders and updates</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">3. Information Sharing</h3>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">4. SMS Communications</h3>
          <p>
            By providing your phone number, you consent to receive text messages from us regarding your appointments and services. Message and data rates may apply. You can opt-out at any time by replying STOP.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">5. Contact Us</h3>
          <p>
            If you have any questions regarding this privacy policy, you may contact us using the information below:
          </p>
          <p className="mt-4">
            <strong>All Seasons Mobile Detailing LLC</strong><br />
            140 Brentwood Drive<br />
            Elizabethtown, KY 42701<br />
            (270) 319-6059
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}