'use client';

import { useEffect, useRef } from 'react';

interface CodeBackgroundProps {
  className?: string;
}

const CodeBackground: React.FC<CodeBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 캔버스 크기 설정
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 랜덤 코드 문자열 생성
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]=+-*&^%$#@!';
    const codeCharacters = '01';
    
    class CodeDrop {
      x: number;
      y: number;
      speed: number;
      text: string;
      fontSize: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speed = 0.5 + Math.random() * 2;
        this.text = codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
        this.fontSize = 10 + Math.random() * 10;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.fontSize}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(0, 191, 255, ${Math.random() * 0.2 + 0.05})`;
        ctx.fillText(this.text, this.x, this.y);
      }

      update(canvasHeight: number, canvasWidth: number) {
        this.y += this.speed;
        if (this.y > canvasHeight) {
          this.y = 0;
          this.x = Math.random() * canvasWidth;
        }
        if (Math.random() < 0.05) {
          this.text = codeCharacters.charAt(Math.floor(Math.random() * codeCharacters.length));
        }
      }
    }

    // 코드 드롭 생성
    const dropCount = Math.floor(canvas.width / 20);
    const drops: CodeDrop[] = [];
    
    for (let i = 0; i < dropCount; i++) {
      drops.push(new CodeDrop(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    // 애니메이션 루프
    const animate = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drops.forEach(drop => {
        drop.draw(ctx);
        drop.update(canvas.height, canvas.width);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-20 ${className}`}
    />
  );
};

export default CodeBackground;