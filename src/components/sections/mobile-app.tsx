"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Bell,
  FileText,
  Truck,
  Shield,
  QrCode,
  ArrowRight,
  Package,
  CreditCard,
  Home,
  Search,
  User,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const appFeatures = [
  {
    icon: Package,
    title: "Track Orders",
    description: "Real-time tracking from warehouse to your doorstep.",
  },
  {
    icon: FileText,
    title: "Manage Invoices",
    description: "Create, send, and track invoices in one place.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "End-to-end encrypted transactions with trade protection.",
  },
  {
    icon: Truck,
    title: "Shipments Tracking",
    description: "Monitor all shipments and shared logistics routes live.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss a deal, delivery, or price drop alert.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function MobileAppSection() {
  return (
    <section className="overflow-hidden bg-navy py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Mobile App"
          title="Manage Your Business On the Go"
          description="Download the KingoMart app to track orders, manage invoices, and stay connected with suppliers — anywhere."
          light={true}
        />

        <div className="mt-14 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column — Feature List */}
          <div className="space-y-6">
            {appFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                  <feature.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut" as const,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="relative mx-auto h-[560px] w-[280px] rounded-[40px] border-4 border-white/20 bg-white/5 p-3 shadow-2xl backdrop-blur-sm"
            >
              {/* Inner Screen */}
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-white/10 to-white/5">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-sm font-bold text-white">KingoMart</span>
                  <div className="relative">
                    <Bell className="size-4 text-gray-400" />
                    <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange" />
                  </div>
                </div>

                {/* Greeting */}
                <div className="px-5 pt-2">
                  <p className="text-xs text-gray-400">Welcome back,</p>
                  <p className="text-sm font-semibold text-white">
                    Ahmed &#x1F44B;
                  </p>
                </div>

                {/* Order Cards */}
                <div className="mt-4 flex flex-1 flex-col gap-2 px-4">
                  <div className="flex items-center gap-3 rounded-xl border-l-[3px] border-l-orange bg-white/5 px-3 py-2.5">
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold text-white">
                        Frozen Chicken
                      </p>
                      <p className="text-[10px] text-gray-400">500kg — In Transit</p>
                    </div>
                    <div className="rounded-full bg-orange/20 px-2 py-0.5 text-[9px] font-bold text-orange">
                      Live
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border-l-[3px] border-l-success bg-white/5 px-3 py-2.5">
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold text-white">
                        Basmati Rice
                      </p>
                      <p className="text-[10px] text-gray-400">2 tons — Delivered</p>
                    </div>
                    <div className="rounded-full bg-success/20 px-2 py-0.5 text-[9px] font-bold text-success">
                      Done
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border-l-[3px] border-l-blue-400 bg-white/5 px-3 py-2.5">
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold text-white">
                        Sunflower Oil
                      </p>
                      <p className="text-[10px] text-gray-400">800L — Processing</p>
                    </div>
                    <div className="rounded-full bg-blue-400/20 px-2 py-0.5 text-[9px] font-bold text-blue-400">
                      New
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="mt-auto flex items-center justify-around border-t border-white/10 px-4 py-3">
                  <Home className="size-5 text-orange" />
                  <Search className="size-5 text-gray-500" />
                  <Truck className="size-5 text-gray-500" />
                  <User className="size-5 text-gray-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* App Store Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            className="gap-3 rounded-xl border-white/20 bg-transparent px-6 py-3 text-white hover:bg-white/10"
          >
            <Smartphone className="size-5" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight text-gray-400">
                Download on the
              </span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className="gap-3 rounded-xl border-white/20 bg-transparent px-6 py-3 text-white hover:bg-white/10"
          >
            <Smartphone className="size-5" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] leading-tight text-gray-400">
                Get it on
              </span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
}
