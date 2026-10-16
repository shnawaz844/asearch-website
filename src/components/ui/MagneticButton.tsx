import React, { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.28;
    const y = (clientY - (top + height / 2)) * 0.28;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 cursor-pointer select-none rounded-xl disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]';

  const variants = {
    primary: 'bg-[#C6FF4D] text-[#07080B] hover:bg-[#d4ff6e] shadow-lg shadow-[#C6FF4D]/25 hover:shadow-xl hover:shadow-[#C6FF4D]/40 px-7 py-3.5 text-sm sm:text-base font-extrabold',
    secondary: 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 dark:bg-[#11151D] dark:text-[#F5F7FA] dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-[#161B26] px-6 py-3.5 text-sm sm:text-base font-semibold',
    outline: 'bg-transparent text-slate-800 dark:text-[#F5F7FA] border border-slate-300 dark:border-[#C6FF4D]/40 hover:border-lime-500 dark:hover:border-[#C6FF4D] hover:bg-lime-500/10 dark:hover:bg-[#C6FF4D]/10 text-xs sm:text-sm px-4 py-2'
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
      }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
