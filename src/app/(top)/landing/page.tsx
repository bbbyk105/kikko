"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CustomerSection from "./CustomerSection";
import CTASection from "./CTASection";
import InstagramFeed from "./InstagramFeed";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-espresso-background text-espresso-foreground">
      <HeroSection />
      <FeatureSection />
      <InstagramFeed />
      <CustomerSection />
      <CTASection />
    </main>
  );
}
