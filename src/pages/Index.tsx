import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Nissan Dealership</h1>
        <p className="text-xl text-muted-foreground mb-8">Discover our Trade-Up Turbo program</p>
        <Link to="/trade-up">
          <Button variant="hero" size="xl">
            Explore Trade-Up Turbo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
