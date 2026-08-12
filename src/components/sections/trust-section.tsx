"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Lock, Globe, Headphones, Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { trustBannerItems, popularSearches } from "@/lib/data";

const iconMap = {
  ShieldCheck,
  Truck,
  Lock,
  Globe,
  Headphones,
} as const;

type IconKey = keyof typeof iconMap;

export function TrustSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="trust" className="relative pb-16 lg:pb-20">
      {/* Background starts below the floating trust bar to avoid backdrop strips on sides */}
      <div className="absolute inset-x-0 bottom-0 top-16 lg:top-20 bg-slate-50/60 -z-10" />

      <Container>
        {/* Top Floating Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-12 lg:-mt-16 relative z-20 rounded-2xl lg:rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md p-4 sm:p-5 lg:px-8 lg:py-5 shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 items-center divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {trustBannerItems.map((item, index) => {
              const Icon = iconMap[item.icon as IconKey];
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${index !== 0 ? "lg:pl-4" : ""
                    }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight font-display">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500 font-normal leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Cards Row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 xl:col-span-8 rounded-2xl lg:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                What are you looking to buy?
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-500 font-normal">
                Find the best products at the best wholesale prices
              </p>

              {/* Search Bar */}
              <div className="relative mt-6 sm:mt-8 flex items-center">
                <Search className="absolute left-4 size-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, brands, suppliers..."
                  className="w-full h-13 sm:h-14 rounded-xl sm:rounded-2xl border border-slate-200 bg-white pl-11 sm:pl-12 pr-14 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 sm:w-11 bg-orange hover:bg-orange/90 text-white rounded-lg sm:rounded-xl flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="size-5" />
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-xs sm:text-sm font-semibold text-slate-500 mr-1">
                Popular Searches:
              </span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="rounded-full border border-sky-400/70 bg-sky-50/20 px-3.5 py-1 text-xs sm:text-sm font-medium text-sky-600 hover:bg-sky-50 hover:border-sky-500 transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Ship Smart Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 xl:col-span-4 relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[#061427] p-6 sm:p-8 shadow-md flex flex-col justify-between min-h-[240px] sm:min-h-[260px]"
          >
            {/* Subtle glow behind truck */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/5 h-4/5 bg-sky-500/10 blur-2xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-[210px] sm:max-w-[230px]">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                Join a Truck & Ship Smart
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-[65%]">
                Reduce shipping costs by sharing truck loads with nearby buyers.
              </p>
            </div>

            <div className="relative z-10 mt-6 sm:mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm px-4.5 py-2.5 text-xs sm:text-sm font-medium text-white transition-all cursor-pointer shadow-sm"
              >
                Explore Ship Smart
              </button>
            </div>

            {/* Transparent Truck Image */}
            <img
              src="/truck.png"
              alt="Join a Truck & Ship Smart"
              className="absolute -right-2 bottom-0 h-[90%] sm:h-[95%] w-auto max-w-[60%] sm:max-w-[55%] object-contain pointer-events-none drop-shadow-2xl z-0"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


