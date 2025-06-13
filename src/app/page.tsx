// app/page.tsx (Server Component)
import { Suspense } from "react";
import Hero from "./(top)/(landing)/Hero";
import FeatureSection from "./(top)/(landing)/FeatureSection";
import CustomerSection from "./(top)/(landing)/CustomerSection";
import CTASection from "./(top)/(landing)/CTASection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InstagramFeed from "./(top)/(landing)/InstagramFeed";
import { InstagramFeedSkeleton } from "./(top)/(landing)/InstagramFeedSkeleton";

export default function Page() {
  return (
    <main
      className="flex flex-col min-h-screen bg-espresso-background text-espresso-foreground"
      role="main"
    >
      <Header />

      <article>
        <Hero />
        <FeatureSection />

        {/* Instagram フィードをSuspenseでラップ */}
        <Suspense fallback={<InstagramFeedSkeleton postCount={6} />}>
          <InstagramFeed postCount={6} />
        </Suspense>

        <CustomerSection />
        <CTASection />
      </article>

      <Footer />
    </main>
  );
}
