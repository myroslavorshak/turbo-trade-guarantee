import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Calculator, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/dealership-hero-new.jpg";
import { ReserveBundleForm } from "@/components/forms/ReserveBundleForm";

export const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator-card');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReserveBundle = () => {
    setIsFormOpen(true);
  };

  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero/90" />
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24 z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-sm opacity-90">Trusted by 2,000+ customers</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Trade-Up Turbo
            <br />
            <span className="text-accent">Upgrade without guesswork</span>
          </h1>
          
          <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get your guaranteed 7-day offer, equity protection, and instant Illinois tax savings in one simple bundle.
          </p>

          <div className="sticky top-4 z-50 mb-12">
            <Button 
              size="xl" 
              onClick={handleReserveBundle}
              className="shadow-2xl bg-urgency hover:bg-nissan text-urgency-foreground hover:text-nissan-foreground transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            >
              Reserve My Bundle Now — Save Tax Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="text-center">
              <div className="bg-success/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-12 h-12 text-success mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Offer</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold">15-minute appraisal</span>
              </div>
              <div className="bg-success/20 rounded-full px-4 py-2 inline-block">
                <span className="text-sm font-semibold text-success">7-Day Guarantee</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Instant Offer Details</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Professional 15-minute evaluation</li>
                  <li>• Guaranteed offer valid for 7 days</li>
                  <li>• Valid for 300 miles of driving</li>
                  <li>• No pressure, no obligation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="text-center">
              <div className="bg-success/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-12 h-12 text-success mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Equity Protection</h3>
              <div className="bg-success/30 rounded-full px-6 py-3 inline-block">
                <span className="text-lg font-bold text-white">Up to $300 Credit</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <Shield className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Protection Details</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Get credit if we retail for more</li>
                  <li>• Maximum $300 credit guarantee</li>
                  <li>• Valid for 7 days after appraisal</li>
                  <li>• Automatic processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="text-center">
              <div className="bg-accent/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calculator className="w-12 h-12 text-accent mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Tax Savings</h3>
              <div className="bg-accent/30 rounded-full px-6 py-3 inline-block">
                <span className="text-lg font-bold text-accent-foreground">Illinois Advantage</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <Calculator className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Tax Savings Details</h3>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Instant sales tax reduction</li>
                  <li>• Based on your trade value</li>
                  <li>• Save hundreds immediately</li>
                  <li>• Applied at purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg opacity-90 mb-6">
            Ready to calculate your exact savings?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToCalculator}
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Use Tax Calculator Below
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      
      <ReserveBundleForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};