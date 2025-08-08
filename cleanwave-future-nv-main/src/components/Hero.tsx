import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-lake-tahoe.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lake Tahoe pristine waters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-secondary/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Droplets className="h-16 w-16 text-white animate-float" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <Droplets className="h-12 w-12 text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protecting Nevada's
            <span className="block bg-gradient-to-r from-secondary-light to-accent bg-clip-text text-transparent">
              Pristine Waters
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            CleanWaveFuture Foundation empowers nonprofits across Nevada to preserve and protect 
            our most precious resource - clean water for future generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-water text-lg px-8 py-6 h-auto"
            >
              <Link to="/apply" className="flex items-center gap-2">
                Apply for Grant
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              <Link to="/about" className="flex items-center gap-2">
                Our Mission
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.3M</div>
              <div className="text-white/80">Grants Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">47</div>
              <div className="text-white/80">Nonprofits Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12K</div>
              <div className="text-white/80">Acres Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;