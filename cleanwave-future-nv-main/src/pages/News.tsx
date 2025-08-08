import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ArrowRight, Award, Waves, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import volunteersImage from '@/assets/volunteers-cleanup.jpg';
import cleanRiverImage from '@/assets/clean-river.jpg';
import nonprofitsImage from '@/assets/nonprofits-working.jpg';

const News = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-lighter to-secondary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            News & Impact Stories
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover the incredible work being done by our nonprofit partners and 
            the positive impact we're making together across Nevada's waterways.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary text-lg px-4 py-2 mb-4">Featured Impact Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Lake Tahoe Achieves Record Water Clarity
            </h2>
          </div>

          <Card className="border-2 border-primary/20 shadow-water overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <CalendarDays className="h-4 w-4" />
                    <span>December 15, 2024</span>
                  </div>
                  <CardTitle className="text-2xl text-primary mb-4">
                    Collaborative Efforts Lead to Clearest Waters in 40 Years
                  </CardTitle>
                  <CardDescription className="text-lg text-foreground">
                    Thanks to the combined efforts of five nonprofits funded through our grant program, 
                    Lake Tahoe has achieved its clearest water quality measurements since 1984. 
                    The comprehensive approach included invasive species removal, shoreline restoration, 
                    and community education initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">73.4 feet average annual clarity depth (2024)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">15% improvement over 2023 measurements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">$580,000 in grants contributed to this success</span>
                    </div>
                  </div>
                  <Button asChild className="bg-gradient-water">
                    <Link to="#" className="flex items-center gap-2">
                      Read Full Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={volunteersImage}
                  alt="Lake Tahoe conservation efforts"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our nonprofit partners continue to achieve remarkable results in protecting Nevada's water resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <div className="relative overflow-hidden">
                <img
                  src={cleanRiverImage}
                  alt="River restoration project"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary/90 text-white">Grant Success</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>November 28, 2024</span>
                </div>
                <CardTitle className="text-primary">Truckee River Ecosystem Restored</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Sierra Rivers Alliance completed a $125,000 restoration project, 
                  removing sediment buildup and replanting native vegetation along 2.5 miles of riverbank.
                </CardDescription>
                <div className="flex items-center space-x-2 text-sm text-secondary">
                  <Waves className="h-4 w-4" />
                  <span>Water Quality Impact</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <div className="relative overflow-hidden">
                <img
                  src={nonprofitsImage}
                  alt="Community education program"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white">Education</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>November 15, 2024</span>
                </div>
                <CardTitle className="text-primary">Youth Water Stewards Program Launches</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Nevada Environmental Education launched a $45,000 program engaging 
                  500+ students in hands-on water conservation projects across 12 schools.
                </CardDescription>
                <div className="flex items-center space-x-2 text-sm text-secondary">
                  <Users className="h-4 w-4" />
                  <span>Community Engagement</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <div className="relative overflow-hidden">
                <img
                  src={volunteersImage}
                  alt="Innovation in water monitoring"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent/90 text-white">Innovation</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>October 30, 2024</span>
                </div>
                <CardTitle className="text-primary">Smart Monitoring Network Deployed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Lake Tahoe Tech Alliance installed 25 IoT sensors with $75,000 funding, 
                  providing real-time water quality data across the entire lake basin.
                </CardDescription>
                <div className="flex items-center space-x-2 text-sm text-secondary">
                  <Zap className="h-4 w-4" />
                  <span>Technology Innovation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              2024 Impact by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Measuring our collective impact across Nevada's water conservation efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-water rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">$1.2M</CardTitle>
                <CardDescription className="text-muted-foreground">Grants Awarded in 2024</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-secondary">23</CardTitle>
                <CardDescription className="text-muted-foreground">Nonprofit Partners Funded</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Waves className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-accent">8,400</CardTitle>
                <CardDescription className="text-muted-foreground">Acres of Habitat Protected</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">2,100</CardTitle>
                <CardDescription className="text-muted-foreground">Volunteer Hours Supported</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated on Our Impact
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for monthly updates on grant awards, 
            success stories, and conservation milestones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button className="bg-white text-primary hover:bg-white/90 px-8">
              Subscribe
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Be Part of Our Next Success Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to make a difference in Nevada's water conservation efforts? 
            Apply for funding and join our network of impactful partners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-water">
              <Link to="/apply" className="flex items-center gap-2">
                Apply for Funding
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Our Team
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;