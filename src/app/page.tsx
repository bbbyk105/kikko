"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./(top)/(landing)/HeroSection";
import FeatureSection from "./(top)/(landing)/FeatureSection";
import CustomerSection from "./(top)/(landing)/CustomerSection";
import CTASection from "./(top)/(landing)/CTASection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InstagramFeed from "./(top)/(landing)/InstagramFeed";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-espresso-background text-espresso-foreground">
      <Header />
      <HeroSection />
      <FeatureSection />
      <InstagramFeed />
      <CustomerSection />
      <CTASection />
      <Footer />
    </main>
  );
}
