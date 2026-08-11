"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Package,
  Ship,
  FileCheck,
  Truck,
  Store,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { supplierJourney } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Package,
  Ship,
  FileCheck,
  Truck,
  Store,
};

const tradeRoutes = [
  { label: "China", sub: "🇨🇳" },
  { label: "UAE", sub: "🇦🇪" },
  { label: "Turkey", sub: "🇹🇷" },
  { label: "Algeria", sub: "🇩🇿" },
];

export function SupplierJourney() {
  return (
    <section className="bg-navy py-20 lg:py-24" id="import">
      <Container>
        <SectionHeading
          eyebrow="Supply Chain"
          title="From Global Supplier To Your Warehouse"
          light={true}
        />

        <div className="mt-14 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left: Timeline */}
          <div className="space-y-0">
            {supplierJourney.map((step, i) => {
              const Icon = iconMap[step.icon];
              const isLast = i === supplierJourney.length - 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                  className="flex items-start gap-4 relative pb-8 last:pb-0"
                >
                  {/* Connector line */}
                  {!isLast && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-px bg-white/20" />
                  )}

                  {/* Circle indicator */}
                  <div className="relative shrink-0 w-10 h-10 rounded-full bg-orange/20 border-2 border-orange flex items-center justify-center text-orange">
                    <Icon className="size-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-navy border border-white/20 text-[10px] font-semibold text-white flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-white font-display font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Trade Network Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-12 lg:mt-0"
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-white font-display font-bold text-xl mb-8">
                Global Trade Network
              </h3>

              {/* Trade route flow */}
              <div className="flex items-center justify-between">
                {tradeRoutes.map((route, i) => (
                  <div key={route.label} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + i * 0.2,
                      }}
                      className="flex flex-col items-center gap-2"
                    >
                      <span className="text-3xl">{route.sub}</span>
                      <span className="text-sm text-gray-300 font-medium">
                        {route.label}
                      </span>
                    </motion.div>

                    {i < tradeRoutes.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + i * 0.2,
                        }}
                        className="mx-3 flex flex-col items-center gap-1 shrink-0"
                      >
                        <div className="w-16 lg:w-20 h-px bg-gradient-to-r from-orange/60 to-orange/20" />
                        <ChevronDown className="size-3 text-orange/40 rotate-[-90deg]" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "Avg. Transit Time", value: "18–25 days" },
                  { label: "Routes Active", value: "12+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/5 border border-white/10 p-4"
                  >
                    <p className="text-orange font-display font-bold text-lg">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
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
