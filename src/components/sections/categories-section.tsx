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
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight">
              Shop by Categories
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-base text-slate-500 font-normal">
              Explore top categories and discover quality products
            </p>
          </div>

          <a
            href="#all-categories"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange hover:border-orange/40 hover:bg-orange/5 transition-all shadow-xs group"
          >
            View all Categories
            <ChevronRight className="size-4 text-slate-400 group-hover:text-orange group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* 6 Category Vertical Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4.5 items-stretch">
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
                  "group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border-0 bg-[#F8FAFC] p-4 sm:p-5 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-orange/5"
                )}
              >
                {/* Product Image - Completely borderless & fully contained */}
                <div className="relative h-36 sm:h-40 lg:h-40 w-full flex items-center justify-center p-2 mb-3 sm:mb-4 border-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-full max-w-full h-auto w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105 pointer-events-none drop-shadow-xs"
                  />
                </div>

                {/* Category Title & Stats Row */}
                <div className="mt-auto">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display line-clamp-1 mb-4">
                    {cat.name}
                  </h3>

                  {/* Stats & Action Button Row */}
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                          {cat.productCount}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-normal block mt-0.5 leading-tight">
                          Products
                        </span>
                      </div>

                      <div className="h-6 w-[1px] bg-slate-200/80" />

                      <div>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-tight">
                          {cat.supplierCount}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-normal block mt-0.5 leading-tight">
                          Suppliers
                        </span>
                      </div>
                    </div>

                    {/* Orange Circle Arrow Button */}
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white shadow-xs transition-all duration-300 group-hover:bg-orange/90 group-hover:scale-110">
                      <ArrowRight className="size-3.5 sm:size-4" />
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
