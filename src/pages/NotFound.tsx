
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-400 to-white" aria-hidden="true">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <div className="space-y-6">
          <h1 className="text-8xl md:text-9xl font-extrabold text-white">404</h1>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Oops! Page not found</h2>
            <p className="text-lg text-white/90 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg py-6 px-8" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-10 top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-10 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default NotFound;
