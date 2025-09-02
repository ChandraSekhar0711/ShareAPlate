import { ImageWithFallback } from '@/assets/ImageWithFallback';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Hero() {
  const pathname = usePathname();
  return (
    <section id="home" className="relative bg-gradient-to-br from-background via-muted to-background py-20 lg:py-28 overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-sage-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl text-foreground leading-tight">
                Share a Meal,{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Share Hope
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Connect with people in need around you by sharing extra food.
                Building stronger, more caring communities together.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Link href='/donate' >
                  <span>Start Sharing</span>
                </Link>

              </Button>



              <Button
                size="lg"
                variant="outline"
                className="border-2 border-sage-400 text-sage-400 hover:text-slate-400 hover:bg-amber-400 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                <Link href='/requests'><span>Find Meal</span> </Link>

              </Button>

            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-700 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Safe & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Community Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">100% Free</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634024262698-8436b2fd4144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwcHJlcGFyaW5nJTIwZm9vZCUyMGtpdGNoZW58ZW58MXx8fHwxNzU2NzAyMzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community members sharing meals at a table"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}