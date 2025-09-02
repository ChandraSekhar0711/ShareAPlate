"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Search, MapPin, Clock, Filter, Heart, Users, Utensils } from 'lucide-react';

export function RequestsListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [distanceFilter, setDistanceFilter] = useState('all');
  const [foodTypeFilter, setFoodTypeFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');

  const mockRequests = [
    {
      id: '1',
      requester: {
        name: 'Sarah Chen',
        avatar: '',
        initials: 'SC',
        verified: true
      },
      title: 'Looking for lunch for family of 4',
      description: 'Single mom with three kids, having a tough week. Any meal would help tremendously.',
      location: 'Downtown, 2nd Street',
      distance: '0.8 miles',
      urgency: 'high',
      urgencyText: 'Needed Today',
      timePosted: '2 hours ago',
      category: 'Main Course'
    },
    {
      id: '2',
      requester: {
        name: 'Mike Rodriguez',
        avatar: '',
        initials: 'MR',
        verified: true
      },
      title: 'Vegetarian meal request',
      description: 'College student looking for healthy vegetarian options. Open to any plant-based meals.',
      location: 'University District',
      distance: '1.2 miles',
      urgency: 'medium',
      urgencyText: 'This Week',
      timePosted: '5 hours ago',
      category: 'Vegetarian'
    },
    {
      id: '3',
      requester: {
        name: 'Elena Patel',
        avatar: '',
        initials: 'EP',
        verified: true
      },
      title: 'Dinner for elderly couple',
      description: 'Helping my elderly neighbors who have mobility challenges. They love home-cooked meals.',
      location: 'Maple Heights',
      distance: '0.5 miles',
      urgency: 'low',
      urgencyText: 'This Month',
      timePosted: '1 day ago',
      category: 'Any'
    },
    {
      id: '4',
      requester: {
        name: 'David Kim',
        avatar: '',
        initials: 'DK',
        verified: true
      },
      title: 'Fresh fruits for kids',
      description: 'Looking for healthy snacks and fresh fruits for my two young children. They love apples and bananas!',
      location: 'Green Valley',
      distance: '2.1 miles',
      urgency: 'medium',
      urgencyText: 'Next Few Days',
      timePosted: '3 hours ago',
      category: 'Fruits'
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'low': return 'bg-sage-500/20 text-sage-400 border-sage-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Utensils className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Help Your Neighbors</span>
            </div>
            <h1 className="text-4xl lg:text-5xl text-foreground">
              Find a Meal <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Near You</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with community members who could use a helping hand. Every meal shared builds stronger neighborhoods.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search meal requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-input-background border-border pl-10"
                />
              </div>

              {/* Distance Filter */}
              <Select value={distanceFilter} onValueChange={setDistanceFilter}>
                <SelectTrigger className="bg-input-background border-border">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Distance</SelectItem>
                  <SelectItem value="0.5">Within 0.5 miles</SelectItem>
                  <SelectItem value="1">Within 1 mile</SelectItem>
                  <SelectItem value="2">Within 2 miles</SelectItem>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                </SelectContent>
              </Select>

              {/* Food Type Filter */}
              <Select value={foodTypeFilter} onValueChange={setFoodTypeFilter}>
                <SelectTrigger className="bg-input-background border-border">
                  <SelectValue placeholder="Food Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="main-course">Main Course</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="snacks">Snacks</SelectItem>
                  <SelectItem value="any">Any Food</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>Showing {mockRequests.length} requests near you</span>
              </div>
              <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
                <SelectTrigger className="w-auto bg-input-background border-border">
                  <SelectValue placeholder="All Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgency</SelectItem>
                  <SelectItem value="high">Urgent</SelectItem>
                  <SelectItem value="medium">This Week</SelectItem>
                  <SelectItem value="low">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Requests List */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {mockRequests.map((request) => (
              <Card key={request.id} className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={request.requester.avatar} alt={request.requester.name} />
                      <AvatarFallback className="bg-gradient-to-br from-amber-400 to-orange-400 text-slate-900">
                        {request.requester.initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                              {request.title}
                            </h3>
                            {request.requester.verified && (
                              <Badge variant="secondary" className="bg-sage-500/20 text-sage-400 border-sage-500/30">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{request.requester.name}</span>
                            <span>•</span>
                            <span>{request.timePosted}</span>
                          </div>
                        </div>
                        <Badge className={getUrgencyColor(request.urgency)}>
                          {request.urgencyText}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {request.description}
                      </p>

                      {/* Location and Category */}
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{request.location}</span>
                          <span className="text-primary">({request.distance})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="border-border text-muted-foreground">
                            {request.category}
                          </Badge>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                          <Heart className="w-4 h-4 mr-2" />
                          Offer a Meal
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-border text-muted-foreground hover:text-foreground">
              Load More Requests
            </Button>
          </div>
        </div>
      </section>

      {/* Community Illustration Footer */}
      <section className="py-16 bg-gradient-to-r from-muted/20 to-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-8 opacity-50">
              <Users className="w-16 h-16 text-sage-400" />
              <Heart className="w-12 h-12 text-orange-400 mt-2" />
              <Utensils className="w-14 h-14 text-amber-400 mt-1" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl text-foreground">Building Community Together</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Every connection made here strengthens the fabric of our neighborhood. Thank you for caring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}