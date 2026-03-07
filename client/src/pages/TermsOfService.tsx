import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="lead text-xl text-white/90 mb-8">
            Please read these Terms of Service carefully before booking services with All Seasons Mobile Detailing LLC.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">1. Appointments & Booking</h3>
          <p>
            Appointments are available by booking online or contacting us. We operate on a scheduled basis and strive to arrive within the scheduled time window. However, unforeseen traffic or previous job complications may cause slight delays. We will communicate any delays promptly.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">2. Pricing & Payment</h3>
          <p>
            All prices listed are starting prices based on vehicles in average condition. Excessive dirt, pet hair, staining, or hazardous materials may incur additional charges. Final price will be confirmed upon vehicle inspection before work begins. Payment is due upon completion of service.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">3. Cancellation Policy</h3>
          <p>
            We respectfully request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the appointment slot to other clients.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">4. Service Expectations</h3>
          <p>
            We aim for perfection, but we cannot guarantee the removal of all stains, scratches, or defects depending on their severity and age. We are not responsible for pre-existing damage.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">5. Personal Property</h3>
          <p>
            Please remove all personal items, valuables, and car seats from the vehicle prior to our arrival. We are not responsible for any lost or damaged personal items left in the vehicle.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">6. Weather Conditions</h3>
          <p>
            As a mobile service, we are subject to weather conditions. In the event of severe weather (heavy rain, storms, extreme cold), we may need to reschedule your appointment for the safety of our team and the quality of the work.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">7. Liability</h3>
          <p>
            All Seasons Mobile Detailing LLC is insured. However, we are not liable for damage related to pre-existing conditions (e.g., loose trim, oxidized paint, cracked leather) that may be exacerbated by standard cleaning processes.
          </p>

          <h3 className="text-white mt-12 mb-4 text-2xl font-serif">8. SMS Terms of Service</h3>
          <p>
            By opting in to receive SMS messages from All Seasons Mobile Detailing LLC, you agree to receive text messages related to customer service inquiries, appointment reminders, service updates, and other communications related to your request.
          </p>
          <p className="mt-4">
            Message frequency may vary depending on your interaction with our services.
          </p>
          <p className="mt-4">
            Message and data rates may apply depending on your mobile carrier plan.
          </p>

          <h4 className="text-white mt-8 mb-2 text-xl font-serif">Opt-Out Instructions</h4>
          <p>
            You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message. You may receive a final confirmation message after opting out.
          </p>

          <h4 className="text-white mt-8 mb-2 text-xl font-serif">Help Instructions</h4>
          <p>
            For assistance, reply <strong>HELP</strong> or contact us directly.
          </p>

          <h4 className="text-white mt-8 mb-2 text-xl font-serif">Customer Support</h4>
          <p>
            If you need assistance, please contact:
          </p>
          <p className="mt-4">
            <strong>All Seasons Mobile Detailing LLC</strong><br />
            Email: bradbenton@etownautodetailing.com<br />
            Phone: (270) 319-6059
          </p>

          <h4 className="text-white mt-8 mb-2 text-xl font-serif">Carrier Disclaimer</h4>
          <p>
            Mobile carriers are not responsible for delayed or undelivered messages.
          </p>

          <h4 className="text-white mt-8 mb-2 text-xl font-serif">Age Restriction</h4>
          <p>
            You must be at least 18 years old to use our SMS communication services.
          </p>

          <p className="mt-8">
            Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more information about how we handle your data.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}