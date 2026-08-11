"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { heroStats } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const floatingCards = [
  { label: "Orders Today", value: "1,284", color: "bg-orange/10 text-orange", position: "top-4 -left-4" },
  { label: "In Transit", value: "48 Loads", color: "bg-success/10 text-success", position: "top-1/3 -right-6" },
  { label: "Savings", value: "$42K", color: "bg-navy/10 text-navy", position: "bottom-8 -left-2" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-neutral-bg to-orange/5">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-navy/5 blur-3xl" />
      </div>

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Global B2B Trade Platform
            </span>

            <h1 className="mt-6 text-4xl leading-[1.1] font-bold tracking-tight text-navy font-display sm:text-5xl lg:text-[3.5rem]">
              IMPORT. TRADE. <span className="text-orange">GROW.</span>
            </h1>

            <p className="mt-3 text-lg font-semibold text-navy/80 font-display sm:text-xl">
              Algeria&apos;s Smart B2B Marketplace
            </p>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
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
                className="h-12 rounded-lg border-border-light px-6 text-base font-semibold text-navy hover:bg-white"
              >
                Become a Supplier
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-14">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-navy font-display sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            {/* Main dashboard mockup card */}
            <div className="relative rounded-2xl border border-border-light bg-white p-6 shadow-2xl shadow-navy/8">
              {/* Top bar */}
              <div className="flex items-center gap-2 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 h-5 flex-1 rounded-full bg-neutral-bg" />
              </div>

              {/* Dashboard content rows */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-neutral-bg p-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Monthly Orders</p>
                    <p className="mt-1 text-xl font-bold text-navy font-display">3,482</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                    <span>↑ 24%</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-orange/5 p-4">
                    <p className="text-xs text-muted-foreground">Savings</p>
                    <p className="mt-1 text-lg font-bold text-orange font-display">$42.8K</p>
                  </div>
                  <div className="rounded-lg bg-success/5 p-4">
                    <p className="text-xs text-muted-foreground">Suppliers</p>
                    <p className="mt-1 text-lg font-bold text-success font-display">156</p>
                  </div>
                </div>

                {/* Mini chart bars */}
                <div className="flex items-end justify-between gap-1.5 rounded-lg bg-neutral-bg p-4 pt-5">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 11 ? "bg-orange" : "bg-navy/15"}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className={`absolute z-10 rounded-xl border border-border-light bg-white px-4 py-3 shadow-lg ${card.position}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              >
                <p className="text-xs text-muted-foreground">{card.label}</p>
                <p className={`mt-0.5 text-sm font-bold ${card.color} font-display`}>
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
