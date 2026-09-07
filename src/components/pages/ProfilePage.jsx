'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '../../lib/firebase';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Home, User, LogOut, Settings, HelpCircle, Shield, Pencil } from 'lucide-react';
import Link from 'next/link';
import Cookies from 'js-cookie';

// A placeholder for a loading spinner
const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
);

export function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSocialLogin, setIsSocialLogin] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const providerId = currentUser.providerData[0]?.providerId;
                const isSocial = providerId === 'google.com' || providerId === 'apple.com';
                setIsSocialLogin(isSocial);

                const name = currentUser.displayName || currentUser.email.split('@')[0];
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: name,
                });
                setDisplayName(name);
            } else {
                router.push('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        Cookies.remove('firebase-auth-token');
        router.push('/');
    };

    const handleSave = async () => {
        if (!auth.currentUser || !displayName.trim()) return;
        try {
            await updateProfile(auth.currentUser, { displayName: displayName.trim() });
            setUser(prev => ({ ...prev, displayName: displayName.trim() }));
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile: ", error);
            // Optionally, show an error message to the user
        }
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return null; // Or a message indicating no user is logged in
    }

    const getInitials = (name) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">

                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary">Your Dashboard</h1>
                    <Button onClick={handleLogout} variant="outline" size="sm">
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </header>

                <Card className="bg-card/50 backdrop-blur-sm border-border mb-8">
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={`https://avatar.vercel.sh/${user.email}.png`} alt={user.displayName} />
                                <AvatarFallback className="bg-primary text-primary-foreground text-xl">{getInitials(user.displayName)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                {isEditing ? (
                                    <div className="flex gap-2">
                                        <Input
                                            value={displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            className="text-2xl font-bold h-12"
                                        />
                                    </div>
                                ) : (
                                    <CardTitle className="text-2xl flex items-center">
                                        Welcome back, {user.displayName}!
                                    </CardTitle>
                                )}
                                <CardDescription className="text-muted-foreground">{user.email}</CardDescription>
                            </div>
                            <div className='flex gap-2'>
                            {!isSocialLogin && (
                                isEditing ? (
                                    <>
                                        <Button onClick={handleSave}>Save</Button>
                                        <Button variant="outline" onClick={() => {
                                            setIsEditing(false);
                                            setDisplayName(user.displayName);
                                        }}>Cancel</Button>
                                    </>
                                ) : (
                                    <Button variant="outline" size="icon" onClick={() => setIsEditing(true)}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                )
                            )}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className='text-muted-foreground'>Here you can manage your donations, view your impact, and update your account settings.</p>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Placeholder for future sections */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border">
                        <CardHeader>
                            <CardTitle>My Impact</CardTitle>
                            <CardDescription>Your contribution to the community.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className='text-center'>
                                <p className='text-4xl font-bold text-primary'>12</p>
                                <p className='text-muted-foreground'>Meals Donated</p>
                            </div>
                            <Progress value={30} className="w-full" />
                        </CardContent>
                        <CardFooter>
                            <Button variant='secondary' className='w-full'>View Donation History</Button>
                        </CardFooter>
                    </Card>

                    <Card className="bg-card/50 backdrop-blur-sm border-border">
                        <CardHeader>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>Manage your profile and preferences.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant='ghost' className='w-full justify-start'><User className='mr-2 h-4 w-4' /> Edit Profile</Button>
                            <Button variant='ghost' className='w-full justify-start'><Shield className='mr-2 h-4 w-4' /> Security</Button>
                            <Button variant='ghost' className='w-full justify-start'><Settings className='mr-2 h-4 w-4' /> Preferences</Button>
                        </CardContent>
                        <CardFooter>
                            <Button variant='secondary' className='w-full'>Go to Settings</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="text-center mt-8">
                    <Link href="/" passHref>
                        <Button variant="link"> <Home className='mr-2 h-4 w-4' /> Go back to Homepage</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
