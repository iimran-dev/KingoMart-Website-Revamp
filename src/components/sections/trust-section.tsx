"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Lock, Globe, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustItems } from "@/lib/data";

const iconMap = {
  ShieldCheck,
  Truck,
  Lock,
  Globe,
  Headphones,
} as const;

type IconKey = keyof typeof iconMap;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function TrustSection() {
  return (
    <section id="trust" className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why KingoMart"
          title="Built for Serious Traders"
          description="Every feature is designed to reduce risk, lower costs, and accelerate your wholesale operations."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {trustItems.map((item, i) => {
            const Icon = iconMap[item.icon as IconKey];
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 lg:p-8"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                  <Icon className="size-6" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-navy font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Subtle corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl from-orange/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
