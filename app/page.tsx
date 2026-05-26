import { About } from "@/components/ui/sections/about";
import { Differentials } from "@/components/ui/sections/differentials";
import { Header } from "@/components/ui/sections/header";
import { Hero } from "@/components/ui/sections/hero";
import { HowItWorks } from "@/components/ui/sections/how-it-works";
import { Services } from "@/components/ui/sections/services";
import { Standard } from "@/components/ui/sections/standard";
import { Testimonials } from "@/components/ui/sections/testimonials";
import { TrustBar } from "@/components/ui/sections/trust-bar";

export default function Home() {
  return (
    <main className="min-h-screen bg-home">
      <Header />
      <Hero />
      <TrustBar />
      <Differentials />
      <Services />
      <HowItWorks />
      <About />
      <Standard />
      <Testimonials />
    </main>
  );
}
