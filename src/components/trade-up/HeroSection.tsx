import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Calculator } from "lucide-react";
import heroImage from "@/assets/dealership-hero-new.jpg";

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-success/20 rounded-full p-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-bold text-xl text-card-foreground">Instant Offer</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-card-foreground">15-minute appraisal</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Quick professional evaluation with instant 7-day guaranteed offer (valid 300 miles)</p>
              </div>
            </div>
            
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-success/20 rounded-full p-2">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-bold text-xl text-card-foreground">Equity Protection</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-success/20 rounded-lg px-3 py-1 inline-block">
                  <span className="text-sm font-semibold text-success">Up to $300 Credit</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Get credit for the difference if we retail your trade for more within 7 days</p>
              </div>
            </div>
            
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-accent/20 rounded-full p-2">
                  <Calculator className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-xl text-card-foreground">Tax Savings</h3>
              </div>
              <div className="space-y-2">
                <div className="bg-accent/20 rounded-lg px-3 py-1 inline-block">
                  <span className="text-sm font-semibold text-accent-foreground">Illinois Advantage</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Instant sales tax reduction on your trade value - save hundreds immediately</p>
              </div>
            </div>
          </div>

          <div className="sticky top-4 z-50">
            <Button 
              variant="urgency" 
              size="xl" 
              onClick={scrollToCalculator}
              className="shadow-2xl bg-nissan hover:bg-urgency text-nissan-foreground hover:text-urgency-foreground transition-all duration-500 transform hover:scale-105"
            >
              Reserve My Bundle Now — Save Tax Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};