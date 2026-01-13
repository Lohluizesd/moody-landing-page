import { Star } from 'lucide-react';

interface BadgeProps {
  text?: string;
  stars?: boolean; 
  variant?: 'outline' | 'filled';
  className?: string;
}

export const Badge = ({ 
  text, 
  stars = false, 
  variant = 'outline', 
  className = 'text-black border-black' 
}: BadgeProps) => {
  const isFilled = variant === 'filled';

  return (
    <div
      className={`
        inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all w-fit
        ${isFilled ? 'bg-gray-200 text-gray-500 border-transparent' : 'border bg-transparent'}
        ${className}
      `}
    >
      {text && <span>{text}</span>}

      {stars && (
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" stroke="none" />
          ))}
        </div>
      )}
    </div>
  );
};