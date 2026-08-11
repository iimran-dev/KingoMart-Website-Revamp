"use client";

import { BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { suppliers } from "@/lib/data";

export function VerifiedSuppliers() {
  const duplicated = suppliers.concat(suppliers);

  return (
    <section className="bg-neutral-bg py-20 lg:py-24" id="suppliers">
      <Container>
        <SectionHeading
          eyebrow="Verified Partners"
          title="Trusted Global Suppliers"
          description="Every supplier is vetted through our multi-step verification process."
        />
      </Container>

      {/* Carousel */}
      <div className="mt-14 overflow-hidden group">
        <style>{`
          @keyframes supplier-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .supplier-track {
            animation: supplier-scroll 40s linear infinite;
          }
          .group:hover .supplier-track {
            animation-play-state: paused;
          }
        `}</style>

        <div className="supplier-track flex gap-0 w-max">
          {duplicated.map((supplier, i) => (
            <div
              key={`${supplier.name}-${i}`}
              className="shrink-0 w-72 rounded-2xl border border-border-light bg-white p-6 mx-3"
            >
              {/* Top: Flag + Verified */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">{supplier.flag}</span>
                <BadgeCheck className="size-5 text-success" />
              </div>

              {/* Company name */}
              <h3 className="font-display font-bold text-navy text-lg mt-4">
                {supplier.name}
              </h3>

              {/* Country + Category */}
              <p className="text-sm text-muted-foreground mt-1">
                {supplier.country} · {supplier.category}
              </p>

              {/* Years badge */}
              <Badge variant="secondary" className="mt-3">
                {supplier.years} years partnership
              </Badge>

              {/* Products count */}
              <p className="text-sm text-muted-foreground mt-3">
                {supplier.products} products listed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
