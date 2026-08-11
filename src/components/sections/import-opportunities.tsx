"use client";

import { motion } from "framer-motion";
import { Anchor, Calendar, Package, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { importOpportunities } from "@/lib/data";

const statusGradients: Record<string, string> = {
  "In Transit": "from-blue-50 to-cyan-50",
  Loading: "from-amber-50 to-orange-50",
  Customs: "from-purple-50 to-pink-50",
};

const statusBadgeStyles: Record<string, string> = {
  "In Transit": "bg-blue-100 text-blue-700 border-blue-200",
  Loading: "bg-amber-100 text-amber-700 border-amber-200",
  Customs: "bg-purple-100 text-purple-700 border-purple-200",
};

export function ImportOpportunities() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Import Zone"
          title="Live Import Opportunities"
          description="Reserve space on incoming shipments. Get products at the best landed costs."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {importOpportunities.map((item, i) => (
            <motion.div
              key={item.product}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
              className="rounded-2xl border border-border-light bg-white overflow-hidden"
            >
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-br ${
                  statusGradients[item.status]
                } p-6`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{item.flag}</span>
                  <Badge
                    className={statusBadgeStyles[item.status]}
                  >
                    {item.status}
                  </Badge>
                </div>
                <h3 className="font-display font-bold text-navy text-lg mt-3">
                  {item.product}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.origin}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-muted-foreground">
                      Shipment Progress
                    </span>
                    <span className="font-semibold text-navy">
                      {item.progress}%
                    </span>
                  </div>
                  <Progress
                    value={item.progress}
                    className="h-2 [&>div]:bg-orange"
                  />
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">
                        Arrival
                      </p>
                      <p className="font-medium text-navy">{item.arrival}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">
                        Quantity
                      </p>
                      <p className="font-medium text-navy">{item.quantity}</p>
                    </div>
                  </div>
                </div>

                {/* Price + Supplier */}
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Landed Price
                    </p>
                    <p className="font-display font-bold text-navy">
                      {item.price}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.supplier}
                  </p>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full">
                  <Anchor className="size-4" />
                  Reserve Space
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
