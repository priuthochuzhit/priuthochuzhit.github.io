import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  useEffect(() => {
    console.log("Hero component mounted");
  }, []);
  const scrollToPets = () => {
    const element = document.getElementById("pets");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Left to right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
        {/* Bottom fade to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            Подарите дом<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              пушистому другу
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Помочь проще, чем кажется
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToPets} className="text-lg">
              Хочу приютить
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("help")?.scrollIntoView({ behavior: "smooth" })}>
              Как помочь
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
