import { ImageWithFallback } from '@/assets/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { Users, Clock, Heart, Award } from 'lucide-react';

export function JoinVolunteer() {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Impact",
      description: "Directly help families and individuals in your community"
    },
    {
      icon: Users,
      title: "Meet Amazing People",
      description: "Connect with like-minded volunteers and community members"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Volunteer when it works for you - even just an hour helps"
    },
    {
      icon: Award,
      title: "Feel Fulfilled",
      description: "Experience the joy of giving back and making a difference"
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwdm9sdW50ZWVyaW5nJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NTY3MDI4ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diverse group of volunteers serving meals in community"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-lg max-w-xs">
              <p className="text-sm text-muted-foreground italic">
                "Volunteering here changed my perspective on community. We're all connected."
              </p>
              <p className="text-xs text-muted-foreground/70 mt-2">- Sarah, Volunteer</p>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl text-foreground">
                Join Our Volunteer Family
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Be part of something bigger. Help us bridge the gap between surplus food 
                and hungry families while building lasting connections in your community.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-card/70 backdrop-blur-sm p-4 rounded-2xl border border-border/50">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-900/50 dark:to-amber-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-sm text-card-foreground mb-1">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Become a Volunteer
              </Button>
              <p className="text-sm text-muted-foreground">
                No experience needed • Training provided • Make your own schedule
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}