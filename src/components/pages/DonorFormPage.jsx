"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Upload, MapPin, Clock, Shield, Users, Heart } from 'lucide-react';
// import { ImageWithFallback } from '@/componentsfigma/ImageWithFallback.jsx';
import { ImageWithFallback } from '@/assets/ImageWithFallback.jsx'
export function DonorFormPage() {
  const [formData, setFormData] = useState({
    foodName: '',
    description: '',
    quantity: '',
    bestBefore: '',
    location: '',
    contactInfo: '',
    foodType: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitting meal:', formData);
  };

  const trustBadges = [
    { icon: Shield, text: 'Safe & Trusted', color: 'text-sage-400' },
    { icon: Users, text: 'Community Verified', color: 'text-orange-400' },
    { icon: Heart, text: '100% Free', color: 'text-amber-400' }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Make a Difference Today</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-foreground">
              Share Your Meal, <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Spread Smiles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your extra food into hope for someone in your community. Every meal shared creates a connection.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Card */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Meal Details</CardTitle>
                  <p className="text-muted-foreground">Tell us about the food you'd like to share</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="foodName">Food Name *</Label>
                        <Input
                          id="foodName"
                          placeholder="e.g., Homemade Pasta, Fresh Sandwiches"
                          value={formData.foodName}
                          onChange={(e) => handleInputChange('foodName', e.target.value)}
                          className="bg-input-background border-border"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., Serves 4 people, 10 sandwiches"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                          className="bg-input-background border-border"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your meal, ingredients, and any special preparation details..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="bg-input-background border-border min-h-24"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="foodType">Food Type</Label>
                        <Select onValueChange={(value) => handleInputChange('foodType', value)}>
                          <SelectTrigger className="bg-input-background border-border">
                            <SelectValue placeholder="Select food type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="main-course">Main Course</SelectItem>
                            <SelectItem value="snacks">Snacks</SelectItem>
                            <SelectItem value="desserts">Desserts</SelectItem>
                            <SelectItem value="beverages">Beverages</SelectItem>
                            <SelectItem value="fruits">Fresh Fruits</SelectItem>
                            <SelectItem value="vegetables">Vegetables</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bestBefore">Best Before *</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="bestBefore"
                            type="datetime-local"
                            value={formData.bestBefore}
                            onChange={(e) => handleInputChange('bestBefore', e.target.value)}
                            className="bg-input-background border-border pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Pickup Location *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="Enter your address or neighborhood"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="bg-input-background border-border pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactInfo">Contact Information *</Label>
                      <Input
                        id="contactInfo"
                        placeholder="Phone number or preferred contact method"
                        value={formData.contactInfo}
                        onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                        className="bg-input-background border-border"
                        required
                      />
                    </div>

                    {/* Photo Upload */}
                    <div className="space-y-2">
                      <Label>Food Photo (Optional)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-2">Upload a photo of your meal</p>
                        <p className="text-sm text-muted-foreground/70">Helps people see what you're sharing</p>
                        <Button variant="outline" className="mt-4">
                          Choose Photo
                        </Button>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit Meal Donation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Motivation Card */}
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-lg text-card-foreground">You're Amazing!</h3>
                    <p className="text-sm text-muted-foreground">
                      Your generosity will directly impact someone in your community. Every meal shared creates lasting connections.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Community Impact */}
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg text-card-foreground mb-4">Today's Impact</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Meals Shared</span>
                      <span className="text-primary">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Families Fed</span>
                      <span className="text-sage-400">1,203</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Food Saved</span>
                      <span className="text-orange-400">5,692 lbs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full border border-border">
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-sm text-muted-foreground">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}