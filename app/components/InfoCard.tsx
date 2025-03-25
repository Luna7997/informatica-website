'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  icon, 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      className={`
        relative 
        p-6 
        rounded-lg 
        border 
        border-primary/30 
        bg-black/50 
        backdrop-blur-sm 
        shadow-lg 
        overflow-hidden
        hover:shadow-[0_0_15px_rgba(0,191,255,0.3)]
        transition-shadow
        duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay 
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 네온 효과 테두리 */}
      <div className="absolute inset-0 border border-primary/10 rounded-lg" />
      <div className="absolute -inset-[1px] border border-primary/30 rounded-lg blur-[2px]" />
      
      {/* 상단 네온 라인 */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* 콘텐츠 */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary text-xl">{icon}</div>}
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <div className="text-foreground/90">
          {children}
        </div>
      </div>
      
      {/* 반짝이는 효과 */}
      <motion.div
        className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default InfoCard;