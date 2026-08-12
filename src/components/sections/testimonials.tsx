"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { buyersSayTestimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Combined 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Block: What Our Buyers Say (7 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-5 min-h-[44px]">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display leading-snug">
                  What Our Buyers Say
                </h3>
                <p className="mt-0.5 text-xs text-slate-400 font-normal">
                  Trusted by thousands of businesses
                </p>
              </div>
              <a
                href="#reviews"
                className="inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 shrink-0 mt-0.5"
              >
                View all
                <ChevronRight className="size-3.5 ml-0.5" />
              </a>
            </div>

            {/* 3 Testimonial Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 flex-1">
              {buyersSayTestimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 flex flex-col justify-between min-h-[170px] shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Orange Quote */}
                    <span className="text-orange text-2xl font-serif font-bold leading-none select-none">
                      “
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed mt-1 font-medium">
                      {item.quote}
                    </p>
                  </div>

                  {/* Buyer Profile */}
                  <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-slate-200/50">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-8 w-8 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Block: Get Weekly Wholesale Deals Newsletter Banner (5 cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#2E0854] via-[#6B118C] via-[#B8125C] via-[#E23B18] to-[#F57C00] p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl border border-white/10 relative overflow-hidden min-h-[260px]"
          >
            {/* Ambient Lighting Overlay */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-orange-400/20 blur-2xl rounded-full pointer-events-none" />

            <div className="relative z-10 my-auto">
              <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-1">
                Get Weekly Wholesale Deals
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-medium mb-6">
                Join 10,000+ business buyers
              </p>

              {/* Form Input + Subscribe Button */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2.5 mb-6"
              >
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="h-11 flex-1 rounded-xl bg-white px-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-orange/80 shadow-xs min-w-0"
                />
                <button
                  type="submit"
                  className="h-11 rounded-xl bg-orange hover:bg-orange/90 px-5 text-xs sm:text-sm font-bold text-white shadow-md cursor-pointer transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>

              {/* Checkmark Bullets */}
              <div className="flex items-center gap-4 text-xs font-medium text-white/90">
                <span className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-white stroke-[2.5]" /> Best Deals
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-white stroke-[2.5]" /> New Arrivals
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-3.5 text-white stroke-[2.5]" /> Market Insights
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
