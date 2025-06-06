
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  image?: string;
  title: string;
  to: string;
  selected?: boolean;
  className?: string;
}

const SelectionCard = ({ image, title, to, selected = false, className }: SelectionCardProps) => {
  return (
    <Link to={to} className="block w-full">
      <Card 
        className={cn(
          "transition-all duration-300 overflow-hidden h-full",
          "border-2 hover:shadow-xl hover-lift", 
          selected ? "border-cool-blue bg-blue-50" : "border-gray-200 hover:border-cool-blue/50",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center p-6 h-full">
          {image && (
            <div className="mb-4 flex items-center justify-center h-32">
              <img 
                src={image} 
                alt={title} 
                className="max-h-32 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/200x150?text=AC+Image";
                }}
              />
            </div>
          )}
          <h3 className="text-lg font-medium text-center">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default SelectionCard;
