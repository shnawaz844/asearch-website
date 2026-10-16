import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  glowColor = 'rgba(198, 255, 77, 0.12)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#11151D] p-7 transition-all duration-300 overflow-hidden group shadow-xs',
        'hover:border-slate-300 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-[#C6FF4D]/5',
        className
      )}
      {...props}
    >
      {/* Radial Hover Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
