import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Car, DollarSign, Calendar } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import inventoryData from "@/data/inventory.json";

// Validation schema for security
const reservationSchema = z.object({
  customerName: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
  tradeVehicle: z.string().trim().min(1, "Vehicle make and model is required").max(100, "Vehicle description must be less than 100 characters"),
  tradeYear: z.string().trim().min(1, "Year is required").max(4, "Year must be 4 characters or less"),
  tradeMileage: z.string().trim().max(10, "Mileage must be less than 10 characters"),
  tradeVin: z.string().trim().max(17, "VIN must be 17 characters or less").optional(),
  newVehicleId: z.string().min(1, "Please select a vehicle"),
  preferredContactTime: z.string().optional()
});

interface ReserveBundleFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReserveBundleForm = ({ isOpen, onClose }: ReserveBundleFormProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    tradeVehicle: "",
    tradeYear: "",
    tradeMileage: "",
    tradeVin: "",
    newVehicleId: "",
    preferredContactTime: ""
  });

  const eligibleVehicles = inventoryData.filter(vehicle => vehicle.bundleEligible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data for security
    try {
      const validatedData = reservationSchema.parse(formData);
      
      // Additional VIN validation if provided
      if (validatedData.tradeVin && validatedData.tradeVin.length > 0) {
        if (validatedData.tradeVin.length !== 17) {
          toast.error("VIN must be exactly 17 characters");
          return;
        }
        // VIN should only contain alphanumeric characters (no O, I, Q)
        const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/i;
        if (!vinPattern.test(validatedData.tradeVin)) {
          toast.error("Invalid VIN format");
          return;
        }
      }

      console.log("Bundle reservation submitted:", validatedData);
      
      toast.success("Bundle reserved successfully! We'll contact you within 2 hours to schedule your appraisal.", {
        duration: 5000,
      });
      
      onClose();
      
      // Reset form
      setFormData({
        customerName: "",
        email: "",
        phone: "",
        tradeVehicle: "",
        tradeYear: "",
        tradeMileage: "",
        tradeVin: "",
        newVehicleId: "",
        preferredContactTime: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        toast.error(firstError.message);
      } else {
        toast.error("Please check your input and try again");
      }
    }
  };

  const selectedVehicle = eligibleVehicles.find(v => v.id.toString() === formData.newVehicleId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <Car className="w-5 h-5" />
            Reserve Your Trade-Up Bundle
          </DialogTitle>
          <DialogDescription>
            Lock in your 7-day offer, equity protection, and IL tax savings. We'll contact you to schedule your 15-minute appraisal.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">1</span>
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName">Full Name *</Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="preferredContactTime">Preferred Contact Time</Label>
                <Select value={formData.preferredContactTime} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredContactTime: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Trade Vehicle Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">2</span>
              Your Trade Vehicle
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="tradeYear">Year *</Label>
                <Input
                  id="tradeYear"
                  value={formData.tradeYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, tradeYear: e.target.value }))}
                  placeholder="2020"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="tradeVehicle">Make & Model *</Label>
                <Input
                  id="tradeVehicle"
                  value={formData.tradeVehicle}
                  onChange={(e) => setFormData(prev => ({ ...prev, tradeVehicle: e.target.value }))}
                  placeholder="Honda Accord, Toyota Camry, etc."
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tradeMileage">Approximate Mileage</Label>
                <Input
                  id="tradeMileage"
                  value={formData.tradeMileage}
                  onChange={(e) => setFormData(prev => ({ ...prev, tradeMileage: e.target.value }))}
                  placeholder="65,000"
                  maxLength={10}
                />
              </div>

              <div>
                <Label htmlFor="tradeVin">VIN (Optional)</Label>
                <Input
                  id="tradeVin"
                  value={formData.tradeVin}
                  onChange={(e) => setFormData(prev => ({ ...prev, tradeVin: e.target.value.toUpperCase() }))}
                  placeholder="1HGBH41JXMN109186"
                  maxLength={17}
                  className="font-mono"
                />
                {formData.tradeVin && formData.tradeVin.length > 0 && formData.tradeVin.length !== 17 && (
                  <p className="text-xs text-destructive mt-1">VIN must be exactly 17 characters</p>
                )}
              </div>
            </div>
          </div>

          {/* New Vehicle Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">3</span>
              Choose Your New Nissan
            </h3>
            
            <div>
              <Label htmlFor="newVehicle">Bundle-Eligible Vehicle *</Label>
              <Select value={formData.newVehicleId} onValueChange={(value) => setFormData(prev => ({ ...prev, newVehicleId: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your new Nissan" />
                </SelectTrigger>
                <SelectContent>
                  {eligibleVehicles.map((vehicle) => (
                    <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                      {vehicle.year} {vehicle.make} {vehicle.model} - ${vehicle.price.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedVehicle && (
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-success" />
                  Bundle Benefits for {selectedVehicle.make} {selectedVehicle.model}
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 7-day guaranteed trade offer with equity protection</li>
                  <li>• Illinois sales tax savings on trade value</li>
                  <li>• 0% APR financing for qualified buyers*</li>
                  <li>• 15-minute professional appraisal</li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-urgency hover:bg-nissan text-urgency-foreground hover:text-nissan-foreground"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reserve My Bundle
            </Button>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            * Subject to credit approval. See dealer for complete terms.
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};