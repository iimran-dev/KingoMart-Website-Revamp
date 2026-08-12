"use client";

import { motion } from "framer-motion";
import { TrendingDown, Share2, ShieldCheck, BarChart3 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { features } from "@/lib/data";
import { assetPath } from "@/lib/utils";

const iconMap = {
  TrendingDown,
  Share2,
  BadgeCheck: ShieldCheck,
  BarChart3,
} as const;

type IconKey = keyof typeof iconMap;

export function FeaturesSection() {
  return (
    <section id="features" className="py-10 sm:py-14 lg:py-16 bg-white">
      <Container>
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight mb-6 sm:mb-8">
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
            className="lg:col-span-7 xl:col-span-7 rounded-2xl sm:rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col justify-center shadow-2xs"
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

          {/* Right Side Logistics Picture Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md min-h-[260px] sm:min-h-[300px] flex flex-col justify-end group cursor-pointer border border-slate-100"
          >
            {/* Background Image */}
            <img
              src={assetPath("/global-logistics-banner.png")}
              alt="Global Freight Logistics Banner"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

            {/* Content Text Overlay */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug max-w-md">
                From Global Supplier to Your Warehouse
              </h3>
              <a
                href="#logistics"
                className="mt-4 inline-flex items-center rounded-xl bg-orange hover:bg-orange/90 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all group-hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
