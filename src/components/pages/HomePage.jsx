import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { HowItWorks } from "@/sections/HowItWorks";
import { Impact } from "@/sections/Impact";
import { JoinVolunteer } from "@/sections/JoinVolunteer";
import { Testimonials } from "@/sections/Testimonials";


export function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <HowItWorks />
      <Impact />
      <JoinVolunteer />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}