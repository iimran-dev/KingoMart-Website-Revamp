'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero/hero-section';
import { TrustSection } from '@/components/sections/trust-section';
import { SearchSection } from '@/components/sections/search-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { LogisticsSection } from '@/components/sections/logistics-section';
import { SupplierJourney } from '@/components/sections/supplier-journey';
import { ImportOpportunities } from '@/components/sections/import-opportunities';
import { DealsSection } from '@/components/sections/deals-section';
import { VerifiedSuppliers } from '@/components/sections/verified-suppliers';
import { MobileAppSection } from '@/components/sections/mobile-app';
import { StatsSection } from '@/components/sections/stats-section';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { AIBuyingAssistantSection } from '@/components/sections/ai-buying-assistant';
import { NewsletterSection } from '@/components/sections/newsletter';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustSection />
        <CategoriesSection />
        <FeaturesSection />
        <LogisticsSection />
        <SupplierJourney />
        <ImportOpportunities />
        <DealsSection />
        <VerifiedSuppliers />
        <MobileAppSection />
        <StatsSection />
        <TestimonialsSection />
        <AIBuyingAssistantSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
