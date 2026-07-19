import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // LeadConnector review widget script
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="reviews">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-white/5 border-white/10 text-white/70">
            Customer Feedback
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
            Real Results, Real Reviews
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            See what our clients in Elizabethtown and surrounding areas have to say about our mobile detailing service.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-black/40 border border-white/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm" ref={containerRef}>
          <iframe 
            className="lc_reviews_widget" 
            src="https://reputationhub.site/reputation/widgets/review_widget/5CHU4zKaI5sxKGCUHZ1W" 
            frameBorder="0" 
            scrolling="no" 
            style={{ minWidth: "100%", width: "100%" }}
            title="Customer Reviews"
          />
        </div>
      </div>
    </section>
  );
}
