import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Адрес</h3>
            <p className="text-sm text-muted-foreground">
              г. Новосибирск<br />
              Дзержинский район
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Телефон</h3>
            <p className="text-sm text-muted-foreground">
              +7 (495) 123-45-67<br />
              +7 (915) 234-56-78
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">
              info@dobrylapki.ru<br />
              help@dobrylapki.ru
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Время работы</h3>
            <p className="text-sm text-muted-foreground">
              Пн-Вс: 10:00 - 18:00<br />
              Без выходных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
