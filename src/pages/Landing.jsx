import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MarketplacePreview from "../components/MarketplacePreview/MarketplacePreview";
import ReelsPreview from "../components/ReelsPreview/ReelsPreview";
import AppShowcase from "../components/AppShowcase/AppShowcase";
import Testimonials from "../components/Testmonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import DownloadSection from "../components/DownloadSection/DownloadSection";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Landing({ toggleTheme, isDark }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <MarketplacePreview />
      <ReelsPreview />
      <Testimonials />
      <AppShowcase />
      <DownloadSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
