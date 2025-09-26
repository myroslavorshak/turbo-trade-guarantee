import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Cook County, IL",
    rating: 5,
    quote: "The 7-day offer gave me time to shop around, but nobody could beat their price. The equity protection actually kicked in—I got an extra $150 credit!",
    tradeVehicle: "2019 Honda Accord",
    newVehicle: "2025 Nissan Altima"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    location: "DuPage County, IL",
    rating: 5,
    quote: "Saved over $2,000 in sales tax with my trade-in. The whole process took 20 minutes and they honored their online quote exactly.",
    tradeVehicle: "2018 Ford Explorer",
    newVehicle: "2025 Nissan Rogue"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    location: "Lake County, IL",
    rating: 5,
    quote: "I was skeptical about the equity protection, but when they sold my trade for more, I actually got a check in the mail. Incredible service!",
    tradeVehicle: "2020 Toyota Camry",
    newVehicle: "2025 Nissan Murano"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Trade Customer Success Stories</h2>
          <p className="text-muted-foreground">
            Real experiences from Illinois customers who traded up
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold text-primary mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {testimonial.location}
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-3 space-y-1">
                    <div className="text-xs">
                      <span className="font-medium">Traded:</span> {testimonial.tradeVehicle}
                    </div>
                    <div className="text-xs">
                      <span className="font-medium">Bought:</span> {testimonial.newVehicle}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-success text-success-foreground px-6 py-3 rounded-full">
            <Star className="w-5 h-5" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="opacity-75">• 500+ Trade Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};