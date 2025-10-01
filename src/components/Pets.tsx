import { useEffect } from "react";
import PetCard from "./PetCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const pets = [
  {
    name: "Рыжик",
    age: "2 года",
    type: "Кот",
    gender: "Мальчик",
    description: "Ласковый и игривый кот, любит детей и других животных.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=800&fit=crop",
  },
  {
    name: "Бадди",
    age: "3 года",
    type: "Собака",
    gender: "Мальчик",
    description: "Активный и дружелюбный пес, отлично подходит для семьи.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop",
  },
  {
    name: "Мурка",
    age: "6 месяцев",
    type: "Кошка",
    gender: "Девочка",
    description: "Милый котенок с голубыми глазами, очень любопытная.",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=800&fit=crop",
  },
  {
    name: "Барон",
    age: "4 года",
    type: "Собака",
    gender: "Мальчик",
    description: "Спокойный и умный пес, хорошо обучен командам.",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=800&fit=crop",
  },
  {
    name: "Тучка",
    age: "1 год",
    type: "Кошка",
    gender: "Девочка",
    description: "Независимая и элегантная кошечка с зелеными глазами.",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&h=800&fit=crop",
  },
  {
    name: "Хаски",
    age: "2 года",
    type: "Собака",
    gender: "Мальчик",
    description: "Энергичный хаски, нуждается в активных прогулках.",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=800&fit=crop",
  },
  {
    name: "Снежок",
    age: "3 года",
    type: "Кот",
    gender: "Мальчик",
    description: "Белоснежный кот с голубыми глазами, очень спокойный.",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop",
  },
  {
    name: "Василиса",
    age: "1.5 года",
    type: "Кошка",
    gender: "Девочка",
    description: "Изящная трёхцветная кошечка, ласковая и нежная.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop",
  },
  {
    name: "Рекс",
    age: "5 лет",
    type: "Собака",
    gender: "Мальчик",
    description: "Верный и преданный пес, отличный охранник.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=800&fit=crop",
  },
  {
    name: "Луна",
    age: "2 года",
    type: "Собака",
    gender: "Девочка",
    description: "Нежная и игривая собачка, любит активные игры.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=800&fit=crop",
  },
];

const Pets = () => {
  useEffect(() => {
    console.log("Pets component mounted");
  }, []);

  const cats = pets.filter(pet => pet.type === "Кошка" || pet.type === "Кот");
  const dogs = pets.filter(pet => pet.type === "Собака");

  return (
    <section id="pets" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ищут дом
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с нашими чудесными питомцами, которые мечтают о любящей семье
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Коты */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Кошки</h3>
            <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {cats.map((pet) => (
                  <CarouselItem key={pet.name} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <PetCard {...pet} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Собаки */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground text-center">Собаки</h3>
            <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
              <CarouselContent>
                {dogs.map((pet) => (
                  <CarouselItem key={pet.name} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <PetCard {...pet} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pets;
