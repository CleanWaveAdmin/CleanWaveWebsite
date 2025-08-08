import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { FormEvent, useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
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
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're here to help nonprofits, partners, and community members connect with our mission. 
            Reach out with questions, partnership ideas, or funding inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-water rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-primary">Email</CardTitle>
                        <CardDescription>Send us a message</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a 
                      href="mailto:trippmadill@gmail.com"
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      trippmadill@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-secondary/30 transition-all duration-300 shadow-gentle">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-secondary">Phone</CardTitle>
                        <CardDescription>Call during business hours</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a 
                      href="tel:206-715-6006"
                      className="text-lg text-muted-foreground hover:text-secondary transition-colors"
                    >
                      206-715-6006
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-accent/30 transition-all duration-300 shadow-gentle">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-accent">Location</CardTitle>
                        <CardDescription>Serving all of Nevada</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-lg text-muted-foreground">
                      Nevada, USA
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-gentle">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-primary">Office Hours</CardTitle>
                        <CardDescription>When to reach us</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                      <p>Weekend: By appointment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-water border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Whether you're a nonprofit interested in funding, a potential partner, 
                    or someone passionate about water conservation, we'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input 
                          id="first-name" 
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input 
                          id="last-name" 
                          placeholder="Your last name"
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
                          placeholder="your.email@example.com"
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
                      <Label htmlFor="organization">Organization (if applicable)</Label>
                      <Input 
                        id="organization" 
                        placeholder="Your organization name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">What's this about? *</Label>
                      <select 
                        id="inquiry-type"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="grant-application">Grant Application Question</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Information</option>
                        <option value="media">Media Inquiry</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Brief subject line"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us more about your question or how we can help..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-water text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our foundation and funding process.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-primary">How long does the grant application process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Our initial review process typically takes 2-3 weeks. If your application advances 
                  to the final review stage, you can expect a decision within 4-6 weeks of submission. 
                  We'll keep you informed throughout the process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-primary">What types of organizations do you fund?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  We fund established 501(c)(3) nonprofits with demonstrated experience in environmental 
                  conservation, water quality protection, habitat restoration, or community education 
                  related to Nevada's water resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-primary">Do you provide multi-year funding?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  While most of our grants are for one-year projects, we do consider multi-year 
                  funding for exceptional programs with significant long-term impact potential. 
                  Organizations must demonstrate strong capacity and measurable outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-primary">Can individuals apply for grants?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  Our grants are specifically designed for nonprofit organizations. However, 
                  individuals passionate about water conservation can connect with our funded 
                  nonprofits for volunteer opportunities or consider starting a nonprofit initiative.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you're ready to apply for funding or want to learn more about 
            partnership opportunities, explore these next steps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-water">
              <Link to="/apply" className="flex items-center gap-2">
                Apply for Funding
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/how-we-help" className="flex items-center gap-2">
                Learn Our Process
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;