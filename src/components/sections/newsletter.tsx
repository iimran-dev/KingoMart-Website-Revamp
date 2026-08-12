"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");

  return (
    <section className="bg-neutral-bg py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-orange-500 to-green-500 px-6 py-16 sm:px-12 lg:py-20"
        >
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 rounded-full bg-white/5 blur-xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            {/* Sparkles Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <Sparkles className="size-7 text-white" />
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Get Weekly Wholesale Deals
            </h2>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Subscribe to receive the best wholesale deals, import
              opportunities, and market insights directly to your inbox.
            </p>

            {/* Email Input + Subscribe */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-lg flex-col gap-3 mx-auto sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-xl border border-white/30 bg-white/20 px-5 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <Button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-white px-8 font-semibold text-navy shadow-lg hover:bg-white/90"
              >
                Subscribe
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>

            {/* Company Name */}
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name (optional)"
              className="mt-3 h-12 w-full max-w-lg rounded-xl border border-white/30 bg-white/20 px-5 text-sm text-white placeholder-white/60 backdrop-blur-sm mx-auto block focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            {/* Industry Select */}
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-3 h-12 w-full max-w-lg rounded-xl border border-white/30 bg-white/20 px-5 text-sm text-white backdrop-blur-sm mx-auto block focus:outline-none focus:ring-2 focus:ring-white/40 [&>option]:text-navy [&>option]:bg-white"
            >
              <option value="" className="text-navy">
                Select your industry (optional)
              </option>
              <option value="retail">Retail Store</option>
              <option value="restaurant">Restaurant</option>
              <option value="hotel">Hotel</option>
              <option value="distributor">Distributor</option>
              <option value="supermarket">Supermarket</option>
              <option value="cafe">Cafe</option>
              <option value="other">Other</option>
            </select>

            {/* Sub Text */}
            <p className="mt-4 text-sm text-white/60">
              Join 12,000+ business subscribers. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
