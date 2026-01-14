import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mazika Engineering Limited | Design & Build . Estate Managers</title>
        <meta
          name="description"
          content="Mazika Engineering Limited - Your trusted partner for architecture, engineering, and construction services in Kenya and East Africa. Design & Build, Estate Managers."
        />
        <meta
          name="keywords"
          content="construction company Kenya, building contractor Nairobi, architecture design, structural engineering, quantity survey, civil engineering, 3D visualization, solar solutions"
        />
        <link rel="canonical" href="https://mazikaengineering.co.ke" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Team />
          <Projects />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;