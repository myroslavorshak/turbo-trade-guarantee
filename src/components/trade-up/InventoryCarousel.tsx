import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Car } from "lucide-react";
import { ReserveBundleForm } from "@/components/forms/ReserveBundleForm";
import inventoryData from "@/data/inventory.json";

// Import vehicle images
import nissanAltima from "@/assets/vehicles/nissan-altima-2024.jpg";
import nissanRogue from "@/assets/vehicles/nissan-rogue-2024.jpg";
import nissanSentra from "@/assets/vehicles/nissan-sentra-2024.jpg";
import nissanMurano from "@/assets/vehicles/nissan-murano-2024.jpg";
import nissanPathfinder from "@/assets/vehicles/nissan-pathfinder-2024.jpg";
import nissanMaxima from "@/assets/vehicles/nissan-maxima-2024.jpg";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  bodyType: string;
  image: string;
  bundleEligible: boolean;
  features: string[];
}

export const InventoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReserveFormOpen, setIsReserveFormOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  // Image mapping
  const imageMap: Record<string, string> = {
    "nissan-altima-2024": nissanAltima,
    "nissan-rogue-2024": nissanRogue,
    "nissan-sentra-2024": nissanSentra,
    "nissan-murano-2024": nissanMurano,
    "nissan-pathfinder-2024": nissanPathfinder,
    "nissan-maxima-2024": nissanMaxima
  };

  const handleBundleWithTrade = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsReserveFormOpen(true);
  };
  
  // Filter vehicles that match popular trade body types (SUVs and Sedans)
  const suggestedVehicles = inventoryData.filter((vehicle: Vehicle) => 
    vehicle.bodyType === "SUV" || vehicle.bodyType === "Sedan"
  ) as Vehicle[];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(suggestedVehicles.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? Math.ceil(suggestedVehicles.length / 3) - 1 : prev - 1);
  };

  const visibleVehicles = suggestedVehicles.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Suggested New Vehicles</h2>
          <p className="text-muted-foreground">
            Popular choices based on recent trade-ins like yours
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="shadow-card hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={imageMap[vehicle.image] || vehicle.image} 
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {vehicle.bundleEligible && (
                    <Badge className="absolute top-2 right-2 bg-success text-success-foreground">
                      Bundle Eligible
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-2xl font-bold text-success">
                      ${vehicle.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {vehicle.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Car className="w-4 h-4" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="success" 
                    className="w-full"
                    onClick={() => handleBundleWithTrade(vehicle)}
                  >
                    Bundle with Trade
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {suggestedVehicles.length > 3 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(suggestedVehicles.length / 3) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <ReserveBundleForm 
        isOpen={isReserveFormOpen}
        onClose={() => setIsReserveFormOpen(false)}
        preselectedVehicle={selectedVehicle}
      />
    </section>
  );
};