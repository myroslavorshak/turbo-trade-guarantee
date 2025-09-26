import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Calendar, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ReserveBundleForm } from "@/components/forms/ReserveBundleForm";

interface OfferToken {
  expiryDate: string;
  email: string;
  generated: boolean;
}

interface PrefilledData {
  email: string;
  phone: string;
}

export const OfferLockFlow = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [offerToken, setOfferToken] = useState<OfferToken | null>(null);
  const [isReserveFormOpen, setIsReserveFormOpen] = useState(false);
  const [prefilledData, setPrefilledData] = useState<PrefilledData | null>(null);
  const { toast } = useToast();

  const generateOffer = () => {
    if (!email || !phone) {
      toast({
        title: "Please complete all fields",
        description: "Email and phone are required to generate your offer.",
        variant: "destructive",
      });
      return;
    }

    // Set prefilled data and open the reserve form
    setPrefilledData({
      email,
      phone
    });
    setIsReserveFormOpen(true);
  };

  return (
    <section id="offer-lock-flow" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Lock Your 7-Day Offer</h2>
            <p className="text-muted-foreground">Secure your trade-in value with our guarantee</p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Offer Lock Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!offerToken?.generated ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={generateOffer} 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    Reserve My Complete Bundle
                  </Button>
                </>
              ) : (
                <div className="text-center space-y-6">
                  <div className="bg-gradient-success text-success-foreground rounded-lg p-8">
                    <Calendar className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Your 7-Day Offer</h3>
                    <Badge variant="secondary" className="bg-white/20 text-success-foreground mb-4">
                      EXPIRES: {offerToken.expiryDate}
                    </Badge>
                    <p className="text-sm opacity-90">
                      Valid for 7 days or 300 additional miles, whichever comes first
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Confirmation sent to {offerToken.email}</span>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Next Steps:</h4>
                    <ul className="text-sm space-y-1 text-left">
                      <li>• Bring your vehicle for final inspection</li>
                      <li>• Present this offer token at the dealership</li>
                      <li>• Complete paperwork and drive away</li>
                    </ul>
                  </div>

                  <Button variant="outline" onClick={() => setOfferToken(null)}>
                    Generate Another Offer
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ReserveBundleForm 
        isOpen={isReserveFormOpen}
        onClose={() => setIsReserveFormOpen(false)}
        prefilledData={prefilledData}
      />
    </section>
  );
};