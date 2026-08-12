"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { wholesaleDeals } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function DealsSection() {
  return (
    <section id="deals" className="bg-neutral-bg py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Wholesale Deals"
          title="Hot Deals on Bulk Orders"
          description="Limited-time wholesale offers from verified suppliers. Order now to lock in the best prices."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wholesaleDeals.map((deal, i) => (
            <motion.div
              key={deal.product}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white transition-all duration-300 hover:border-orange/30 hover:shadow-lg hover:shadow-orange/5"
            >
              {/* Image placeholder */}
              <div className="relative h-40 w-full bg-gradient-to-br from-neutral-bg to-orange/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-orange shadow-sm">
                    <ShoppingCart className="size-7" />
                  </div>
                </div>
                {/* Discount badge */}
                <Badge className="absolute left-3 top-3 border-0 bg-orange px-2.5 py-1 text-xs font-bold text-white">
                  {deal.discount}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium text-orange">{deal.category}</p>
                <h3 className="mt-1 line-clamp-2 text-base font-bold text-navy font-display">
                  {deal.product}
                </h3>

                <div className="mt-auto pt-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-orange font-display">
                      {deal.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{deal.unit}</span>
                  </div>

                  {/* MOQ & Origin */}
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>MOQ: {deal.moq}</span>
                    <span className="flex items-center gap-1">
                      {deal.flag} {deal.country}
                    </span>
                  </div>

                  {/* Supplier */}
                  <div className="mt-3 flex items-center gap-2 border-t border-border-light pt-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-bg text-[10px]">
                      {deal.flag}
                    </div>
                    <span className="truncate text-xs font-medium text-navy">
                      {deal.supplier}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-lg border-border-light px-8 text-sm font-semibold text-navy hover:bg-white"
          >
            View All Deals
          </Button>
        </div>
      </Container>
    </section>
  );
}
