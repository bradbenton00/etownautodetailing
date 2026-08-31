import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RVDetailing } from "@/components/sections/RVDetailing";

const PAGE_TITLE = "RV Detailing Elizabethtown KY | Complete RV Detail | All Seasons Mobile Detailing";
const PAGE_DESCRIPTION =
  "Mobile RV detailing in Elizabethtown KY. Veteran-owned complete inside-and-out RV detailing. We come to you. Free quote based on your RV's size, condition, and requested services.";

export function RVDetailingPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? null;
    meta?.setAttribute("content", PAGE_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) {
        meta?.setAttribute("content", prevDescription);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="pt-24">
        <RVDetailing />
      </main>
      <Footer />
    </div>
  );
}
