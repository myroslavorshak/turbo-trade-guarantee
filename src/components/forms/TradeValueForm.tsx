import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Car, DollarSign, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TradeValueFormProps {
  children: React.ReactNode;
  tradeValue?: string;
  newCarPrice?: string;
  selectedCounty?: string;
  taxSavings?: number;
}

export const TradeValueForm = ({ children, tradeValue, newCarPrice, selectedCounty, taxSavings }: TradeValueFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleMileage: "",
    vehicleCondition: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please complete required fields",
        description: "Name, email, and phone are required.",
        variant: "destructive",
      });
      return;
    }

    // Generate offer expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    
    toast({
      title: "Trade Value Locked!",
      description: `Your trade offer is secured until ${expiryDate.toLocaleDateString()}. We'll contact you within 1 hour.`,
    });
    
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" />
            Lock In Your Trade Value
          </DialogTitle>
        </DialogHeader>

        {/* Calculator Summary */}
        {(tradeValue || newCarPrice) && (
          <div className="bg-gradient-success text-success-foreground rounded-lg p-4 mb-4">
            <h4 className="font-semibold mb-2">Your Calculation Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              {tradeValue && (
                <div>
                  <span className="opacity-75">Trade Value:</span>
                  <div className="font-semibold">${tradeValue}</div>
                </div>
              )}
              {newCarPrice && (
                <div>
                  <span className="opacity-75">New Car Price:</span>
                  <div className="font-semibold">${newCarPrice}</div>
                </div>
              )}
              {taxSavings && taxSavings > 0 && (
                <div>
                  <span className="opacity-75">Tax Savings:</span>
                  <div className="font-semibold">${taxSavings.toLocaleString()}</div>
                </div>
              )}
            </div>
            {selectedCounty && (
              <Badge variant="secondary" className="mt-2 bg-white/20 text-success-foreground">
                {selectedCounty} County, IL
              </Badge>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Vehicle Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={formData.vehicleYear}
                  onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                  placeholder="2020"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="make">Make</Label>
                <Input
                  id="make"
                  value={formData.vehicleMake}
                  onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                  placeholder="Honda"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
                  value={formData.vehicleModel}
                  onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                  placeholder="Civic"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="mileage">Mileage</Label>
                <Input
                  id="mileage"
                  value={formData.vehicleMileage}
                  onChange={(e) => handleInputChange("vehicleMileage", e.target.value)}
                  placeholder="50,000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select value={formData.vehicleCondition} onValueChange={(value) => handleInputChange("vehicleCondition", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Any additional details about your vehicle or trade preferences..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="calculator" className="flex-1">
              <DollarSign className="w-4 h-4 mr-2" />
              Lock My Trade Value
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};