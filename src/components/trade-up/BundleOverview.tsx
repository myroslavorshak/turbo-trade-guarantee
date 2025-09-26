import { Shield, Calculator, DollarSign } from "lucide-react";

export const BundleOverview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Your Complete Trade-Up Bundle Includes:
          </h2>
          
          <div className="bg-card rounded-xl p-8 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300" style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(16px)'
                }}>
                  <Shield className="w-10 h-10 mx-auto" style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(59,130,246,0.3))',
                    color: '#3b82f6'
                  }} />
                </div>
                <div className="font-semibold text-lg mb-2 text-card-foreground">Equity Protection</div>
                <div className="text-muted-foreground">Up to $300 credit guarantee</div>
              </div>
              
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300" style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(16px)'
                }}>
                  <Calculator className="w-10 h-10 mx-auto" style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(59,130,246,0.3))',
                    color: '#3b82f6'
                  }} />
                </div>
                <div className="font-semibold text-lg mb-2 text-card-foreground">Tax Savings</div>
                <div className="text-muted-foreground">Instant IL sales tax reduction</div>
              </div>
              
              <div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300" style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(16px)'
                }}>
                  <DollarSign className="w-10 h-10 mx-auto" style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 0 8px rgba(59,130,246,0.3))',
                    color: '#3b82f6'
                  }} />
                </div>
                <div className="font-semibold text-lg mb-2 text-card-foreground">Special Financing</div>
                <div className="text-muted-foreground">0% APR for 60 months*</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};