import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Users, Target, CheckCircle, ArrowRight, FileText, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import nonprofitsImage from '@/assets/nonprofits-working.jpg';

const HowWeHelp = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-lighter to-secondary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How We Help Nevada's Nonprofits
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide strategic funding and partnership opportunities to qualified nonprofits 
            working to protect Nevada's water resources and ecosystems.
          </p>
        </div>
      </section>

      {/* Grant Distribution Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Grant Distribution Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've designed a streamlined, transparent process that gets funding to the 
              organizations that can make the biggest impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-water"></div>
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-16 h-16 bg-gradient-water rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <Badge className="mx-auto mb-2 bg-primary/10 text-primary">Step 1</Badge>
                <CardTitle className="text-primary">Application Review</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Nonprofits submit detailed applications outlining their mission, track record, 
                  and specific water conservation projects requiring funding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-nature"></div>
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <Badge className="mx-auto mb-2 bg-secondary/10 text-secondary">Step 2</Badge>
                <CardTitle className="text-secondary">Impact Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Our team evaluates each proposal based on environmental impact, organizational 
                  capacity, community benefit, and alignment with our mission.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary"></div>
              <CardHeader className="text-center pt-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <Badge className="mx-auto mb-2 bg-accent/10 text-accent">Step 3</Badge>
                <CardTitle className="text-accent">Grant Award & Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  Selected organizations receive funding and ongoing partnership support 
                  to maximize their conservation impact across Nevada's waterways.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Funding We Provide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer flexible funding solutions tailored to different organizational needs and project scales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <CardTitle className="text-primary">Project Grants</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    $5,000 - $150,000 for specific water conservation projects, research initiatives, 
                    and community education programs.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Habitat restoration projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Water quality monitoring programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Community cleanup initiatives</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-secondary" />
                    <CardTitle className="text-secondary">Capacity Building Grants</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    $2,000 - $50,000 to strengthen organizational capacity, training, 
                    and infrastructure development.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Staff training and development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Equipment and technology upgrades</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Strategic planning support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <CardTitle className="text-accent">Emergency Response Grants</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Rapid response funding for urgent environmental threats or 
                    time-sensitive conservation opportunities.
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Pollution incident response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Wildlife protection measures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Climate emergency responses</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <img
                src={nonprofitsImage}
                alt="Nonprofits collaborating on conservation projects"
                className="rounded-lg shadow-water w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Example Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Example Funded Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects making real differences in Nevada's water conservation efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle hover:shadow-water">
              <CardHeader>
                <Badge className="w-fit bg-primary/10 text-primary">Lake Tahoe Coalition</Badge>
                <CardTitle className="text-foreground">Invasive Species Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  $85,000 grant funded a comprehensive program to remove invasive aquatic plants 
                  from Lake Tahoe's sensitive nearshore areas, protecting native ecosystems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle hover:shadow-water">
              <CardHeader>
                <Badge className="w-fit bg-secondary/10 text-secondary">Sierra Rivers Alliance</Badge>
                <CardTitle className="text-foreground">Stream Restoration Project</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  $120,000 enabled restoration of 3 miles of degraded streambank habitat, 
                  improving water quality and wildlife corridors in the Eastern Sierra.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle hover:shadow-water">
              <CardHeader>
                <Badge className="w-fit bg-accent/10 text-accent">Nevada Water Watch</Badge>
                <CardTitle className="text-foreground">Community Monitoring Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  $45,000 grant established citizen science programs training volunteers 
                  to monitor water quality across 15 rural Nevada watersheds.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Apply for Funding?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If your nonprofit is working to protect Nevada's water resources, 
            we'd love to learn about your initiatives and how we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-water">
              <Link to="/apply" className="flex items-center gap-2">
                Start Your Application
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact" className="flex items-center gap-2">
                Ask Questions First
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeHelp;