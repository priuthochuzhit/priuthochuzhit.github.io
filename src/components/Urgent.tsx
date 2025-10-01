import { useEffect } from "react";
import PetCard from "./PetCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const urgentPets = [
  {
    name: "Малыш",
    age: "3 месяца",
    type: "Кот",
    gender: "Мальчик",
    description: "Рыжий котёнок, нуждается в срочном лечении и заботе.",
    image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&h=800&fit=crop",
  },
  {
    name: "Пушок",
    age: "2 месяца",
    type: "Собака",
    gender: "Мальчик",
    description: "Маленький щенок, найден на улице, требуется вакцинация.",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&h=800&fit=crop",
  },
  {
    name: "Мася",
    age: "4 месяца",
    type: "Кошка",
    gender: "Девочка",
    description: "Пугливая кошечка, нуждается в социализации и уходе.",
    image: "https://images.unsplash.com/photo-1573865526739-10c1d3a9a8a6?w=800&h=800&fit=crop",
  },
  {
    name: "Шарик",
    age: "3 месяца",
    type: "Собака",
    gender: "Мальчик",
    description: "Игривый щенок, требуется срочная медицинская помощь.",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=800&fit=crop",
  },
  {
    name: "Кнопка",
    age: "2 месяца",
    type: "Кошка",
    gender: "Девочка",
    description: "Крошечная котёнок, найдена в коробке, нуждается в заботе.",
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=800&h=800&fit=crop",
  },
  {
    name: "Дружок",
    age: "4 месяца",
    type: "Собака",
    gender: "Мальчик",
    description: "Добрый щенок, попал под машину, восстанавливается после операции.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=800&fit=crop",
  },
];

const Urgent = () => {
  useEffect(() => {
    console.log("Urgent component mounted");
  }, []);

  return (
    <section id="urgent" className="py-20 bg-gradient-to-b from-accent/5 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Нуждаются в срочной помощи
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Эти малыши требуют немедленной заботы и поддержки
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {urgentPets.map((pet) => (
              <CarouselItem key={pet.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <PetCard {...pet} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Urgent;
