import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FileText } from "lucide-react";

export const ComplianceDisclaimer = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary flex items-center justify-center gap-2">
              <FileText className="w-6 h-6" />
              Terms & Compliance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-urgency" />
                  Instant Offer Terms
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    • <strong>Inspection Required:</strong> All instant offers are contingent upon in-person vehicle inspection to verify condition, mileage, and title status.
                  </p>
                  <p>
                    • <strong>7-Day Validity:</strong> Offers valid for 7 calendar days or 300 additional miles on the odometer, whichever occurs first.
                  </p>
                  <p>
                    • <strong>Title Requirements:</strong> Vehicle must have clear title or existing loan with verifiable payoff amount.
                  </p>
                  <p>
                    • <strong>Condition Standards:</strong> Final offer subject to verification of mechanical condition, accident history, and exterior/interior wear.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  Equity Protection Details
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    • <strong>Post-Sale Credit:</strong> Equity Protection issued as goodwill credit if retail price delta is realized within 7 days of trade.
                  </p>
                  <p>
                    • <strong>Maximum Credit:</strong> Credit capped at $300 regardless of actual retail differential.
                  </p>
                  <p>
                    • <strong>Calculation Method:</strong> Based on actual retail sale price minus reconditioning costs, fees, and original trade allowance.
                  </p>
                  <p>
                    • <strong>Verification Required:</strong> Customer will receive documentation of retail transaction for transparency.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  Tax Calculator Disclaimer
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    • <strong>Estimates Only:</strong> Tax savings calculator provides estimates based on current Illinois tax rates and may not reflect final tax liability.
                  </p>
                  <p>
                    • <strong>Variable Factors:</strong> Actual savings depend on final vehicle prices, trade values, county of registration, and applicable exemptions.
                  </p>
                  <p>
                    • <strong>Additional Fees:</strong> Some taxes, fees, and charges may still apply regardless of trade-in credit.
                  </p>
                  <p>
                    • <strong>Rate Changes:</strong> Tax rates subject to change by local and state authorities without notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  General Terms
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    • <strong>Dealer Discretion:</strong> All offers subject to dealer approval and inventory availability.
                  </p>
                  <p>
                    • <strong>Financing Terms:</strong> Special APR offers require approved credit and may not be available to all customers.
                  </p>
                  <p>
                    • <strong>Program Changes:</strong> Dealer reserves right to modify or discontinue programs without notice.
                  </p>
                  <p>
                    • <strong>Documentation:</strong> All terms and conditions subject to executed purchase agreement and state regulations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-card rounded-lg p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Complete Program Disclosure
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This Trade-Up Turbo program is offered by authorized Nissan dealers in Illinois. 
                All trade-in evaluations, offers, and transactions are subject to dealer policies, 
                state regulations, and manufacturer guidelines. Customers are encouraged to read 
                all documentation carefully and ask questions before completing any transaction. 
                The dealership is committed to transparency and fair dealing in all customer interactions.
              </p>
              <div className="mt-6 pt-6 border-t text-xs text-muted-foreground">
                <p>
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} | 
                  Equal opportunity dealer | All offers subject to credit approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};