import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Mark Kirkpatrick",
    text: "Excellent job on the detail and very affordable. 5 stars all the way."
  },
  {
    name: "Jeanine Duperron",
    text: "The inside of my car looks brand new... Will definitely be booking again!"
  },
  {
    name: "Maria Williamson",
    text: "My 2016 car had never been detailed before, but now it looks brand new!"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`pt-8 md:pt-0 ${index > 0 ? 'md:pl-12' : ''}`}
            >
              <Quote className="w-6 h-6 text-white/20 mb-6" />
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-serif">
                "{review.text}"
              </p>
              <p className="text-xs text-white/40 uppercase tracking-widest">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}