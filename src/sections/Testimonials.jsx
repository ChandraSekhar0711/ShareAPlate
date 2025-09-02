import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "ShareAPlate connected me with my neighbors when I needed it most. The kindness I received inspired me to give back whenever I can.",
      name: "Maria Rodriguez",
      role: "Community Member",
      avatar: "MR",
      bgColor: "from-sage-200 to-sage-300 dark:from-sage-800/50 dark:to-sage-700/50"
    },
    {
      quote: "As a restaurant owner, I love knowing our extra food goes to families instead of waste. It's brought our whole neighborhood together.",
      name: "James Chen",
      role: "Local Restaurant Owner",
      avatar: "JC",
      bgColor: "from-slate-200 to-slate-300 dark:from-slate-800/50 dark:to-slate-700/50"
    },
    {
      quote: "Volunteering with ShareAPlate has been incredibly fulfilling. Every pickup reminds me how much we can accomplish when we help each other.",
      name: "Aisha Patel",
      role: "Volunteer Coordinator",
      avatar: "AP",
      bgColor: "from-amber-200 to-amber-300 dark:from-amber-800/50 dark:to-amber-700/50"
    },
    {
      quote: "This platform helped me during a difficult time. Now I share meals whenever I can. It's amazing how food brings people together.",
      name: "David Thompson",
      role: "Community Member",
      avatar: "DT",
      bgColor: "from-orange-200 to-orange-300 dark:from-orange-800/50 dark:to-orange-700/50"
    }
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-foreground">
            Stories from Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from the people who make ShareAPlate a place of hope, 
            connection, and mutual support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-card to-muted/50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-border">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-md">
                    <Quote className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-sm text-foreground/80 dark:text-background/80">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Community Stats */}
        <div className="mt-16 bg-gradient-to-r from-muted/50 to-muted/30 rounded-3xl p-8 border border-border">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl text-orange-400 dark:text-orange-400">4.9/5</div>
              <div className="text-sm text-muted-foreground">Community Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-orange-500 dark:text-orange-500">95%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl text-orange-600 dark:text-orange-600">1,200+</div>
              <div className="text-sm text-muted-foreground">Happy Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}