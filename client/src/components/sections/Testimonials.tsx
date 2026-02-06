import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Mark Kirkpatrick",
    date: "Nov 09, 2025",
    rating: 5,
    text: "Excellent job on the detail and very affordable. 5 stars all the way."
  },
  {
    name: "Jeanine Duperron",
    date: "Oct 24, 2025",
    rating: 5,
    text: "On time, quick and the inside of my car looks brand new (and I have 4 dogs, coffee lover and an endless love for plants too! So… imagine how bad the leather was, lol)! Will definitely be booking again!"
  },
  {
    name: "Maria Williamson",
    date: "Oct 18, 2025",
    rating: 5,
    text: "All Seasons Mobile Detailing did an amazing job! They were punctual, professional, and very courteous throughout the whole process. My 2016 car had never been detailed before... now it looks brand new!"
  },
  {
    name: "Wanda Wilkinson",
    date: "Oct 04, 2025",
    rating: 5,
    text: "Bradley did a great job and did it in less time it would have taken me. I don't like having my dogs in my car because of all the hair... He removed it all. Thank you, great job."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Client Stories</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500/80 mb-4">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <span className="text-white/40 ml-2 text-sm">(5.0 Average Rating)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all rounded-none">
                <CardContent className="pt-8">
                  <Quote className="w-8 h-8 text-white/10 mb-4" />
                  <p className="text-white/80 leading-relaxed mb-6 font-light italic">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <div>
                      <h4 className="text-white font-serif text-lg">{review.name}</h4>
                      <span className="text-xs text-white/40 uppercase tracking-wider">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-white/20 fill-white/20" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}