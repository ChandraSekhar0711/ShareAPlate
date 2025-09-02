"use client"
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Separator } from '@/components/ui/separator.jsx';
import { Edit3, Heart, Users, Award, Calendar, MapPin, Clock, CheckCircle, Bookmark } from 'lucide-react';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('donations');

  // Mock user data
  const userData = {
    name: 'Sarah Johnson',
    bio: 'Community volunteer passionate about reducing food waste and helping neighbors. Love cooking and sharing meals with others!',
    avatar: '',
    initials: 'SJ',
    joinDate: 'March 2024',
    location: 'Downtown, Seattle',
    stats: {
      mealsShared: 47,
      familiesHelped: 23,
      communityPoints: 1250
    }
  };

  const mockDonations = [
    {
      id: '1',
      foodName: 'Homemade Lasagna',
      date: '2024-01-15',
      status: 'completed',
      recipientName: 'Mike Rodriguez',
      location: 'University District'
    },
    {
      id: '2',
      foodName: 'Fresh Vegetable Soup',
      date: '2024-01-12',
      status: 'completed',
      recipientName: 'Elena Patel',
      location: 'Maple Heights'
    },
    {
      id: '3',
      foodName: 'Sandwich Platter',
      date: '2024-01-10',
      status: 'pending',
      recipientName: 'David Kim',
      location: 'Green Valley'
    }
  ];

  const mockReceivedMeals = [
    {
      id: '1',
      foodName: 'Chicken Curry with Rice',
      donorName: 'Maria Santos',
      date: '2024-01-08',
      rating: 5,
      location: 'Downtown'
    },
    {
      id: '2',
      foodName: 'Fresh Fruit Salad',
      donorName: 'James Wilson',
      date: '2024-01-05',
      rating: 5,
      location: 'Capitol Hill'
    }
  ];

  const mockSavedRequests = [
    {
      id: '1',
      title: 'Looking for dinner for family of 3',
      requesterName: 'Anna Chen',
      location: 'Ballard',
      urgency: 'medium',
      date: '2024-01-16'
    },
    {
      id: '2',
      title: 'Healthy snacks for kids',
      requesterName: 'Robert Davis',
      location: 'Fremont',
      urgency: 'low',
      date: '2024-01-14'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-sage-500/20 text-sage-400 border-sage-500/30';
      case 'pending': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'low': return 'bg-sage-500/20 text-sage-400 border-sage-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? 'text-amber-400' : 'text-muted-foreground'}>★</span>
    ));
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Profile Header */}
      <section className="py-12 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <Card className="border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar */}
                <Avatar className="w-24 h-24 border-4 border-primary/20">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="bg-gradient-to-br from-amber-400 to-orange-400 text-slate-900 text-2xl">
                    {userData.initials}
                  </AvatarFallback>
                </Avatar>

                {/* Profile Info */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h1 className="text-3xl text-foreground">{userData.name}</h1>
                      <Badge className="bg-sage-500/20 text-sage-400 border-sage-500/30">
                        Community Member
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{userData.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Joined {userData.joinDate}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {userData.bio}
                  </p>
                </div>

                {/* Edit Button */}
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-slate-900" />
                </div>
                <div className="text-3xl text-foreground mb-1">{userData.stats.mealsShared}</div>
                <div className="text-sm text-muted-foreground">Meals Shared</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl text-foreground mb-1">{userData.stats.familiesHelped}</div>
                <div className="text-sm text-muted-foreground">Families Helped</div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl text-foreground mb-1">{userData.stats.communityPoints.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Community Points</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm border border-border">
              <TabsTrigger value="donations" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Donations Made
              </TabsTrigger>
              <TabsTrigger value="received" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Meals Received
              </TabsTrigger>
              <TabsTrigger value="saved" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Saved Requests
              </TabsTrigger>
            </TabsList>

            {/* Donations Made Tab */}
            <TabsContent value="donations" className="mt-8">
              <div className="space-y-4">
                {mockDonations.map((donation) => (
                  <Card key={donation.id} className="border-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-lg text-card-foreground">{donation.foodName}</h3>
                            <Badge className={getStatusColor(donation.status)}>
                              {donation.status.charAt(0).toUpperCase() + donation.status.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(donation.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>For {donation.recipientName}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{donation.location}</span>
                            </div>
                          </div>
                        </div>
                        {donation.status === 'completed' && (
                          <CheckCircle className="w-8 h-8 text-sage-400" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Meals Received Tab */}
            <TabsContent value="received" className="mt-8">
              <div className="space-y-4">
                {mockReceivedMeals.map((meal) => (
                  <Card key={meal.id} className="border-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg text-card-foreground">{meal.foodName}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(meal.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>From {meal.donorName}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{meal.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(meal.rating)}
                            <span className="text-sm text-muted-foreground ml-2">Perfect meal!</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Saved Requests Tab */}
            <TabsContent value="saved" className="mt-8">
              <div className="space-y-4">
                {mockSavedRequests.map((request) => (
                  <Card key={request.id} className="border-border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-lg text-card-foreground">{request.title}</h3>
                            <Badge className={getUrgencyColor(request.urgency)}>
                              {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{request.requesterName}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{request.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{new Date(request.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 rounded-full">
                            Offer Meal
                          </Button>
                          <Button variant="outline" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <Separator className="mb-8" />
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About ShareAPlate
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Community Guidelines
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Help & Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}