import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Lightbulb, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import cleanRiverImage from '@/assets/clean-river.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-lighter to-secondary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About CleanWaveFuture Foundation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Born from a deep commitment to Nevada's natural beauty and environmental health, 
            we're dedicated to preserving our state's most precious resource: clean water.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Origin Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  CleanWaveFuture Foundation was established in 2019 when a group of environmental 
                  advocates witnessed the mounting pressures on Lake Tahoe and Nevada's waterways. 
                  Climate change, increased tourism, and development were threatening the crystal-clear 
                  waters that define our region's natural heritage.
                </p>
                <p>
                  Rather than tackle these challenges alone, we recognized that Nevada's nonprofit 
                  organizations were already doing incredible work on the ground. What they needed 
                  was strategic funding and collaborative support to amplify their impact.
                </p>
                <p>
                  Today, we're proud to be a catalyst for change, channeling resources to the 
                  organizations that know Nevada's waters best and are best positioned to protect them.
                </p>
              </div>
              
              <Button asChild size="lg" className="mt-8 bg-gradient-water">
                <Link to="/how-we-help" className="flex items-center gap-2">
                  Learn How We Help
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div>
              <img
                src={cleanRiverImage}
                alt="Pristine Nevada river ecosystem"
                className="rounded-lg shadow-water w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every partnership we forge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-water rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-primary">Environmental Stewardship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We believe in protecting Nevada's natural heritage for future generations through 
                  science-based conservation efforts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-secondary">Collaborative Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We amplify impact through meaningful partnerships, recognizing that collective 
                  action creates lasting change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-accent">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every grant we provide directly benefits Nevada communities and the 
                  ecosystems they depend on.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-primary">Innovation & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We support innovative approaches to conservation while maintaining complete 
                  transparency in our funding decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Environmental Commitment
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Water is life. It connects every living thing in Nevada's diverse ecosystems, 
              from the alpine clarity of Lake Tahoe to the desert springs that sustain wildlife corridors.
            </p>
            <p>
              We understand that protecting water quality means protecting entire ecosystems—the wildlife, 
              plants, and communities that depend on clean water for survival and prosperity.
            </p>
            <p>
              Our commitment extends beyond funding to fostering a culture of environmental responsibility 
              that will preserve Nevada's natural legacy for generations to come.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$2.3M</div>
              <div className="text-muted-foreground">Total Grants Awarded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">47</div>
              <div className="text-muted-foreground">Nonprofit Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">12,000</div>
              <div className="text-muted-foreground">Acres Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Together, we can ensure that Nevada's waters remain clean, healthy, and accessible 
            for all life to thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-water">
              <Link to="/apply" className="flex items-center gap-2">
                Apply for Funding
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;