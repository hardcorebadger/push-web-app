"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Bell, Code, Zap, ShieldCheck, Server, ListChecks, Activity, Key, Database, Shield, Menu } from "lucide-react"
import IntegrationSection from "@/components/IntegrationSection"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function Waitlist() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setShowForm(false);
      setMessage('Thanks for joining! We\'ll be in touch soon.');
      setEmail('');
    } catch (error: any) {
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) {
    return (
      <div className="mt-10 flex items-center justify-center max-w-md mx-auto w-full">
        <p className="text-green-500 flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Thanks for joining! We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-md mx-auto w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
        <div className="relative flex-1">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 pl-4 pr-4 rounded-full bg-black/50 border-zinc-600 text-white placeholder:text-zinc-500"
            required
          />
        </div>
        <Button 
          type="submit"
          size="lg" 
          className="h-12 px-8 rounded-full whitespace-nowrap"
          disabled={loading}
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
          {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>
      {message && message.includes('error') && (
        <p className="text-sm mt-2 text-center text-red-500">
          {message}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Pushable</h1>
              <div className="hidden md:flex ml-8 items-center space-x-4 text-sm">
                <Link className="text-muted-foreground hover:text-primary" href="/">Product</Link>
                <Link className="text-muted-foreground hover:text-primary" href="/">Documentation</Link>
                <Link className="text-muted-foreground hover:text-primary" href="/">Pricing</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="rounded-full">Sign In</Button>
                <Button className="rounded-full">Get Started</Button>
              </div>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link 
                      href="/" 
                      className="text-muted-foreground hover:text-primary text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Product
                    </Link>
                    <Link 
                      href="/" 
                      className="text-muted-foreground hover:text-primary text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Documentation
                    </Link>
                    <Link 
                      href="/" 
                      className="text-muted-foreground hover:text-primary text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <div className="pt-4 border-t">
                      <Button variant="ghost" className="w-full justify-start text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign In
                      </Button>
                      <Button className="w-full justify-start text-lg mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Image src="/pushstack.png" className="mx-auto" alt="Pushes" width={450} height={200} />
            <h1 className="mt-12 text-4xl sm:text-7xl font-light  bg-gradient-to-br from-primary to-gray-200 bg-clip-text text-transparent">
              Push for Developers
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              The simplest way to add push notifications to your application. Integrate in minutes, scale to millions. Join the waitlist to get early access.
            </p>
            <Waitlist />
            <p className="mt-4 text-sm text-zinc-500">Get early access when we launch.</p>
          </div>
        </div>
      </div>

      {/* Platform Logos Bar */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="flex items-center justify-center gap-12">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-zinc-400" fill="currentColor">
              <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.003h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.366zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
            </svg>
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-zinc-400" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.27 2.33-1.83 4.11-3.74 4.25" />
            </svg>
            <svg width="23" height="13" viewBox="0 0 23 13" className="h-8 w-8 text-zinc-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 13.0002C0.65 11.2169 1.196 9.5752 2.138 8.0752C3.08 6.5752 4.334 5.38353 5.9 4.5002L4.05 1.3002C3.95 1.1502 3.925 0.991862 3.975 0.825195C4.025 0.658528 4.13333 0.533528 4.3 0.450195C4.43333 0.366862 4.58333 0.350195 4.75 0.400195C4.91667 0.450195 5.05 0.550195 5.15 0.700195L7 3.90019C8.43333 3.30019 9.93333 3.0002 11.5 3.0002C13.0667 3.0002 14.5667 3.30019 16 3.90019L17.85 0.700195C17.95 0.550195 18.0833 0.450195 18.25 0.400195C18.4167 0.350195 18.5667 0.366862 18.7 0.450195C18.8667 0.533528 18.975 0.658528 19.025 0.825195C19.075 0.991862 19.05 1.1502 18.95 1.3002L17.1 4.5002C18.6667 5.38353 19.9207 6.5752 20.862 8.0752C21.8033 9.5752 22.3493 11.2169 22.5 13.0002H0.5ZM6.5 10.2502C6.85 10.2502 7.146 10.1292 7.388 9.8872C7.63 9.6452 7.75067 9.34953 7.75 9.0002C7.74933 8.65086 7.62833 8.35486 7.387 8.1122C7.14567 7.86953 6.85 7.74886 6.5 7.7502C6.15 7.75153 5.854 7.87253 5.612 8.1132C5.37 8.35386 5.24933 8.64953 5.25 9.0002C5.25067 9.35086 5.37167 9.64686 5.613 9.8882C5.85433 10.1295 6.15 10.2502 6.5 10.2502ZM16.5 10.2502C16.85 10.2502 17.146 10.1292 17.388 9.8872C17.63 9.6452 17.7507 9.34953 17.75 9.0002C17.7493 8.65086 17.6283 8.35486 17.387 8.1122C17.1457 7.86953 16.85 7.74886 16.5 7.7502C16.15 7.75153 15.854 7.87253 15.612 8.1132C15.37 8.35386 15.2493 8.64953 15.25 9.0002C15.2507 9.35086 15.3717 9.64686 15.613 9.8882C15.8543 10.1295 16.15 10.2502 16.5 10.2502Z"/>
            </svg>
          </div>
          <p className="text-lg text-zinc-400 text-center">Push to all platforms in one dead simple API</p>
        </div>
      </div>

      {/* Integration Section */}
      <IntegrationSection />

      {/* How it Works Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-light">How it works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple integration, powerful delivery
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Step 1: Frontend */}
              <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-20 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />

                <div className="bg-black rounded-lg p-6 border border-zinc-800 relative">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Easy Opt Ins</h3>
                  <p className="text-zinc-400">
                    Manage your own opt-ins, or drop in our lightweight SDKs to handle permission requests and token generation.
                  </p>
                </div>
              </div>

              {/* Step 2: Your Backend */}
              <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-20 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />

                <div className="bg-black rounded-lg p-6 border border-zinc-800 relative">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Managed Device Tokens</h3>
                  <p className="text-zinc-400">
                    Send device tokens to our API with a user ID. That's it - we'll handle storage, updates, and platform-specific details.
                  </p>
                </div>
              </div>

              {/* Step 3: Send Notifications */}
              <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 h-20 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />
                <div className="bg-black rounded-lg p-6 border border-zinc-800 relative">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Unified Delivery</h3>
                  <p className="text-zinc-400">
                    Push to any user with a simple API call. We handle delivery across all platforms, track status, and manage errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
                <div className="mt-1"><Key className="h-5 w-5 text-primary" /></div>
                <div>
                  <h4 className="font-medium mb-1">Automatic Token Management</h4>
                  <p className="text-sm text-zinc-400">No need to store or manage device tokens. We handle updates and cleanup.</p>
                </div>
              </div>
              <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
                <div className="mt-1"><Shield className="h-5 w-5 text-primary" /></div>
                <div>
                  <h4 className="font-medium mb-1">Built-in Security</h4>
                  <p className="text-sm text-zinc-400">Secure token storage and platform-specific encryption handled for you.</p>
                </div>
              </div>
              <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1100">
                <div className="mt-1"><Activity className="h-5 w-5 text-primary" /></div>
                <div>
                  <h4 className="font-medium mb-1">Delivery Tracking</h4>
                  <p className="text-sm text-zinc-400">Monitor delivery status and engagement across all platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverability/Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-light mb-16 text-left md:text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Build products,<br />
            <span className="bg-gradient-to-r from-primary to-gray-400 bg-clip-text text-transparent">not infrastructure</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="mb-4"><Code className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">One API for all platforms</h3>
              <p className="text-zinc-400 text-base">Send to iOS, Android, and web with a single API. No need to manage multiple SDKs or platform-specific code.</p>
            </div>
            {/* Feature 2 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="mb-4"><Server className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">Managed device tokens</h3>
              <p className="text-zinc-400 text-base">We handle device token management, including storage, updates, and cleanup of invalid tokens.</p>
            </div>
            {/* Feature 3 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="mb-4"><Activity className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">Delivery analytics</h3>
              <p className="text-zinc-400 text-base">Track delivery rates, opens, and engagement across all platforms in one dashboard.</p>
            </div>
            {/* Feature 4 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
              <div className="mb-4"><ListChecks className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">Opt-out management</h3>
              <p className="text-zinc-400 text-base">Automatically handle user opt-outs and respect platform-specific unsubscribe requirements.</p>
            </div>
            {/* Feature 5 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
              <div className="mb-4"><Database className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">Zero infrastructure</h3>
              <p className="text-zinc-400 text-base">No databases or servers to manage. Just make API calls and we handle the rest.</p>
            </div>
            {/* Feature 6 */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1100">
              <div className="mb-4"><Zap className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold text-lg mb-1">High-performance delivery</h3>
              <p className="text-zinc-400 text-base">Optimized infrastructure for fast, reliable delivery with automatic retries and error handling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl font-light">Can't wait for Pushable?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're currently in private beta. Join the waitlist to get early access.
            </p>
            <Waitlist/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Features</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Pricing</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Documentation</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">About</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Blog</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Careers</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Community</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Support</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Status</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="p-0 h-auto">Privacy</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Terms</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Security</Button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Pushable. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
