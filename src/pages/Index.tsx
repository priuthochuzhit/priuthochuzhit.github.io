import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pets from "@/components/Pets";
import About from "@/components/About";
import Urgent from "@/components/Urgent";
import Help from "@/components/Help";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted successfully");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Pets />
      <About />
      <Urgent />
      <Help />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
