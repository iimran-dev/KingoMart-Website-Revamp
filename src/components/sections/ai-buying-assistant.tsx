"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Sparkles, Truck, Shield, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const chatMessages = [
  {
    type: "user" as const,
    text: "I need 500kg Frozen Chicken for my restaurant",
  },
  {
    type: "assistant" as const,
    text: "Here are the best matches for your request:",
  },
];

const howFeatures = [
  {
    icon: Sparkles,
    title: "Smart Matching",
    description:
      "AI analyzes your requirements and matches with the best suppliers",
  },
  {
    icon: Truck,
    title: "Logistics Optimization",
    description:
      "Automatically finds shared shipping options to reduce costs",
  },
  {
    icon: Shield,
    title: "Price Comparison",
    description:
      "Compares prices across suppliers to find the best deals",
  },
  {
    icon: Bot,
    title: "24/7 Available",
    description:
      "Get instant quotes and product recommendations anytime",
  },
];

const messageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" as const },
  }),
};

const featureCardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function AIBuyingAssistantSection() {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="AI-Powered"
          title="Your AI Buying Assistant"
          description="Tell us what you need. Our AI finds the best suppliers, prices, and shipping options in seconds."
        />

        <div className="mt-14 grid items-start gap-16 lg:grid-cols-2">
          {/* Left Column — Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="overflow-hidden rounded-2xl border border-border-light bg-white shadow-lg"
          >
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b border-border-light px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange/10">
                <Bot className="size-4 text-orange" />
              </div>
              <div>
                <span className="text-sm font-semibold text-navy">
                  KingoMart AI
                </span>
              </div>
              <div className="ml-1 flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="max-h-[400px] space-y-4 overflow-y-auto p-6 scrollbar-thin">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={messageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  className={
                    msg.type === "user"
                      ? "ml-auto max-w-[80%]"
                      : "max-w-[85%]"
                  }
                >
                  <div
                    className={
                      msg.type === "user"
                        ? "rounded-2xl rounded-br-md bg-navy px-4 py-3 text-sm text-white"
                        : "rounded-2xl rounded-bl-md bg-neutral-bg px-4 py-3 text-sm text-navy"
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Product Result Cards */}
              <motion.div
                custom={2}
                variants={messageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="max-w-[85%] space-y-2"
              >
                <div className="rounded-xl border border-border-light bg-white p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        Frozen Chicken Thighs
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        PoultryPro Brasil &middot; Brazil
                      </p>
                    </div>
                    <p className="text-sm font-bold text-orange">$2.15/kg</p>
                  </div>
                  <button className="mt-2 text-xs font-semibold text-orange hover:underline">
                    View Deal &rarr;
                  </button>
                </div>

                <div className="rounded-xl border border-border-light bg-white p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        Whole Frozen Chicken
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        AgroBrasil Exports &middot; Brazil
                      </p>
                    </div>
                    <p className="text-sm font-bold text-orange">$2.35/kg</p>
                  </div>
                  <button className="mt-2 text-xs font-semibold text-orange hover:underline">
                    View Deal &rarr;
                  </button>
                </div>
              </motion.div>

              {/* Logistics Card */}
              <motion.div
                custom={3}
                variants={messageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                className="max-w-[85%]"
              >
                <div className="rounded-2xl rounded-bl-md bg-neutral-bg px-4 py-3 text-sm text-navy">
                  I found shared truck options too:
                </div>
                <div className="mt-2 rounded-xl border border-border-light bg-success/5 p-3">
                  <div className="flex items-center gap-2">
                    <Truck className="size-4 text-success" />
                    <span className="text-sm font-semibold text-navy">
                      Algiers &rarr; Your City
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>3 seats available</span>
                    <span>&middot;</span>
                    <span className="font-semibold text-success">35% savings</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Chat Input */}
            <div className="flex items-center gap-3 border-t border-border-light px-6 py-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about products, prices, shipping..."
                className="h-10 flex-1 rounded-xl border border-border-light px-4 text-sm text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/20"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-white transition-colors hover:bg-orange/90">
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column — How AI Sourcing Works */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="font-display text-xl font-bold text-navy"
            >
              How AI Sourcing Works
            </motion.h3>

            <div className="mt-8 space-y-6">
              {howFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  variants={featureCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <feature.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" as const }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button className="rounded-xl bg-orange text-white hover:bg-orange/90">
                Try AI Sourcing
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="ghost" className="rounded-xl text-navy hover:text-navy/80">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
