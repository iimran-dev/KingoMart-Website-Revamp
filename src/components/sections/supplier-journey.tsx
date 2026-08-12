"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Package,
  Ship,
  FileCheck,
  Truck,
  Store,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { supplierJourney, tradeHubs } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Package,
  Ship,
  FileCheck,
  Truck,
  Store,
};

export function SupplierJourney() {
  return (
    <section id="import" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Left-Aligned Section Header */}
        <SectionHeading
          align="left"
          eyebrow="End-to-End Supply Chain"
          title="From Global Supplier To Your Warehouse"
          description="Track every step of your wholesale import — from factory floor sourcing to doorstep warehouse delivery."
          className="mb-8 sm:mb-10 max-w-2xl"
        />

        {/* 6-Step Supply Chain Cards Grid (Mobile Swiper & Desktop Flow) */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 lg:gap-4">
            {supplierJourney.map((step, index) => {
              const Icon = iconMap[step.icon] || Factory;
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs hover:shadow-xl hover:shadow-orange/5 hover:border-orange/40 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
                >
                  <div>
                    {/* Top Row: Step Number & Arrow Connector */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-orange/10 text-[11px] font-black text-orange font-mono group-hover:bg-orange group-hover:text-white transition-colors">
                        {stepNumber}
                      </span>
                      {index < supplierJourney.length - 1 && (
                        <ArrowRight className="hidden lg:block size-3.5 text-slate-300 group-hover:text-orange group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>

                    {/* Step Icon */}
                    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-orange/10 group-hover:text-orange group-hover:scale-105 transition-all mb-3">
                      <Icon className="size-5 stroke-[1.75]" />
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Line Indicator */}
                  <div className="mt-4 w-full h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-orange rounded-full transition-all duration-500 group-hover:w-full"
                      style={{ width: `${((index + 1) / 6) * 100}%` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Global Trade Network Sub-Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-5"
        >
          {/* Left: Trade Hub Flow */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <MapPin className="size-4" />
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Active Trade Corridors
              </h4>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-1">
                {tradeHubs.map((hub, i) => (
                  <span
                    key={hub.country}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-800 bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/60"
                  >
                    <span>{hub.flag}</span>
                    <span>{hub.country}</span>
                    {i < tradeHubs.length - 1 && (
                      <span className="text-slate-300 ml-0.5">➔</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Logistics Guarantees */}
          <div className="flex items-center gap-6 sm:gap-8 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 w-full lg:w-auto justify-around lg:justify-end">
            <div className="flex items-center gap-2">
              <Clock className="size-4.5 text-orange" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  18–25 Days
                </span>
                <span className="text-[11px] text-slate-400">
                  Avg Ocean Freight
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4.5 text-emerald-600" />
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  100% Vetted
                </span>
                <span className="text-[11px] text-slate-400">
                  Quality Guaranteed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
