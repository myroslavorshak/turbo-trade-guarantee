import { useEffect } from "react";
import { HeroSection } from "@/components/trade-up/HeroSection";
import { CalculatorCard } from "@/components/trade-up/CalculatorCard";
import { OfferLockFlow } from "@/components/trade-up/OfferLockFlow";
import { EquityProtectionExplainer } from "@/components/trade-up/EquityProtectionExplainer";
import { InventoryCarousel } from "@/components/trade-up/InventoryCarousel";
import { TestimonialsSection } from "@/components/trade-up/TestimonialsSection";
import { FAQSection } from "@/components/trade-up/FAQSection";
import { ComplianceDisclaimer } from "@/components/trade-up/ComplianceDisclaimer";

const TradeUp = () => {
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = "Trade-Up Turbo | 7-Day Offer & 0% for 60 | Nissan Dealer, IL";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get your 7-day guaranteed trade-in offer with instant IL sales tax savings. 15-minute appraisal, equity protection promise, and 0% financing for 60 months.');
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Trade-Up Turbo | 7-Day Offer & 0% for 60 | Nissan Dealer, IL');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Get your 7-day guaranteed trade-in offer with instant IL sales tax savings. 15-minute appraisal, equity protection promise, and 0% financing for 60 months.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CalculatorCard />
      <OfferLockFlow />
      <EquityProtectionExplainer />
      <InventoryCarousel />
      <TestimonialsSection />
      <FAQSection />
      <ComplianceDisclaimer />
    </div>
  );
};

export default TradeUp;