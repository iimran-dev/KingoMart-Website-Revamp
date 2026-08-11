"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function TestimonialsSection() {
  return (
    <section className="bg-neutral-bg py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Success Stories"
          title="Trusted by Businesses Across Algeria"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col rounded-2xl border border-border-light bg-white p-6 lg:p-8"
            >
              {/* Quote Icon */}
              <Quote className="size-10 text-orange/20" />

              {/* Quote Text */}
              <p className="mt-4 flex-1 text-base leading-relaxed italic text-navy">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Metric Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                {testimonial.metric}
              </div>

              {/* Divider */}
              <div className="mt-6 flex items-center gap-3 border-t border-border-light pt-6">
                {/* Avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-orange/80 text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company} — {testimonial.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
