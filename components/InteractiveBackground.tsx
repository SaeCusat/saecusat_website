"use client"

import { useEffect, useRef, useState } from "react";
import "./InteractiveBackground.css";

interface InteractiveBackgroundProps {
  className?: string;
}

export const InteractiveBackground = ({ className = "" }: InteractiveBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dot matrix configuration
    const dotSize = 2;
    const spacing = 35;
    const maxDistance = 100;
    const maxDisplacement = 20;

    const dots: Array<{ x: number; y: number; originalX: number; originalY: number }> = [];

    // Create dot grid
    for (let x = spacing; x < canvas.width; x += spacing) {
      for (let y = spacing; y < canvas.height; y += spacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use mouse position or touch position
      const currentPos = touchPos.x !== 0 || touchPos.y !== 0 ? touchPos : mousePos;

      dots.forEach(dot => {
        const dx = currentPos.x - dot.originalX;
        const dy = currentPos.y - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * maxDisplacement;
          const angle = Math.atan2(dy, dx);
          
          // Apply distortion away from cursor/touch
          dot.x = dot.originalX - Math.cos(angle) * force;
          dot.y = dot.originalY - Math.sin(angle) * force;
        } else {
          // Return to original position smoothly
          dot.x += (dot.originalX - dot.x) * 0.15;
          dot.y += (dot.originalY - dot.y) * 0.15;
        }

        // Calculate opacity based on distance - only show dots near cursor or at rest
        const opacity = distance < maxDistance 
          ? 0.7 - (distance / maxDistance) * 0.4
          : 0.3;

        // Draw dot with blue gradient
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dotSize * 2);
        gradient.addColorStop(0, `rgba(96, 165, 250, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(37, 99, 235, ${opacity * 0.4})`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines to nearby dots
        dots.forEach(otherDot => {
          const dotDistance = Math.sqrt(
            (dot.x - otherDot.x) ** 2 + (dot.y - otherDot.y) ** 2
          );
          
          if (dotDistance < spacing * 1.8) {
            const lineOpacity = Math.max(0, (spacing * 1.8 - dotDistance) / (spacing * 1.8)) * 0.15;
            ctx.strokeStyle = `rgba(96, 165, 250, ${lineOpacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(otherDot.x, otherDot.y);
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, touchPos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setTouchPos({ x: 0, y: 0 }); // Clear touch position when using mouse
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && e.touches[0]) {
      setTouchPos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
      setMousePos({ x: 0, y: 0 }); // Clear mouse position when using touch
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && e.touches[0]) {
      setTouchPos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
    }
  };

  const handleTouchEnd = () => {
    // Gradually fade out the effect
    setTimeout(() => {
      setTouchPos({ x: 0, y: 0 });
    }, 200);
  };

  return (
    <div
      ref={containerRef}
      className={`interactive-background ${className}`}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'none' }}
    >
      <canvas
        ref={canvasRef}
        className="interactive-canvas"
      />
    </div>
  );
};

export default InteractiveBackground;
