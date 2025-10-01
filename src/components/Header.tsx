import { Heart } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <span className="text-2xl font-bold text-foreground">Приют "Хочу Жить"</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("pets")} className="text-foreground hover:text-primary transition-colors">
              Питомцы
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection("help")} className="text-foreground hover:text-primary transition-colors">
              Как помочь
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
