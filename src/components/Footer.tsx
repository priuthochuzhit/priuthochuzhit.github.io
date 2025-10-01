import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="text-lg font-bold text-foreground">Приют "Хочу Жить"</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Приют для животных "Хочу Жить". Все права защищены.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Сделано с <Heart className="inline w-4 h-4 text-primary" fill="currentColor" /> для наших питомцев
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
