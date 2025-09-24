import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Calculator } from "lucide-react";
import heroImage from "@/assets/dealership-hero.jpg";

export const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator-card');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero/80" />
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Trade-Up Turbo—
            <br />
            <span className="text-accent">Upgrade without guesswork</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">15-Minute Appraisal</h3>
                <p className="text-sm opacity-90">Quick, professional evaluation</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Instant Offer</h3>
                <p className="text-sm opacity-90">Valid 7 days/300 miles</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-6 h-6 text-success mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Equity Protection Promise</h3>
                <p className="text-sm opacity-90">Credit difference if we retail higher</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Calculator className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Sales-Tax Advantage</h3>
                <p className="text-sm opacity-90">IL trade-in tax savings</p>
              </div>
            </div>
          </div>

          <div className="sticky top-4 z-50">
            <Button 
              variant="urgency" 
              size="xl" 
              onClick={scrollToCalculator}
              className="shadow-2xl"
            >
              Reserve My Bundle Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};