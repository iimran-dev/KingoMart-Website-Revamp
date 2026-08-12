"use client";

import { motion } from "framer-motion";
import {
  Store,
  UtensilsCrossed,
  Hotel,
  ShoppingBag,
  Warehouse,
  Coffee,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { topVerifiedSuppliers, industriesWeServe } from "@/lib/data";

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  UtensilsCrossed,
  Hotel,
  ShoppingBag,
  Warehouse,
  Coffee,
};

function BrandLogo({ name }: { name: string }) {
  if (name === "Sadia") {
    return (
      <div className="flex items-center justify-center h-7 sm:h-8">
        <span className="text-lg sm:text-2xl font-black tracking-tighter text-[#E11D48] font-sans">
          Sadia
        </span>
      </div>
    );
  }
  if (name === "Almarai") {
    return (
      <div className="flex flex-col items-center justify-center h-7 sm:h-8">
        <span className="text-xs sm:text-lg font-bold tracking-tight text-[#0284C7] font-sans leading-none">
          Almarai
        </span>
        <span className="text-[8px] sm:text-[9px] font-semibold text-[#0369A1] tracking-widest uppercase">
          المراعي
        </span>
      </div>
    );
  }
  if (name === "Coca-Cola") {
    return (
      <div className="flex items-center justify-center h-7 sm:h-8">
        <span className="text-base sm:text-xl font-black italic tracking-tighter text-[#DC2626] font-serif">
          Coca-Cola
        </span>
      </div>
    );
  }
  if (name === "Nestlé") {
    return (
      <div className="flex items-center justify-center h-7 sm:h-8">
        <span className="text-base sm:text-xl font-bold tracking-tight text-[#1E40AF] font-sans">
          Nestlé
        </span>
      </div>
    );
  }
  if (name === "PepsiCo") {
    return (
      <div className="flex items-center justify-center gap-1 h-7 sm:h-8">
        <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-gradient-to-r from-[#DC2626] via-[#0284C7] to-[#1E3A8A]" />
        <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-[#1E3A8A] uppercase font-sans">
          PEPSICO
        </span>
      </div>
    );
  }
  return <span className="text-xs sm:text-sm font-bold text-slate-800">{name}</span>;
}

export function VerifiedSuppliers() {
  return (
    <section id="suppliers" className="py-10 sm:py-14 lg:py-16 bg-white">
      <Container>
        {/* Left-Aligned Section Title */}
        <SectionHeading
          align="left"
          eyebrow="Verified Partners & Sectors"
          title="Global Suppliers & Industries We Serve"
          description="Direct factory partnerships vetted for quality, servicing retail, hospitality, food service, and logistics."
          className="mb-8 sm:mb-10 max-w-2xl"
        />

        {/* Combined 2-Column Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 xl:gap-6 items-stretch">
          {/* Left Box: Top Verified Suppliers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-6 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display mb-1">
                Top Verified Suppliers
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mb-5 leading-relaxed">
                Factory-direct global partners vetted for quality & reliability
              </p>

              {/* 5 Brand Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3.5">
                {topVerifiedSuppliers.map((supplier) => (
                  <div
                    key={supplier.name}
                    className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 flex flex-col items-center justify-between text-center min-h-[105px] sm:min-h-[115px] shadow-2xs hover:shadow-md transition-shadow group cursor-pointer"
                  >
                    {/* Brand Logo Top */}
                    <div className="w-full flex items-center justify-center my-auto">
                      <BrandLogo name={supplier.name} />
                    </div>

                    {/* Years & Flag Bottom */}
                    <div className="flex items-center gap-1 mt-2 pt-2 border-t border-slate-100 w-full justify-center">
                      <span className="text-[11px] font-semibold text-slate-500">
                        {supplier.years}
                      </span>
                      <span className="text-xs">{supplier.flag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Box: Industries We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display mb-1">
                Industries We Serve
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mb-5 leading-relaxed">
                Custom B2B wholesale solutions tailored for your business type
              </p>

              {/* 6 Industry Cards Row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-3.5">
                {industriesWeServe.map((industry) => {
                  const Icon = industryIconMap[industry.icon] || Store;
                  return (
                    <div
                      key={industry.name}
                      className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 flex flex-col items-center justify-between text-center min-h-[105px] sm:min-h-[115px] shadow-2xs hover:shadow-md hover:border-orange/30 transition-all group cursor-pointer"
                    >
                      {/* Icon Top */}
                      <div className="flex h-9 w-9 items-center justify-center my-auto text-slate-700 group-hover:text-orange transition-colors">
                        <Icon className="size-5 stroke-[1.75]" />
                      </div>

                      {/* Industry Name Bottom */}
                      <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-snug mt-2 line-clamp-2">
                        {industry.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
