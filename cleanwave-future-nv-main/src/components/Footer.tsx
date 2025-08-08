import { Link } from 'react-router-dom';
import { Waves, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-secondary-light" />
              <span className="text-xl font-bold">CleanWaveFuture Foundation</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Dedicated to preserving Nevada's pristine waters through strategic funding of 
              environmental nonprofits working to protect Lake Tahoe and surrounding waterways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-we-help" className="text-primary-foreground/80 hover:text-secondary-light transition-colors">
                  How We Help
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-primary-foreground/80 hover:text-secondary-light transition-colors">
                  Apply for Funding
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-secondary-light transition-colors">
                  News & Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary-light transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary-light" />
                <a 
                  href="mailto:trippmadill@gmail.com"
                  className="text-primary-foreground/80 hover:text-secondary-light transition-colors"
                >
                  trippmadill@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary-light" />
                <a 
                  href="tel:206-715-6006"
                  className="text-primary-foreground/80 hover:text-secondary-light transition-colors"
                >
                  206-715-6006
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary-light" />
                <span className="text-primary-foreground/80">
                  Nevada, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 CleanWaveFuture Foundation. All rights reserved. | 
            <Link to="/privacy" className="hover:text-secondary-light transition-colors ml-2">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;