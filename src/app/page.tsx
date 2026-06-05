import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Ventures from "@/components/sections/Ventures";
import Expertise from "@/components/sections/Expertise";
import SuccessStories from "@/components/sections/SuccessStories";
import Mentorship from "@/components/sections/Mentorship";
import Approach from "@/components/sections/Approach";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-deep-navy text-white overflow-hidden">
      <Hero />
      <About />
      <Stats />
      <Ventures />
      <Expertise />
      <SuccessStories />
      <Mentorship />
      <Approach />
      <TechStack />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
