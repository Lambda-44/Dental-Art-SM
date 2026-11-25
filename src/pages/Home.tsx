import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStats from "../components/TrustStats";
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Doctors from "../components/Doctors";
import Gallery from "../components/Gallery";
// import BeforeAfter from "../components/BeforeAfter"; // uklonjeno na zahtjev klijenta
import Pricing from "../components/Pricing";
import Process from "../components/Process";
// import Testimonials from "../components/Testimonials"; // privremeno isključeno — zamijenjeno pravim Google recenzijama
import GoogleReviews from "../components/GoogleReviews";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#glavni-sadrzaj"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[color:var(--color-ink)] focus:text-[color:var(--color-cream)] focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Preskoči na glavni sadržaj
      </a>
      <Navbar />
      <main id="glavni-sadrzaj">
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <WhyUs />
        <Doctors />
        <Gallery />
        {/* <BeforeAfter /> */}
        <Pricing />
        <Process />
        {/* <Testimonials /> */}
        <GoogleReviews />
        <FAQ />
        <ContactCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
