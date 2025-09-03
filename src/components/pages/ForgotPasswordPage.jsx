import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Mail, Heart, ArrowLeft, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ImageWithFallback } from '@/assets/ImageWithFallback';
import Link from 'next/link';

export function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    router.push('/login');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-slate-900" />
                </div>
                <span className="text-2xl text-foreground"><Link href={"/"}>ShareAPlate</Link></span>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-card-foreground">Check Your Email</CardTitle>
              <p className="text-muted-foreground">
                We've sent password reset instructions to{' '}
                <span className="text-foreground font-medium">{email}</span>
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Don't see the email? Check your spam folder or try again with a different email address.
                </p>
                
                <div className="space-y-3">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full bg-card/50 border-border hover:bg-muted/50 text-card-foreground border-2 hover:border-primary/20 transition-all duration-200"
                  >
                    Try Another Email
                  </Button>
                  
                  <Button
                    onClick={handleBackToLogin}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Back to Sign In
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="hidden lg:block">
          <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwaGVscGluZyUyMGZhbWlsaWVzfGVufDF8fHx8MTc1Njg5MzI5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community support helping families in need"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-3xl mb-4">We're Here to Help</h2>
                <p className="text-lg opacity-90">
                  Don't worry, we'll help you get back to sharing meals with your community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Reset Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-4">
              <Button
                variant="ghost"
                onClick={handleBackToLogin}
                className="w-fit p-2 -ml-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Button>
              
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-slate-900" />
                  </div>
                  <span className="text-2xl text-foreground">ShareAPlate</span>
                </div>
                <CardTitle className="text-2xl text-card-foreground">Reset Your Password</CardTitle>
                <p className="text-muted-foreground">
                  Enter your email address and we'll send you instructions to reset your password.
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input-background border-border pl-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
                </Button>
              </form>

              <div className="text-center text-sm text-muted-foreground">
                Remember your password?{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary hover:text-primary/80 underline-offset-4"
                  onClick={handleBackToLogin}
                >
                  Sign in here
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Note */}
          <div className="mt-8 text-center">
            <div className="bg-card/30 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Still having trouble? Contact our support team at{' '}
                <span className="text-primary">support@shareaplate.org</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}