"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beef, GlassWater, Milk, Apple, ShoppingBasket, Fish } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";

const categoryIcons = [Beef, GlassWater, Milk, Apple, ShoppingBasket, Fish];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-neutral-bg py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Browse Categories"
          title="Explore 25,000+ Products"
          description="From frozen meats to packaging supplies — find everything your business needs in one marketplace."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[i];
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
                  "group relative flex items-start gap-4 rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5 lg:p-8"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                    cat.color.replace(/from-\S+\s+to-\S+/, "from-orange to-orange/80")
                  )}
                >
                  <Icon className="size-6" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-navy font-display">
                    {cat.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-navy">
                      {cat.productCount} Products
                    </span>
                    <span className="h-1 w-1 rounded-full bg-border-light" />
                    <span>{cat.supplierCount} Suppliers</span>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-lg border-border-light px-8 text-sm font-semibold text-navy hover:bg-white"
          >
            View All Categories
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
