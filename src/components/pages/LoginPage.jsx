'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Eye, EyeOff, Mail, Lock, Heart, Apple, Chrome } from 'lucide-react';
import { ImageWithFallback } from '@/assets/ImageWithFallback';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, googleProvider, appleProvider } from '../../lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Cookies from 'js-cookie';

export function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSocialLoading, setIsSocialLoading] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const token = await userCredential.user.getIdToken();
      Cookies.set('firebase-auth-token', token, { expires: 7 }); // Set cookie for 7 days
      router.push('/profile'); // Redirect to profile page on successful login
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setError(null);
    setIsSocialLoading(provider);

    try {
        let authProvider;
        if (provider === 'Google') {
            authProvider = googleProvider;
        } else if (provider === 'Apple') {
            authProvider = appleProvider;
        } else {
            console.log(`Social login with ${provider} is not implemented yet.`);
            setIsSocialLoading(null);
            return;
        }
        const userCredential = await signInWithPopup(auth, authProvider);
        const token = await userCredential.user.getIdToken();
        Cookies.set('firebase-auth-token', token, { expires: 7 });
        router.push('/profile');
    } catch (error) {
        setError(error.message);
    } finally {
        setIsSocialLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="hidden lg:block">
          <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmb29kJTIwZGlzdHJpYnV0aW9uJTIwdm9sdW50ZWVycyUyMGhhbmRpbmclMjBtZWFscyUyMGZhbWlsaWVzfGVufDF8fHx8MTc1NjgxMTQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community members sharing meals together"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-3xl mb-4">Welcome Back to ShareAPlate</h2>
                <p className="text-lg opacity-90">
                  Continue sharing meals and building connections in your community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-slate-900" />
                </div>
                <span className="text-2xl text-foreground" ><Link href="/">ShareAPlate</Link></span>
              </div>
              <CardTitle className="text-2xl text-card-foreground">Welcome Back</CardTitle>
              <p className="text-muted-foreground">
                Sign in to continue sharing meals with your community
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-card/50 border-border hover:bg-muted/50 text-card-foreground border-2 hover:border-primary/20 transition-all duration-200"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading || isSocialLoading === 'Google'}
                >
                  <Chrome className="w-4 h-4 mr-2" />
                  {isSocialLoading === 'Google' ? 'Signing in...' : 'Continue with Google'}
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-card/50 border-border hover:bg-muted/50 text-card-foreground border-2 hover:border-primary/20 transition-all duration-200"
                  onClick={() => handleSocialLogin('Apple')}
                  disabled={isLoading || isSocialLoading === 'Apple'}
                >
                  <Apple className="w-4 h-4 mr-2" />
                  {isSocialLoading === 'Apple' ? 'Signing in...' : 'Continue with Apple'}
                </Button>
              </div>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-card px-4 text-sm text-muted-foreground">or continue with email</span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-input-background border-border pl-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="bg-input-background border-border pl-10 pr-10 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      required
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-6 w-6 p-0 hover:bg-muted/50"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" disabled={isLoading} />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/80 underline-offset-4"
                    onClick={() => router.push('/forgotPassword')}
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In to ShareAPlate'}
                </Button>
              </form>

              <div className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary hover:text-primary/80 underline-offset-4"
                  onClick={() => router.push('/register')}
                >
                  Join our community
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center space-x-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span>Community Verified</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-orange-400 rounded-full" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
