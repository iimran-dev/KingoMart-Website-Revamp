"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function CategoriesSection() {
  return (
    <section id="categories" className="py-10 sm:py-14 lg:py-16 bg-slate-50/50">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 lg:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Shop by Categories
            </h2>
            <p className="mt-1 text-xs sm:text-sm lg:text-base text-slate-500 font-normal">
              Explore top categories and discover quality products
            </p>
          </div>

          <a
            href="#all-categories"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange hover:border-orange/40 hover:bg-orange/5 transition-all shadow-xs group"
          >
            View all Categories
            <ChevronRight className="size-4 text-slate-400 group-hover:text-orange group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* 6 Category Vertical Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
          {categories.map((cat, i) => {
            return (
              <motion.a
                key={cat.name}
                href="#"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border-0 bg-[#F8FAFC] p-3.5 sm:p-4.5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-orange/5"
                )}
              >
                {/* Product Image - Completely borderless & fully contained */}
                <div className="relative h-28 sm:h-36 lg:h-40 w-full flex items-center justify-center p-1.5 mb-2.5 sm:mb-3 border-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                  />
                </div>

                {/* Category Content & Details */}
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base group-hover:text-orange transition-colors truncate">
                    {cat.name}
                  </h3>

                  {/* Products & Suppliers Stats */}
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-1.5 pb-3 border-b border-slate-200/60">
                    <span className="font-medium text-slate-600 truncate">
                      {cat.productCount}
                    </span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500 font-medium truncate">
                      {cat.supplierCount}
                    </span>
                  </div>

                  {/* Bottom Arrow Action */}
                  <div className="pt-2 sm:pt-2.5 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                      Browse
                    </span>
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-slate-200/60 text-slate-600 group-hover:bg-orange group-hover:text-white transition-all">
                      <ArrowRight className="size-3 sm:size-3.5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
