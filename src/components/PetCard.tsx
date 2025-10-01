import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PetCardProps {
  name: string;
  age: string;
  type: string;
  gender: string;
  description: string;
  image: string;
}

const PetCard = ({ name, age, type, gender, description, image }: PetCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <div className="flex gap-2 mb-4">
          <Badge variant="outline">{age}</Badge>
          <Badge variant="outline">{gender}</Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PetCard;
