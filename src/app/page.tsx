"use client";
import HeroSection from "./(top)/(landing)/HeroSection";
import FeatureSection from "./(top)/(landing)/FeatureSection";
import CustomerSection from "./(top)/(landing)/CustomerSection";
import CTASection from "./(top)/(landing)/CTASection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InstagramFeed from "./(top)/(landing)/InstagramFeed";

export default function Page() {
  return (
    <>
      <main
        className="flex flex-col min-h-screen bg-espresso-background text-espresso-foreground"
        role="main"
      >
        <Header />

        <article>
          <HeroSection />
          <FeatureSection />
          <InstagramFeed />
          <CustomerSection />
          <CTASection />
        </article>

        <Footer />
      </main>
    </>
  );
}
