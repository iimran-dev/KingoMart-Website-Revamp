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
      <div className="flex items-center justify-center h-8">
        <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#E11D48] font-sans">
          Sadia
        </span>
      </div>
    );
  }
  if (name === "Almarai") {
    return (
      <div className="flex flex-col items-center justify-center h-8">
        <span className="text-base sm:text-lg font-bold tracking-tight text-[#0284C7] font-sans leading-none">
          Almarai
        </span>
        <span className="text-[9px] font-semibold text-[#0369A1] tracking-widest uppercase">
          المراعي
        </span>
      </div>
    );
  }
  if (name === "Coca-Cola") {
    return (
      <div className="flex items-center justify-center h-8">
        <span className="text-lg sm:text-xl font-black italic tracking-tighter text-[#DC2626] font-serif">
          Coca-Cola
        </span>
      </div>
    );
  }
  if (name === "Nestlé") {
    return (
      <div className="flex items-center justify-center h-8">
        <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1E40AF] font-sans">
          Nestlé
        </span>
      </div>
    );
  }
  if (name === "PepsiCo") {
    return (
      <div className="flex items-center justify-center gap-1 h-8">
        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#DC2626] via-[#0284C7] to-[#1E3A8A]" />
        <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#1E3A8A] uppercase font-sans">
          PEPSICO
        </span>
      </div>
    );
  }
  return <span className="text-sm font-bold text-slate-800">{name}</span>;
}

export function VerifiedSuppliers() {
  return (
    <section id="suppliers" className="py-20 sm:py-24 lg:py-28 bg-white">
      <Container>
        {/* Combined 2-Column Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-8 items-stretch">
          {/* Left Box: Top Verified Suppliers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-6 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-7 lg:p-8 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display mb-1">
                Top Verified Suppliers
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mb-6 leading-relaxed">
                Factory-direct global partners vetted for quality & reliability
              </p>

              {/* 5 Brand Cards Row */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 sm:gap-4">
                {topVerifiedSuppliers.map((supplier) => (
                  <div
                    key={supplier.name}
                    className="rounded-2xl border border-slate-100 bg-white p-4 flex flex-col items-center justify-between text-center min-h-[115px] sm:min-h-[125px] shadow-2xs hover:shadow-md transition-shadow group cursor-pointer"
                  >
                    {/* Brand Logo Top */}
                    <div className="w-full flex items-center justify-center my-auto">
                      <BrandLogo name={supplier.name} />
                    </div>

                    {/* Years & Flag Bottom */}
                    <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-slate-100 w-full justify-center">
                      <span className="text-xs font-semibold text-slate-500">
                        {supplier.years}
                      </span>
                      <span className="text-xs sm:text-sm">{supplier.flag}</span>
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
            className="lg:col-span-6 rounded-3xl border border-slate-100 bg-[#F8FAFC] p-6 sm:p-7 lg:p-8 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 font-display mb-1">
                Industries We Serve
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mb-6 leading-relaxed">
                Custom B2B wholesale solutions tailored for your business type
              </p>

              {/* 6 Industry Cards Row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3.5 sm:gap-4">
                {industriesWeServe.map((industry) => {
                  const Icon = industryIconMap[industry.icon] || Store;
                  return (
                    <div
                      key={industry.name}
                      className="rounded-2xl border border-slate-100 bg-white p-4 flex flex-col items-center justify-between text-center min-h-[115px] sm:min-h-[125px] shadow-2xs hover:shadow-md hover:border-orange/30 transition-all group cursor-pointer"
                    >
                      {/* Icon Top */}
                      <div className="flex h-11 w-11 items-center justify-center my-auto text-slate-700 group-hover:text-orange transition-colors">
                        <Icon className="size-6 stroke-[1.75]" />
                      </div>

                      {/* Industry Name Bottom */}
                      <span className="text-xs font-bold text-slate-800 leading-snug mt-2.5 line-clamp-2">
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
