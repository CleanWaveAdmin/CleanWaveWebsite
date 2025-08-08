import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import volunteersImage from '@/assets/volunteers-cleanup.jpg';
import handsWaterImage from '@/assets/hands-water.jpg';
import nonprofitsImage from '@/assets/nonprofits-working.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We fund and support environmental nonprofits working tirelessly to preserve Nevada's pristine waters. 
            From Lake Tahoe's crystal-clear depths to the flowing rivers that sustain our ecosystems, 
            we're committed to ensuring clean water for generations to come.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Make an Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through strategic partnerships and targeted funding, we amplify the work of dedicated organizations 
              protecting Nevada's water resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-water rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-primary">Grant Funding</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  We provide strategic financial support to established nonprofits with proven track records 
                  in water conservation and environmental protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-secondary">Partnership Building</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  We connect like-minded organizations, fostering collaboration and knowledge sharing 
                  to maximize conservation impact across Nevada.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-accent">Targeted Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  We focus our resources on high-impact initiatives that protect Lake Tahoe, 
                  surrounding rivers, and Nevada's critical water ecosystems.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Impact */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real Results, Real Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our partnerships have led to measurable improvements in water quality, 
                habitat restoration, and community engagement across Nevada's waterways.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Over 5,000 pounds of debris removed from Lake Tahoe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">12 miles of shoreline habitat restored</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">3,200 community volunteers engaged</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <span className="text-foreground">Water quality improved in 8 key watersheds</span>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-water">
                <Link to="/news" className="flex items-center gap-2">
                  View Success Stories
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={volunteersImage}
                  alt="Volunteers cleaning Lake Tahoe shoreline"
                  className="rounded-lg shadow-water w-full h-48 object-cover"
                />
                <img
                  src={handsWaterImage}
                  alt="Clean water preservation"
                  className="rounded-lg shadow-water w-full h-32 object-cover"
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <img
                  src={nonprofitsImage}
                  alt="Nonprofits collaborating on water protection"
                  className="rounded-lg shadow-water w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a nonprofit seeking funding or an individual passionate about water conservation, 
            we'd love to hear from you.
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
                Partner with Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;