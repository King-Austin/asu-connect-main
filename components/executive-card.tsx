import { cn } from "@/lib/utils";

interface ExecutiveCardProps {
  name: string;
  position: string;
  image: string;
  className?: string;
}

export const ExecutiveCard = ({ name, position, image, className }: ExecutiveCardProps) => {
  return (
    <div
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 text-center bg-gradient-to-b from-card to-secondary/30">
        <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm font-medium">
          {position}
        </p>
      </div>
    </div>
  );
};
