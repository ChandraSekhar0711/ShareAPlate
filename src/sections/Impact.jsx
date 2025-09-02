import { ImageWithFallback } from '@/assets/ImageWithFallback';
import { Users, MapPin, Clock, Smile } from 'lucide-react';

export function Impact() {
  const stats = [
    { 
      number: "3,247", 
      label: "Meals Shared", 
      icon: Smile,
      bgColor: "from-sage-900/50 to-sage-800/50",
      iconColor: "text-sage-400"
    },
    { 
      number: "186", 
      label: "Community Helpers", 
      icon: Users,
      bgColor: "from-slate-800/50 to-slate-700/50",
      iconColor: "text-slate-400"
    },
    { 
      number: "12", 
      label: "Neighborhoods", 
      icon: MapPin,
      bgColor: "from-amber-900/50 to-amber-800/50",
      iconColor: "text-amber-400"
    },
    { 
      number: "24/7", 
      label: "Community Support", 
      icon: Clock,
      bgColor: "from-orange-900/50 to-orange-800/50",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl text-foreground">
            Community Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Together, we're building a community where no one goes hungry and nothing goes to waste. 
            See the difference we're making, one meal at a time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlsaWVzJTIwZWF0aW5nJTIwbWVhbCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1NjcwMjM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy families enjoying a meal together"
                className="w-full h-96 lg:h-[450px] object-cover"
              />
            </div>
            {/* Impact badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 p-4 rounded-2xl shadow-lg">
              <p className="text-sm">🌟 Feeding Hope Daily</p>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`bg-gradient-to-br ${stat.bgColor} p-6 rounded-2xl text-center relative overflow-hidden border border-border dark:bg-orange-400`}>
                    <div className="absolute top-2 right-2 opacity-20">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="relative">
                      <div className={`w-8 h-8 ${stat.iconColor} mx-auto mb-2`}>
                        <Icon className="w-full h-full" />
                      </div>
                      <div className="text-2xl text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Story Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-l-4 border-green-400">
                <p className="text-gray-700 italic mb-2">
                  "Last week, a neighbor shared homemade soup when I was recovering from surgery. 
                  It wasn't just food—it was care, connection, and community."
                </p>
                <p className="text-sm text-green-600">
                  — Elena, Community Member
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-rose-50 p-6 rounded-2xl border-l-4 border-yellow-400">
                <p className="text-gray-700 italic mb-2">
                  "Every meal I share feels like planting seeds of kindness. 
                  Our whole neighborhood has become more connected and caring."
                </p>
                <p className="text-sm text-yellow-600">
                  — Marcus, Regular Sharer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}