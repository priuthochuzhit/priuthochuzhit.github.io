import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, Users, DollarSign } from "lucide-react";

const Help = () => {
  return (
    <section id="help" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Как вы можете помочь
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Есть много способов поддержать наших питомцев
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Приютить</CardTitle>
              <CardDescription className="text-base">
                Подарите дом питомцу и обретите верного друга
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Волонтерство</CardTitle>
              <CardDescription className="text-base">
                Все еще не знаете, как провести выходные? Приезжайте в гости в приют! Подопечным необходима уборка, выгул и социализация.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Пожертвования</CardTitle>
              <CardDescription className="text-base">
                Финансовая поддержка для лечения и питания
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl shadow-[var(--shadow-card)] max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Нужны корма и медикаменты
          </h3>
          <p className="text-muted-foreground mb-6">
            Вы также можете помочь, принеся корм для животных, игрушки, лежанки или медикаменты. 
            Каждая помощь важна для наших питомцев!
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 bg-muted rounded-full text-sm">Корм для кошек</span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm">Корм для собак</span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm">Игрушки</span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm">Лежанки</span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm">Медикаменты</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
