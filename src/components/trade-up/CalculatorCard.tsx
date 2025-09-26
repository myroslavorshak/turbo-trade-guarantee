import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import { TradeValueForm } from "@/components/forms/TradeValueForm";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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

// Validation schema for calculator fields
const calculatorSchema = z.object({
  tradeValue: z.string().trim().min(1, "Trade value is required").refine(
    (val) => {
      const num = parseFloat(val.replace(/[,$]/g, ''));
      return !isNaN(num) && num > 0;
    }, 
    "Please enter a valid trade value"
  ),
  newCarPrice: z.string().trim().min(1, "New car price is required").refine(
    (val) => {
      const num = parseFloat(val.replace(/[,$]/g, ''));
      return !isNaN(num) && num > 0;
    }, 
    "Please enter a valid new car price"
  ),
  selectedCounty: z.string().min(1, "Please select your Illinois county")
});

export const CalculatorCard = () => {
  const [tradeValue, setTradeValue] = useState("");
  const [newCarPrice, setNewCarPrice] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [taxSavings, setTaxSavings] = useState(0);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

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
    // Clear validation error when user starts typing
    if (validationErrors.tradeValue) {
      setValidationErrors(prev => ({ ...prev, tradeValue: "" }));
    }
  };

  const handleNewCarPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setNewCarPrice(formatted);
    // Clear validation error when user starts typing
    if (validationErrors.newCarPrice) {
      setValidationErrors(prev => ({ ...prev, newCarPrice: "" }));
    }
  };

  const handleCountyChange = (value: string) => {
    setSelectedCounty(value);
    // Clear validation error when user selects
    if (validationErrors.selectedCounty) {
      setValidationErrors(prev => ({ ...prev, selectedCounty: "" }));
    }
  };

  const validateFields = () => {
    try {
      calculatorSchema.parse({
        tradeValue,
        newCarPrice,
        selectedCounty
      });
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setValidationErrors(newErrors);
        
        toast({
          title: "Please complete all required fields",
          description: "Trade value, new car price, and county selection are required.",
          variant: "destructive",
        });
      }
      return false;
    }
  };

  return (
    <section id="calculator-card" className="py-12 bg-gradient-card">
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
                  <Label htmlFor="trade-value" className="text-sm font-semibold">
                    Your Trade Value <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="trade-value"
                      placeholder="25,000"
                      value={tradeValue}
                      onChange={handleTradeValueChange}
                      className={`pl-10 text-lg font-semibold ${
                        validationErrors.tradeValue ? "border-destructive focus:border-destructive" : ""
                      }`}
                      required
                    />
                  </div>
                  {validationErrors.tradeValue && (
                    <div className="flex items-center gap-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {validationErrors.tradeValue}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-car-price" className="text-sm font-semibold">
                    New Nissan Price <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="new-car-price"
                      placeholder="35,000"
                      value={newCarPrice}
                      onChange={handleNewCarPriceChange}
                      className={`pl-10 text-lg font-semibold ${
                        validationErrors.newCarPrice ? "border-destructive focus:border-destructive" : ""
                      }`}
                      required
                    />
                  </div>
                  {validationErrors.newCarPrice && (
                    <div className="flex items-center gap-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {validationErrors.newCarPrice}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="county" className="text-sm font-semibold">
                  Illinois County <span className="text-destructive">*</span>
                </Label>
                <Select value={selectedCounty} onValueChange={handleCountyChange}>
                  <SelectTrigger className={validationErrors.selectedCounty ? "border-destructive focus:border-destructive" : ""}>
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
                {validationErrors.selectedCounty && (
                  <div className="flex items-center gap-1 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {validationErrors.selectedCounty}
                  </div>
                )}
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
                <TradeValueForm 
                  tradeValue={tradeValue}
                  newCarPrice={newCarPrice}
                  selectedCounty={selectedCounty}
                  taxSavings={taxSavings}
                  onValidationRequired={validateFields}
                >
                  <Button 
                    variant="calculator" 
                    size="lg" 
                    className="w-full md:w-auto"
                  >
                    Lock In My Trade Value
                  </Button>
                </TradeValueForm>
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