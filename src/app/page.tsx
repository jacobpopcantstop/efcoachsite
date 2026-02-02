import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodologyPreview from "@/components/MethodologyPreview";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <MethodologyPreview />
      <ServicesPreview />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}
