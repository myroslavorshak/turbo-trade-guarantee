import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calculator, DollarSign } from "lucide-react";

interface EquityProtectionConfig {
  maxCreditCap: number;
  enabled: boolean;
}

// This would typically come from your CMS or API
const equityConfig: EquityProtectionConfig = {
  maxCreditCap: 300,
  enabled: true
};

export const EquityProtectionExplainer = () => {
  if (!equityConfig.enabled) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Complete Trade-Up Bundle
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">Equity Protection Promise</h2>
            <p className="text-muted-foreground text-lg">
              Part of our comprehensive trade-up package - we guarantee you get the best value for your trade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-success" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                    <p className="text-sm">We appraise your trade and provide an instant offer</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                    <p className="text-sm">If we retail your trade for more within 7 days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-success-foreground text-sm font-bold">3</div>
                    <p className="text-sm">You receive a credit for the difference</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  Credit Calculation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Example:</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Your offer:</span>
                      <span>$18,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>We retail for:</span>
                      <span>$18,500</span>
                    </div>
                    <div className="border-t pt-1 flex justify-between font-semibold text-success">
                      <span>Your credit:</span>
                      <span>$300 (capped)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Badge variant="outline" className="border-success text-success">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Max Credit Cap: ${equityConfig.maxCreditCap}
                  </Badge>
                </div>

                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">• Credit issued as post-sale goodwill adjustment</p>
                  <p className="mb-1">• Valid only if retail occurs within 7 days</p>
                  <p>• Subject to vehicle condition and market factors</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 mb-8">
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Your Complete Trade-Up Bundle Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-2">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="font-medium">Equity Protection</div>
                  <div className="text-muted-foreground">Up to $300 credit guarantee</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-success-foreground mx-auto mb-2">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div className="font-medium">Tax Savings</div>
                  <div className="text-muted-foreground">Instant IL sales tax reduction</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground mx-auto mb-2">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div className="font-medium">Special Financing</div>
                  <div className="text-muted-foreground">0% APR for 60 months*</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6 inline-block">
              <h3 className="text-xl font-bold mb-2">Maximum Protection</h3>
              <p className="text-sm opacity-90">
                Your trade value is protected up to <span className="font-bold">${equityConfig.maxCreditCap}</span> above our initial offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};