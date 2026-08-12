"use client";

import { motion } from "framer-motion";
import { Truck, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  upcomingImportOpportunities,
  liveTruckLoads,
  topWholesaleDeals,
} from "@/lib/data";
import { assetPath } from "@/lib/utils";

export function LogisticsSection() {
  return (
    <section id="logistics" className="py-10 sm:py-14 lg:py-16 bg-white">
      <Container>
        {/* Left-Aligned Section Title */}
        <SectionHeading
          align="left"
          eyebrow="Smart Logistics & Trade"
          title="Shared Shipping & Live Bulk Deals"
          description="Join live truck loads, pre-book upcoming container imports, and secure high-demand wholesale pricing."
          className="mb-8 sm:mb-10 max-w-2xl"
        />

        {/* 3 Main Card Columns Grid with generous gap */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-6 items-stretch">
          {/* Column 1: Upcoming Import Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-5 pb-2">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display leading-snug">
                    Upcoming Import Opportunities
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                    Pre-book now and secure your stock
                  </p>
                </div>
                <a
                  href="#imports"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 shrink-0 mt-0.5"
                >
                  View all
                  <ChevronRight className="size-4 ml-0.5" />
                </a>
              </div>

              {/* Items List */}
              <div className="space-y-3.5">
                {upcomingImportOpportunities.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100/90 bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center p-1 bg-slate-50/80 rounded-xl border border-slate-100">
                        <img
                          src={assetPath(item.image)}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain mix-blend-multiply pointer-events-none"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1 text-[11px] sm:text-xs">
                          <span className="font-bold text-emerald-600">
                            {item.booked} Booked
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500 font-medium">
                            {item.arriving}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 transition-colors shadow-2xs shrink-0 cursor-pointer"
                    >
                      Reserve Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Join a Truck - Live Loads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-5 pb-2">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display leading-snug">
                    Join a Truck – Live Loads
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                    Share truck & save on shipping
                  </p>
                </div>
                <a
                  href="#trucks"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 shrink-0 mt-0.5"
                >
                  View all
                  <ChevronRight className="size-4 ml-0.5" />
                </a>
              </div>

              {/* Items List */}
              <div className="space-y-3.5">
                {liveTruckLoads.map((item) => (
                  <div
                    key={item.route}
                    className="rounded-2xl border border-slate-100/90 bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100/80 text-slate-700 border border-slate-200/50">
                        <Truck className="size-5 sm:size-6 text-slate-700" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.route}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                          Departing: {item.departing}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200/60 shrink-0">
                      {item.seatsLeft}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: Top Wholesale Deals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 flex flex-col justify-between h-full shadow-2xs"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-5 pb-2">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display leading-snug">
                    Top Wholesale Deals
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                    Best prices on high-demand products
                  </p>
                </div>
                <a
                  href="#deals"
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-sky-600 hover:text-sky-700 shrink-0 mt-0.5"
                >
                  View all
                  <ChevronRight className="size-4 ml-0.5" />
                </a>
              </div>

              {/* Items List */}
              <div className="space-y-3.5">
                {topWholesaleDeals.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-100/90 bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-2xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 flex items-center justify-center p-1 bg-slate-50/80 rounded-xl border border-slate-100">
                        <img
                          src={assetPath(item.image)}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain mix-blend-multiply pointer-events-none"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1 text-[11px] sm:text-xs">
                          <span className="text-slate-400">MOQ: {item.moq}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-400 line-through">
                            {item.originalPrice}
                          </span>
                          <span className="font-bold text-orange">
                            {item.discountPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600 border border-emerald-300/60 shrink-0">
                      {item.discount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
