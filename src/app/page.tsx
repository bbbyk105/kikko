"use client";
import Hero from "./(top)/(landing)/Hero";
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
          <Hero />
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
