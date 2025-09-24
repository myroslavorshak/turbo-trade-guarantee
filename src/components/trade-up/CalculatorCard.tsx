import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp } from "lucide-react";

const ILLINOIS_COUNTIES = [
  "Cook", "DuPage", "Lake", "Will", "Kane", "McHenry", "Winnebago", 
  "Madison", "St. Clair", "Peoria", "Champaign", "Rock Island", "Sangamon"
];

const TAX_RATES: Record<string, number> = {
  "Cook": 0.1025,
  "DuPage": 0.0825,
  "Lake": 0.0825,
  "Will": 0.0825,
  "Kane": 0.0825,
  "McHenry": 0.0725,
  "Winnebago": 0.0825,
  "Madison": 0.08,
  "St. Clair": 0.0825,
  "Peoria": 0.0925,
  "Champaign": 0.0825,
  "Rock Island": 0.0825,
  "Sangamon": 0.0825
};

export const CalculatorCard = () => {
  const [tradeValue, setTradeValue] = useState("");
  const [newCarPrice, setNewCarPrice] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [taxSavings, setTaxSavings] = useState(0);

  useEffect(() => {
    if (tradeValue && selectedCounty) {
      const tradeVal = parseFloat(tradeValue.replace(/[,$]/g, ''));
      const taxRate = TAX_RATES[selectedCounty] || 0.0825;
      const savings = tradeVal * taxRate;
      setTaxSavings(savings);
    } else {
      setTaxSavings(0);
    }
  }, [tradeValue, selectedCounty]);

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    return numericValue ? parseInt(numericValue).toLocaleString() : '';
  };

  const handleTradeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setTradeValue(formatted);
  };

  const handleNewCarPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setNewCarPrice(formatted);
  };

  return (
    <section id="calculator-card" className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-calculator border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl lg:text-3xl font-bold text-primary flex items-center justify-center gap-3">
                <TrendingUp className="w-8 h-8 text-success" />
                Tax Savings Calculator
              </CardTitle>
              <p className="text-muted-foreground">See your estimated Illinois sales tax savings</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="trade-value" className="text-sm font-semibold">Your Trade Value</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="trade-value"
                      placeholder="25,000"
                      value={tradeValue}
                      onChange={handleTradeValueChange}
                      className="pl-10 text-lg font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-car-price" className="text-sm font-semibold">New Nissan Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="new-car-price"
                      placeholder="35,000"
                      value={newCarPrice}
                      onChange={handleNewCarPriceChange}
                      className="pl-10 text-lg font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="county" className="text-sm font-semibold">Illinois County</Label>
                <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your county" />
                  </SelectTrigger>
                  <SelectContent>
                    {ILLINOIS_COUNTIES.map((county) => (
                      <SelectItem key={county} value={county}>
                        {county} County ({(TAX_RATES[county] * 100).toFixed(2)}% tax rate)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {taxSavings > 0 && (
                <div className="bg-gradient-success text-success-foreground rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">Estimated Tax Savings</h3>
                  <p className="text-4xl font-bold mb-2">${taxSavings.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</p>
                  <p className="text-sm opacity-90">
                    *Estimate only. Actual savings may vary based on final trade value and vehicle details.
                  </p>
                </div>
              )}

              <div className="text-center pt-4">
                <Button variant="calculator" size="lg" className="w-full md:w-auto">
                  Lock In My Trade Value
                </Button>
              </div>

              <div className="text-xs text-muted-foreground text-center space-y-1">
                <p>• Calculator provides estimates only</p>
                <p>• Final savings based on actual appraisal and purchase details</p>
                <p>• Trade-in must be titled in your name</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};