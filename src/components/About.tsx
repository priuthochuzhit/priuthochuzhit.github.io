import { Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            О нашем приюте
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы спасаем бездомных животных и помогаем им найти любящие семьи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Забота</h3>
            <p className="text-muted-foreground">
              Каждое животное получает медицинскую помощь, питание и любовь
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Безопасность</h3>
            <p className="text-muted-foreground">
              Мы тщательно проверяем новых владельцев для благополучия питомцев
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Сообщество</h3>
            <p className="text-muted-foreground">
              Команда волонтеров и ветеринаров работает для спасения животных
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            С сентября 2012 года приют существовал как организация защиты животных "Хочу жить". 
            С 2020 года появилась возможность приобрести землю под приют.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Все подопечные приюта, когда-то оказались в трудном жизненном положении. 
            Кого-то выбросили на мороз, и оставили умирать, кого-то сбила машина, 
            кто-то пострадал от человеческой жестокости и безответственности. 
            Попадая к нам, животным оказывается медицинская помощь, проводится социализация 
            для проживания в новом доме, и отдаются они уже стерилизованными, привитыми 
            и полностью здоровыми.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
