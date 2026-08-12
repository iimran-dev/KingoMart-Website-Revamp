"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { heroStats } from "@/lib/data";
import { assetPath } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const floatingCards = [
  { label: "Orders Today", value: "1,284", color: "bg-orange/10 text-orange", position: "-top-3 -left-5" },
  { label: "In Transit", value: "48 Loads", color: "bg-success/10 text-success", position: "top-1/2 -right-6 -translate-y-1/2" },
  { label: "Savings", value: "$42K", color: "bg-navy/10 text-navy", position: "-bottom-3 left-4" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
      {/* Hero Background Image with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={assetPath("/hero-bg.jpg")}
          alt="Global Shipping & Logistics Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient Overlay - Lighter for vibrant image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Global B2B Trade Platform
            </span>

            <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-white font-display sm:text-5xl lg:text-[3.5rem]">
              IMPORT. TRADE. <span className="text-orange">GROW.</span>
            </h1>

            <p className="mt-3 text-lg font-semibold text-orange-400/95 font-display sm:text-xl">
              Algeria&apos;s Smart B2B Marketplace
            </p>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-300">
              Source products from verified global suppliers with better prices,
              shared logistics and secure trade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-12 rounded-lg bg-orange px-8 text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange/90"
              >
                Start Buying
                <ArrowRight className="ml-1 size-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-lg border-white/30 bg-white/10 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              >
                Become a Supplier
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-14">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white font-display sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block w-full max-w-[420px] ml-auto"
          >
            {/* Main dashboard mockup card */}
            <div className="relative rounded-2xl border border-white/15 bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-2xl shadow-black/40">
              {/* Top bar */}
              <div className="flex items-center gap-2 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <div className="ml-3 h-4 flex-1 rounded-full bg-neutral-bg" />
              </div>

              {/* Dashboard content rows */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-lg bg-neutral-bg p-3">
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">Monthly Orders</p>
                    <p className="mt-0.5 text-lg font-bold text-navy font-display">3,482</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                    <span>↑ 24%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg bg-orange/5 p-3">
                    <p className="text-[11px] text-muted-foreground">Savings</p>
                    <p className="mt-0.5 text-base font-bold text-orange font-display">$42.8K</p>
                  </div>
                  <div className="rounded-lg bg-success/5 p-3">
                    <p className="text-[11px] text-muted-foreground">Suppliers</p>
                    <p className="mt-0.5 text-base font-bold text-success font-display">156</p>
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end justify-between gap-1 rounded-lg bg-neutral-bg p-3 pt-4 h-24">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 11 ? "bg-orange" : "bg-navy/15"}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: "easeOut" as const }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating info cards (positioned on the right side) */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`absolute z-10 rounded-lg border border-border-light bg-white/95 backdrop-blur-sm px-2.5 py-1.5 shadow-md ${card.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              >
                <p className="text-[10px] leading-tight text-muted-foreground">{card.label}</p>
                <p className={`mt-0.5 text-xs font-bold ${card.color} font-display`}>
                  {card.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
