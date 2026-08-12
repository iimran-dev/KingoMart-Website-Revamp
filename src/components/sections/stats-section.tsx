"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { statistics } from "@/lib/data";

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-orange/10 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 h-[300px] w-[300px] rounded-full bg-orange/5 blur-[100px]" />
      </div>

      <Container className="relative">
        {/* Top CTA area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Join the Movement
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white font-display sm:text-4xl lg:text-5xl">
            Ready to Transform
            <br className="hidden sm:block" /> Your Supply Chain?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Join 50,000+ buyers and 850+ suppliers already trading smarter on
            KingoMart.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-12 rounded-lg bg-orange px-8 text-base font-semibold text-white shadow-lg shadow-orange/25 hover:bg-orange/90"
            >
              Get Started Free
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-lg border-white/20 px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white font-display sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-3 border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {["K", "S", "A", "M"].map((letter, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy bg-gradient-to-br from-orange to-orange/80 text-[10px] font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <span>
              Trusted by <strong className="text-white">50,000+</strong> buyers across
              Africa
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
