import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Calculator, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/dealership-hero-new.jpg";

export const HeroSection = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator-card');
    calculator?.scrollIntoView({ behavior: 'smooth' });
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
              onClick={scrollToCalculator}
              className="shadow-2xl bg-urgency hover:bg-nissan text-urgency-foreground hover:text-nissan-foreground transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4"
            >
              Get Started — Calculate Your Savings
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)'
              }}>
                <CheckCircle className="w-12 h-12 text-white mx-auto drop-shadow-lg" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Offer</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-white/90 drop-shadow-sm" />
                <span className="text-lg font-semibold">15-minute appraisal</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-white/30">
                <span className="text-sm font-semibold text-white">7-Day Guarantee</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <div className="bg-primary/20 rounded-full p-3 w-16 h-16 mx-auto mb-4" style={{
                  background: 'linear-gradient(145deg, rgba(59,130,246,0.3), rgba(59,130,246,0.1))',
                  boxShadow: '0 4px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <CheckCircle className="w-10 h-10 text-primary mx-auto" />
                </div>
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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)'
              }}>
                <Shield className="w-12 h-12 text-white mx-auto drop-shadow-lg" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Equity Protection</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/30">
                <span className="text-lg font-bold text-white">Up to $300 Credit</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <div className="bg-primary/20 rounded-full p-3 w-16 h-16 mx-auto mb-4" style={{
                  background: 'linear-gradient(145deg, rgba(59,130,246,0.3), rgba(59,130,246,0.1))',
                  boxShadow: '0 4px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <Shield className="w-10 h-10 text-primary mx-auto" />
                </div>
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
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)'
              }}>
                <Calculator className="w-12 h-12 text-white mx-auto drop-shadow-lg" style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Tax Savings</h3>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/30">
                <span className="text-lg font-bold text-white">Illinois Advantage</span>
              </div>
            </div>

            {/* Hover Details */}
            <div className="absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-card-foreground">
              <div className="h-full flex flex-col justify-center text-center">
                <div className="bg-primary/20 rounded-full p-3 w-16 h-16 mx-auto mb-4" style={{
                  background: 'linear-gradient(145deg, rgba(59,130,246,0.3), rgba(59,130,246,0.1))',
                  boxShadow: '0 4px 16px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <Calculator className="w-10 h-10 text-primary mx-auto" />
                </div>
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
      </div>
    </section>
  );
};