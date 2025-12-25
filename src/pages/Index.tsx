import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BuildCraft Construction | Building the Future with Precision & Integrity</title>
        <meta
          name="description"
          content="BuildCraft is a premier construction company with 25+ years of experience in residential, commercial, and infrastructure projects. Get a free quote today!"
        />
        <meta
          name="keywords"
          content="construction company, building contractor, residential construction, commercial construction, civil engineering, renovation services"
        />
        <link rel="canonical" href="https://buildcraft.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
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
