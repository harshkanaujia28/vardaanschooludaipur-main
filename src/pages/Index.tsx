import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import WhyVardaanSection from "@/components/WhyVardaanSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import AchievementsSection from "@/components/AchievementsSection";
import SocialSection from "@/components/SocialSection";
import AdmissionSection from "@/components/AdmissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vardaan Sr Sec School, Udaipur | Pre-Primary to Senior Secondary | Infinite Possibilities</title>
        <meta 
          name="description" 
          content="Vardaan Sr Sec School, Udaipur offers quality education from Pre-Primary to Senior Secondary. Experience holistic learning with experienced faculty, modern infrastructure, and infinite possibilities for your child's future." 
        />
        <meta property="og:title" content="Vardaan Sr Sec School, Udaipur | Infinite Possibilities" />
        <meta property="og:description" content="Premium education from Pre-Primary to Senior Secondary. Join the Vardaan family for a brighter future." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vardaanschool.edu" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <AcademicsSection />
          <WhyVardaanSection />
          <CampusLifeSection />
          <AchievementsSection />
          <SocialSection />
          <AdmissionSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
