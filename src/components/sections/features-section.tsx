"use client";

import { motion } from "framer-motion";
import { TrendingDown, Share2, BadgeCheck, BarChart3, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  TrendingDown,
  Share2,
  BadgeCheck,
  BarChart3,
} as const;

type IconKey = keyof typeof iconMap;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
  }),
};

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything You Need to Trade Globally"
          description="A complete B2B platform built to simplify sourcing, logistics, and payments for African importers."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon as IconKey];
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 lg:p-8",
                  i === 0 && "sm:col-span-2"
                )}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                    <Icon className="size-7" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-navy font-display">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    {/* Metric badge */}
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/10 px-3.5 py-1.5 text-sm font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {feature.metric}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient blob */}
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-orange/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="h-12 rounded-lg bg-orange px-8 text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange/90"
          >
            Explore All Features
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
