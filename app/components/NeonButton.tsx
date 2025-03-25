'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NeonButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  href,
  onClick,
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}) => {
  // 크기별 스타일 설정
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  // 버튼 유형별 스타일 설정
  const variantStyles = {
    primary: 'bg-primary text-black border-primary',
    secondary: 'bg-transparent text-primary border-primary',
  };

  // 기본 버튼 스타일
  const buttonStyles = `
    relative 
    overflow-hidden 
    font-bold 
    rounded-md 
    border-2 
    transition-all 
    duration-300 
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${fullWidth ? 'w-full' : ''} 
    ${className}
    hover:shadow-[0_0_15px_rgba(0,191,255,0.7)] 
    focus:outline-none 
    focus:ring-2 
    focus:ring-primary 
    focus:ring-opacity-50
  `;

  // 애니메이션 속성
  const buttonAnimations = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.98,
    },
  };

  // 링크 또는 버튼 렌더링
  const ButtonContent = (
    <motion.button
      className={buttonStyles}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimations}
    >
      <motion.span
        className="absolute inset-0 bg-primary opacity-20"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  // 링크 또는 버튼으로 반환
  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
};

export default NeonButton;