"use client";

import { motion } from "framer-motion";
import { TrendingDown, Share2, ShieldCheck, BarChart3 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { features } from "@/lib/data";

const iconMap = {
  TrendingDown,
  Share2,
  BadgeCheck: ShieldCheck,
  BarChart3,
} as const;

type IconKey = keyof typeof iconMap;

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight mb-6 sm:mb-8">
          Why Buy Through KingoMart?
        </h2>

        {/* Features Row & Side Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Features Container (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-7 rounded-2xl sm:rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 md:divide-x divide-slate-200/70">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon as IconKey] || TrendingDown;
                return (
                  <div
                    key={feature.title}
                    className={`flex flex-col pt-4 sm:pt-0 ${
                      index !== 0 ? "md:pl-5 lg:pl-6" : ""
                    }`}
                  >
                    {/* Orange Line Icon Box */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200/60 text-orange shadow-2xs mb-4">
                      <Icon className="size-5" />
                    </div>

                    {/* Feature Title & Subtitle */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display leading-snug mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-5 relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] shadow-md group"
          >
            {/* Background Side Picture */}
            <img
              src="/global-logistics-banner.png"
              alt="From Global Supplier to Your Warehouse"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for Text Clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06152a]/90 via-[#06152a]/65 to-transparent z-0 pointer-events-none" />

            {/* Banner Header Text */}
            <div className="relative z-10 max-w-[260px] sm:max-w-[300px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display leading-tight tracking-tight">
                From Global Supplier to Your Warehouse
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-200/90 font-normal leading-relaxed">
                A seamless journey, handled end to end.
              </p>
            </div>

            {/* Learn More Action Button */}
            <div className="relative z-10 mt-6">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-2.5 text-xs sm:text-sm transition-all cursor-pointer shadow-md"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
