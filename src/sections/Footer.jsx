import { Facebook, Instagram, Twitter, Mail, Heart, Users } from 'lucide-react';

export function Footer() {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Volunteering', href: '#volunteer' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-muted/50 relative overflow-hidden transition-colors duration-300">
      {/* Background illustration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10">
          <Users className="w-32 h-32 text-sage-400 dark:text-sage-600" />
        </div>
        <div className="absolute top-20 right-20">
          <Heart className="w-24 h-24 text-orange-400 dark:text-orange-600" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                    <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
                  </div>
                </div>
                <Heart className="w-4 h-4 text-orange-400 absolute -top-1 -right-1 fill-current" />
              </div>
              <span className="text-xl text-foreground">ShareAPlate</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building stronger communities through shared meals, kindness, and connection.
            </p>
            <p className="text-sage-600 dark:text-sage-400 italic">
              "Built with compassion"
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-sage-500 dark:text-sage-400" />
                <span className="text-sm">hello@shareaplate.org</span>
              </div>
              <p className="text-sm text-muted-foreground/70 mt-2">
                We'd love to hear your story or answer any questions about joining our community.
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg text-foreground">
              Stay Connected
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted shadow-md hover:shadow-lg transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground/70">
              Follow us for inspiring community stories and local meal sharing opportunities.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground/70 text-sm text-center md:text-left">
            © 2024 ShareAPlate • Feeding hope, one plate at a time
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground/70">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}