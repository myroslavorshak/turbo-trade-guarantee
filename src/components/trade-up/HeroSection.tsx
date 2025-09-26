import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Calculator } from "lucide-react";
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
            <div className="group bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-success/20 rounded-full p-3">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-2xl text-card-foreground">Instant Offer</h3>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-lg font-semibold text-card-foreground">15-minute appraisal</span>
              </div>
              
              {/* Hover description */}
              <div className="absolute inset-0 bg-card/98 backdrop-blur-sm rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-success/20 rounded-full p-3">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-bold text-2xl text-card-foreground">Instant Offer</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-lg font-semibold text-card-foreground">15-minute appraisal</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Quick professional evaluation with instant 7-day guaranteed offer valid for 300 miles. No pressure, no hassle.</p>
                  <div className="bg-success/10 rounded-lg px-3 py-2 inline-block">
                    <span className="text-sm font-semibold text-success">✓ 7-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-success/20 rounded-full p-3">
                  <Shield className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-bold text-2xl text-card-foreground">Equity Protection</h3>
              </div>
              <div className="bg-success/20 rounded-lg px-3 py-1 inline-block">
                <span className="text-lg font-semibold text-success">Up to $300 Credit</span>
              </div>
              
              {/* Hover description */}
              <div className="absolute inset-0 bg-card/98 backdrop-blur-sm rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-success/20 rounded-full p-3">
                    <Shield className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-bold text-2xl text-card-foreground">Equity Protection</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-success/20 rounded-lg px-3 py-2 inline-block">
                    <span className="text-lg font-semibold text-success">Up to $300 Credit</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Get credit for the difference if we retail your trade for more within 7 days. Your equity is completely protected.</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Maximum $300 credit guarantee</div>
                    <div>• Valid for 7 days after appraisal</div>
                    <div>• Automatic credit processing</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-card/95 backdrop-blur-sm rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-accent/20 rounded-full p-3">
                  <Calculator className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-2xl text-card-foreground">Tax Savings</h3>
              </div>
              <div className="bg-accent/20 rounded-lg px-3 py-1 inline-block">
                <span className="text-lg font-semibold text-accent-foreground">Illinois Advantage</span>
              </div>
              
              {/* Hover description */}
              <div className="absolute inset-0 bg-card/98 backdrop-blur-sm rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-accent/20 rounded-full p-3">
                    <Calculator className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl text-card-foreground">Tax Savings</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-accent/20 rounded-lg px-3 py-2 inline-block">
                    <span className="text-lg font-semibold text-accent-foreground">Illinois Advantage</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Instant sales tax reduction on your trade value - save hundreds immediately on your Illinois vehicle purchase.</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>• Immediate tax credit applied</div>
                    <div>• Based on trade vehicle value</div>
                    <div>• Hundreds in instant savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-4 z-50">
            <Button 
              variant="default" 
              size="xl" 
              onClick={handleReserveBundle}
              className="shadow-2xl bg-urgency hover:bg-nissan text-urgency-foreground hover:text-nissan-foreground transition-all duration-300 transform hover:scale-105"
            >
              Reserve My Bundle Now — Save Tax Today
            </Button>
          </div>
        </div>
      </div>
      
      <ReserveBundleForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};