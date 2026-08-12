"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Warehouse,
  Store,
  Coffee,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Warehouse,
  Store,
  Coffee,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Built for Every Business Type"
          description="Tailored B2B procurement, direct pricing, and bulk delivery solutions built specifically for your sector."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:bg-white hover:shadow-xl hover:shadow-orange/5"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white mb-5">
                  {Icon && <Icon className="size-6" />}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  {industry.name}
                </h3>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-500 font-normal">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
