"use client";

import { motion } from "framer-motion";
import { Package, Truck, FileText, Bell, QrCode } from "lucide-react";
import { Container } from "@/components/layout/container";
import { appFeatures, platformStats } from "@/lib/data";

const appIconMap = {
  Package,
  Truck,
  FileText,
  Bell,
} as const;

type IconKey = keyof typeof appIconMap;

export function MobileAppSection() {
  return (
    <section id="mobile-app" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        {/* Top Dark Navy App Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#06152a] p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-800/80"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Area (Titles + 4 Feature Badges) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                  The KingoMart App
                </h3>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight mt-1 mb-8">
                  Your Business, On the Go
                </h2>

                {/* 4 Feature Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {appFeatures.map((feature) => {
                    const Icon = appIconMap[feature.icon as IconKey] || Package;
                    return (
                      <div
                        key={feature.title}
                        className="flex items-start gap-3.5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white border border-white/10 shadow-2xs">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                            {feature.title}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Middle: 3-Phone Mockup */}
            <div className="lg:col-span-3 flex justify-center py-2 lg:py-0">
              <img
                src="/phone-mockup.png"
                alt="KingoMart Mobile App Mockup"
                className="h-64 sm:h-72 lg:h-80 w-auto object-contain pointer-events-none drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Side: Download Badges & QR Code */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Download the App Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-5">
                Available on Android & iOS
              </p>

              {/* Badges + QR Code Wrapper */}
              <div className="flex items-center gap-3">
                {/* Store Buttons */}
                <div className="flex flex-col gap-2.5">
                  {/* Google Play Button */}
                  <a
                    href="#google-play"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-black/60 px-4 py-2 hover:bg-black/90 transition-all shadow-sm group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5 fill-white shrink-0"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186c-.194-.176-.31-.43-.31-.72V2.534c0-.29.116-.544.31-.72zm11.31 9.057l2.424 2.424-9.878 5.679 7.454-8.103zm0-1.742L7.465 1.026l9.878 5.679-2.424 2.424zM18.736 12l2.366 1.356c.49.28.49.736 0 1.016L18.736 12z" />
                    </svg>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-tight">
                        GET IT ON
                      </span>
                      <span className="text-xs font-bold text-white leading-tight">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* App Store Button */}
                  <a
                    href="#app-store"
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-black/60 px-4 py-2 hover:bg-black/90 transition-all shadow-sm group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5 fill-white shrink-0"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-1 .04-2.17.67-2.85 1.46-.61.71-1.14 1.86-.99 2.96 1.11.09 2.22-.57 2.85-1.38z" />
                    </svg>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-tight">
                        Download on the
                      </span>
                      <span className="text-xs font-bold text-white leading-tight">
                        App Store
                      </span>
                    </div>
                  </a>
                </div>

                {/* QR Code Box */}
                <div className="h-20 w-20 shrink-0 bg-white p-2 rounded-2xl border border-slate-200 flex items-center justify-center shadow-md">
                  <QrCode className="size-16 text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Platform Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-6 sm:mt-8 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-8 shadow-2xs"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/70 items-center text-center">
            {platformStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center pt-4 sm:pt-0 ${
                  index !== 0 ? "lg:pl-4" : ""
                }`}
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-orange font-display leading-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-600 mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
