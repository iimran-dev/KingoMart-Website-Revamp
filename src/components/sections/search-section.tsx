"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { quickFilters } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SearchSection() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="AI-Powered Search"
          title="What are you looking to buy?"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-14 mx-auto max-w-2xl"
        >
          <div
            className={cn(
              "relative rounded-2xl transition-shadow duration-200",
              isFocused && "shadow-[0_0_0_4px_rgba(255,107,0,0.1)]"
            )}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search products, suppliers, or categories..."
              className="w-full h-14 lg:h-16 rounded-2xl border border-border-light pl-12 pr-32 text-base focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange bg-white placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange text-white rounded-xl h-10 px-6 font-semibold text-sm flex items-center gap-2 hover:bg-orange/90 transition-colors">
              <Search className="size-4" />
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setQuery(filter)}
                className="px-4 py-2 rounded-full border border-border-light bg-white text-sm text-gray-600 hover:border-orange hover:text-orange hover:bg-orange/5 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
