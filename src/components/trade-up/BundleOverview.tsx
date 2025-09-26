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
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold text-lg mb-2 text-card-foreground">Equity Protection</div>
                <div className="text-muted-foreground">Up to $300 credit guarantee</div>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-success" />
                </div>
                <div className="font-semibold text-lg mb-2 text-card-foreground">Tax Savings</div>
                <div className="text-muted-foreground">Instant IL sales tax reduction</div>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
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