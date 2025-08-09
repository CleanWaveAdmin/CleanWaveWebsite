import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, DollarSign, Calendar, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { FormEvent, useState } from 'react';

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 2 weeks.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-lighter to-secondary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Apply for Funding
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join our network of nonprofit partners working to protect Nevada's water resources. 
            Start your funding application today.
          </p>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Eligibility Requirements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To ensure our grants make the maximum impact, we have specific criteria for potential partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-water rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">501(c)(3) Status</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Must be a registered 501(c)(3) nonprofit organization with tax-exempt status 
                  in good standing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-secondary">Nevada Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Projects must directly benefit Nevada's water resources, particularly 
                  Lake Tahoe and surrounding watersheds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-accent">Track Record</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Demonstrated experience in environmental conservation, water protection, 
                  or related community initiatives.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Application Timeline
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-water rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">Complete form & provide required documents</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-secondary mb-2">Review Period</h3>
              <p className="text-sm text-muted-foreground">2-3 weeks for initial review & assessment</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-accent mb-2">Decision Notice</h3>
              <p className="text-sm text-muted-foreground">Email notification with next steps</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Grant Award</h3>
              <p className="text-sm text-muted-foreground">Funding & partnership support begins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Grant Application Form
            </h2>
            <p className="text-xl text-muted-foreground">
              Please provide detailed information about your organization and proposed project.
            </p>
          </div>

          <Card className="shadow-water border-2 border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Initial Application</CardTitle>
              <CardDescription className="text-base">
                This form will help us understand your organization and project needs. 
                Additional documentation may be requested during the review process.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name *</Label>
                    <Input 
                      id="organization" 
                      placeholder="Your nonprofit organization name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Primary Contact *</Label>
                    <Input 
                      id="contact" 
                      placeholder="Contact person name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="contact@yourorganization.org"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ein">EIN (Tax ID) Number *</Label>
                  <Input 
                    id="ein" 
                    placeholder="00-0000000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-title">Project Title *</Label>
                  <Input 
                    id="project-title" 
                    placeholder="Brief, descriptive title for your project"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="funding-amount">Requested Funding Amount *</Label>
                  <Input 
                    id="funding-amount" 
                    type="number"
                    placeholder="0"
                    min="1000"
                    max="150000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Project Description *</Label>
                  <Textarea 
                    id="project-description"
                    placeholder="Describe your project, its goals, expected outcomes, and how it will benefit Nevada's water resources..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="impact">Expected Environmental Impact *</Label>
                  <Textarea 
                    id="impact"
                    placeholder="Explain the specific environmental benefits, conservation outcomes, and community impact your project will achieve..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Textarea 
                    id="timeline"
                    placeholder="Provide a general timeline for your project, including key milestones and completion date..."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="bg-primary-lighter/20 p-6 rounded-lg">
                  <h3 className="font-semibold text-primary mb-3">Required Documents (to be submitted if selected)</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>501(c)(3) determination letter</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Most recent Form 990 or financial statements</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Detailed project budget</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Board of directors list</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Letters of support from partners</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-water text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Help with Your Application?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to support you through the application process. 
            Don't hesitate to reach out with questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Our Team
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              <Link to="/how-we-help" className="flex items-center gap-2">
                Learn More About Our Process
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;