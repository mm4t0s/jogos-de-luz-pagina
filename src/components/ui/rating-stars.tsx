import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  reviews: number;
  className?: string;
}

export const RatingStars = ({ rating, reviews, className = "" }: RatingStarsProps) => {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-5 h-5 text-gold-400 fill-gold-400"
            strokeWidth={1.5}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{rating}</span>/5 de{" "}
        <span className="font-semibold text-foreground">{reviews.toLocaleString('pt-BR')}</span> usuários
      </p>
    </div>
  );
};