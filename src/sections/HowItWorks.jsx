import { PlusCircle, Truck, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function HowItWorks() {
  const steps = [
    {
      icon: PlusCircle,
      title: "Have Extra Food",
      description: "Post your surplus meal from home, restaurant, or event. Include photos and pickup details.",
      bgColor: "from-amber-900/50 to-amber-800/50",
      iconColor: "text-amber-400",
      badgeColor: "bg-orange-500"
    },
    {
      icon: Truck,
      title: "Post It",
      description: "Community volunteers or neighbors see your post and arrange safe pickup within hours.",
      bgColor: "from-orange-900/50 to-orange-800/50",
      iconColor: "text-orange-400",
      badgeColor: "bg-orange-600"
    },
    {
      icon: Heart,
      title: "Someone Nearby Receives",
      description: "Your food reaches families who need it, creating connections and reducing waste together.",
      bgColor: "from-orange-900/50 to-orange-800/50",
      iconColor: "text-orange-400",
      badgeColor: "bg-orange-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/50 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to turn your extra food into hope and connection 
            for someone in your community
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border border-border bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 ${step.badgeColor} text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {index+1}
                    </div>
                  </div>
                  
                  {/* Icon with Background */}
                  <div className="relative mt-4">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.bgColor} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-12 h-12 ${step.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Connecting Flow for Desktop */}
        <div className="hidden lg:block relative -mt-12">
          <div className="flex justify-center items-center space-x-8">
            <div className="w-20 h-px bg-gradient-to-r from-amber-400 to-sage-400"></div>
            <div className="w-0 h-0 border-l-8 border-l-sage-400 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
            <div className="w-20 h-px bg-gradient-to-r from-sage-400 to-orange-400"></div>
            <div className="w-0 h-0 border-l-8 border-l-orange-400 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        
        {/* Trust Message */}
        <div className="mt-12 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-orange-400">✓</span> Safe & Verified Community
              <span className="mx-2">•</span>
              <span className="text-orange-500">✓</span> No Money Involved
              {/* <span className="mx-2">•</span>
              <span className="text-orange-600">✓</span> 100% Free */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}