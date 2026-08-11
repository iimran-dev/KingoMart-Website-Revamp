"use client";

import { motion } from "framer-motion";
import { MapPin, Truck, Clock, ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { logisticsRoutes } from "@/lib/data";

const statusStyles: Record<string, string> = {
  Loading: "bg-amber-100 text-amber-700",
  "In Transit": "bg-blue-100 text-blue-700",
  Departing: "bg-green-100 text-green-700",
};

export function LogisticsSection() {
  return (
    <section className="bg-neutral-bg py-20 lg:py-24" id="logistics">
      <Container>
        <SectionHeading
          eyebrow="Shared Logistics"
          title="Join a Truck & Ship Smart"
          description="Split shipping costs with other buyers. Real-time tracking on every route across Algeria."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {logisticsRoutes.map((route, i) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 }}
              className="rounded-2xl border border-border-light bg-white p-6"
            >
              {/* Top: Route + Status */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-navy font-semibold">
                  <MapPin className="size-4 text-orange" />
                  <span>
                    {route.from} → {route.to}
                  </span>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    statusStyles[route.status]
                  }`}
                >
                  {route.status}
                </span>
              </div>

              {/* Distance */}
              <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5">
                <Truck className="size-3.5" />
                {route.distance}
              </p>

              {/* Seat availability */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Users className="size-3.5" />
                    {route.seats} of {route.totalSeats} seats available
                  </span>
                </div>
                <Progress
                  value={(route.seats / route.totalSeats) * 100}
                  className="h-2 [&>div]:bg-orange"
                />
              </div>

              {/* Savings + ETA row */}
              <div className="flex justify-between items-center mt-4">
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                  Save {route.savings}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  ETA {route.eta}
                </span>
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                size="sm"
                className="mt-5 w-full"
              >
                Reserve Seat
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Button className="bg-orange text-white hover:bg-orange/90">
            Explore Live Shipments
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
