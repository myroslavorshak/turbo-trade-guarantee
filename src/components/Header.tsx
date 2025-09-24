import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/old-orchard-nissan-logo.png";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const Header = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+15551234567";
  };

  const handleTextMessage = () => {
    window.location.href = "sms:+15551234567";
  };

  const handleBookAppointment = () => {
    // Scroll to calculator or implement booking logic
    const calculator = document.getElementById('calculator-card');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Old Orchard Nissan" 
            className="h-10 w-auto"
          />
        </div>

        {/* Right side - Navigation buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Phone button */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handlePhoneCall}
            className="hidden sm:flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">(555) 123-4567</span>
          </Button>

          {/* Mobile phone button (icon only) */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handlePhoneCall}
            className="sm:hidden"
          >
            <Phone className="w-4 h-4" />
          </Button>

          {/* Text Us button */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleTextMessage}
            className="hidden sm:flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">Text Us</span>
          </Button>

          {/* Mobile text button (icon only) */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleTextMessage}
            className="sm:hidden"
          >
            <MessageCircle className="w-4 h-4" />
          </Button>

          {/* Book Appointment CTA */}
          <AppointmentForm>
            <Button 
              variant="nissan"
              size="sm"
              className="font-semibold"
            >
              <span className="hidden sm:inline">Book My Appointment</span>
              <span className="sm:hidden">Book Now</span>
            </Button>
          </AppointmentForm>
        </div>
      </div>
    </header>
  );
};