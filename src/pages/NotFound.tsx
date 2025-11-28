import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-foreground font-sans">
      <div className="text-center z-10">
        <h1 className="text-9xl font-bold text-white mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-2xl font-semibold mb-8 text-white/90">Page Not Found</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}