"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';
import { cn } from '../lib/utils';
import Image from 'next/image';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  teamData?: any;
}

export interface TeamCarouselProps {
  /** Array of team members */
  members: TeamMember[];
  /** Title displayed above the carousel */
  title?: string;
  /** Title font size */
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Title color */
  titleColor?: string;
  /** Background color or gradient. Overrides the default 'bg-background' class. */
  background?: string;
  /** Card width in pixels */
  cardWidth?: number;
  /** Card height in pixels */
  cardHeight?: number;
  /** Card border radius */
  cardRadius?: number;
  /** Enable/disable navigation arrows */
  showArrows?: boolean;
  /** Enable/disable dots indicator */
  showDots?: boolean;
  /** Enable/disable keyboard navigation */
  keyboardNavigation?: boolean;
  /** Enable/disable touch/swipe navigation */
  touchNavigation?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
  /** Pause auto-play on hover */
  pauseOnHover?: boolean;
  /** Number of visible cards on each side */
  visibleCards?: number;
  /** Scale factor for side cards */
  sideCardScale?: number;
  /** Opacity for side cards */
  sideCardOpacity?: number;
  /** Apply grayscale filter to side cards */
  grayscaleEffect?: boolean;
  /** Custom className for container */
  className?: string;
  /** Custom className for cards */
  cardClassName?: string;
  /** Custom className for title */
  titleClassName?: string;
  /** Member info position */
  infoPosition?: 'bottom' | 'overlay' | 'none';
  /** Info text color */
  infoTextColor?: string;
  /** Info background */
  infoBackground?: string;
  /** Callback when active member changes */
  onMemberChange?: (member: TeamMember, index: number) => void;
  /** Callback when card is clicked */
  onCardClick?: (member: TeamMember, index: number) => void;
  /** Initial active index */
  initialIndex?: number;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({
  members,
  title = "OUR TEAMS",
  titleSize = "2xl",
  titleColor = "#ffffff",
  background = "transparent",
  cardWidth = 320,
  cardHeight = 420,
  cardRadius = 20,
  showArrows = true,
  showDots = true,
  keyboardNavigation = true,
  touchNavigation = true,
  animationDuration = 800,
  autoPlay = 0,
  pauseOnHover = true,
  visibleCards = 2,
  sideCardScale = 0.9,
  sideCardOpacity = 0.8,
  grayscaleEffect = true,
  className,
  cardClassName,
  titleClassName,
  infoPosition = "overlay",
  infoTextColor = "#ffffff",
  infoBackground = "linear-gradient(transparent, rgba(0,0,0,0.8))",
  onMemberChange,
  onCardClick,
  initialIndex = 0,
}) => {
  // Safety checks
  if (!members || members.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">No team members to display</p>
      </div>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(Math.min(initialIndex, members.length - 1));
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalMembers = members.length;

  const paginate = useCallback(
    (newDirection: number) => {
      try {
        if (totalMembers === 0) return;
        setDirection(newDirection);
        const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers;
        setCurrentIndex(nextIndex);
        onMemberChange?.(members[nextIndex], nextIndex);
      } catch (error) {
        console.warn('Paginate error:', error);
      }
    },
    [currentIndex, totalMembers, members, onMemberChange]
  );

  const wrapIndex = (index: number) => {
    return (index + totalMembers) % totalMembers;
  };

  const calculatePosition = (index: number) => {
    const activeIndex = currentIndex;
    
    if (index === activeIndex) return 'center';
    
    // Calculate the shortest distance considering circular array
    let forwardDistance = (index - activeIndex + totalMembers) % totalMembers;
    let backwardDistance = (activeIndex - index + totalMembers) % totalMembers;
    
    // If forward distance is shorter or equal, it's on the right
    if (forwardDistance <= backwardDistance && forwardDistance <= visibleCards) {
      return `right-${forwardDistance}`;
    }
    
    // If backward distance is shorter, it's on the left
    if (backwardDistance < forwardDistance && backwardDistance <= visibleCards) {
      return `left-${backwardDistance}`;
    }
    
    return 'hidden';
  };

  const getVariantStyles = (position: string): TargetAndTransition => {
    const transition = {
      duration: animationDuration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    };

    switch (position) {
      case 'center':
        return {
          zIndex: 10,
          opacity: 1,
          scale: 1.1,
          x: 0,
          filter: 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'right-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-1':
        return {
          zIndex: 5,
          opacity: sideCardOpacity,
          scale: sideCardScale,
          x: -cardWidth * 0.7,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      case 'left-2':
        return {
          zIndex: 1,
          opacity: sideCardOpacity * 0.7,
          scale: sideCardScale * 0.9,
          x: -cardWidth * 1.4,
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          pointerEvents: 'auto',
          transition,
        };
      default:
        return {
          zIndex: 0,
          opacity: 0,
          scale: 0.8,
          x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1),
          pointerEvents: 'none',
          filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)',
          transition,
        };
    }
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay > 0) {
      interval = setInterval(() => {
        try {
          paginate(1);
        } catch (error) {
          console.warn('Auto-play paginate error:', error);
        }
      }, autoPlay);
    }

    const carouselContainer = document.getElementById('team-carousel-container');

    const handleMouseEnter = () => {
      try {
        if (pauseOnHover && autoPlay > 0) clearInterval(interval);
      } catch (error) {
        console.warn('Mouse enter error:', error);
      }
    };

    const handleMouseLeave = () => {
      try {
        if (pauseOnHover && autoPlay > 0) {
          interval = setInterval(() => {
            try {
              paginate(1);
            } catch (error) {
              console.warn('Auto-play paginate error:', error);
            }
          }, autoPlay);
        }
      } catch (error) {
        console.warn('Mouse leave error:', error);
      }
    };

    if (carouselContainer && pauseOnHover && autoPlay > 0) {
      carouselContainer.addEventListener('mouseenter', handleMouseEnter);
      carouselContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      try {
        clearInterval(interval);
        if (carouselContainer && pauseOnHover && autoPlay > 0) {
          carouselContainer.removeEventListener('mouseenter', handleMouseEnter);
          carouselContainer.removeEventListener('mouseleave', handleMouseLeave);
        }
      } catch (error) {
        console.warn('Cleanup error:', error);
      }
    };
  }, [autoPlay, paginate, pauseOnHover]);

  // Keyboard navigation
  useEffect(() => {
    if (!keyboardNavigation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      try {
        if (e.key === 'ArrowLeft') {
          paginate(-1);
        } else if (e.key === 'ArrowRight') {
          paginate(1);
        }
      } catch (error) {
        console.warn('Keyboard navigation error:', error);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      try {
        document.removeEventListener('keydown', handleKeyDown);
      } catch (error) {
        console.warn('Keyboard cleanup error:', error);
      }
    };
  }, [keyboardNavigation, paginate]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    try {
      setTouchStart(e.targetTouches[0]?.clientX || 0);
    } catch (error) {
      console.warn('Touch start error:', error);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchNavigation) return;
    try {
      setTouchEnd(e.targetTouches[0]?.clientX || 0);
    } catch (error) {
      console.warn('Touch move error:', error);
    }
  };

  const handleTouchEnd = () => {
    if (!touchNavigation) return;

    try {
      const swipeThreshold = 50;
      const diff = touchStart - touchEnd;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          paginate(1);
        } else {
          paginate(-1);
        }
      }
    } catch (error) {
      console.warn('Touch end error:', error);
    }
  };

  const titleSizeClasses = {
    sm: 'text-2xl md:text-3xl lg:text-4xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl',
    '2xl': 'text-6xl md:text-7xl lg:text-8xl',
  };

  return (
    <div
      id="team-carousel-container"
      className={cn(`min-h-screen flex flex-col items-center justify-center overflow-hidden relative`, className)}
      style={{ background: background }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Title */}
      {title && (
        <h1
          className={cn(
            "font-black uppercase tracking-tight absolute top-6 md:top-8 lg:top-12 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap px-4",
            titleSizeClasses[titleSize],
            titleClassName
          )}
          style={{
            color: 'transparent',
            background: `linear-gradient(to bottom, ${titleColor}75 40%, transparent 76%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          {title}
        </h1>
      )}

      {/* Carousel Container */}
      <div
        className="w-full max-w-7xl relative mt-12 md:mt-16 lg:mt-20 px-4 md:px-8"
        style={{
          height: Math.max(cardHeight + 100, 400), // Ensure minimum height on mobile
          perspective: '1000px',
        }}
      >
        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110 border border-white/20"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:scale-110 border border-white/20"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </>
        )}

        {/* Cards Track */}
        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {members.map((member, index) => {
              if (!member || !member.id) return null;
              
              const position = calculatePosition(index);
              const isCurrent = index === currentIndex;

              if (position === 'hidden' && !isCurrent) return null;

              return (
                <motion.div
                  key={member.id}
                  className={cn(
                    "absolute bg-white/10 backdrop-blur-md overflow-hidden shadow-2xl cursor-pointer border border-white/20",
                    cardClassName
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    top: '50%',
                    left: '50%',
                    marginLeft: -cardWidth / 2,
                    marginTop: -cardHeight / 2,
                  }}
                  initial={getVariantStyles('hidden')}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles('hidden')}
                  onClick={() => {
                    try {
                      if (!isCurrent) {
                        const newDirection = index > currentIndex ? 1 : -1;
                        setDirection(newDirection);
                        setCurrentIndex(index);
                        onMemberChange?.(members[index], index);
                      }
                      onCardClick?.(member, index);
                    } catch (error) {
                      console.warn('Card click error:', error);
                    }
                  }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name || "Team member"}
                    fill
                    className="object-cover"
                    style={{ borderRadius: cardRadius }}
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
                    onError={(e) => {
                      console.warn('Image load error for:', member.name);
                    }}
                  />

                  {/* Overlay Info */}
                  {infoPosition === 'overlay' && (
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 text-center"
                      style={{
                        background: infoBackground,
                        color: infoTextColor,
                        borderBottomLeftRadius: cardRadius,
                        borderBottomRightRadius: cardRadius,
                      }}
                    >
                      <h3 className="text-base md:text-lg lg:text-xl font-bold">{member.name || "Unknown"}</h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Member Info (Bottom) */}
      {infoPosition === 'bottom' && members[currentIndex] && (
        <motion.div
          key={members[currentIndex].id + "-info"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-10"
        >
          <h2
            className="text-4xl font-bold mb-3 relative inline-block"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].name}
            <span
              className="absolute top-full left-0 w-full h-0.5 mt-2"
              style={{ background: infoTextColor }}
            />
          </h2>
          <p
            className="text-xl font-medium opacity-80 uppercase tracking-wider"
            style={{ color: infoTextColor }}
          >
            {members[currentIndex].role}
          </p>
          {members[currentIndex].bio && (
            <p className="text-base mt-4 max-w-lg mx-auto opacity-70">
              {members[currentIndex].bio}
            </p>
          )}
        </motion.div>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {members.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                try {
                  if (index !== currentIndex) {
                    const newDirection = index > currentIndex ? 1 : -1;
                    setDirection(newDirection);
                    setCurrentIndex(index);
                    onMemberChange?.(members[index], index);
                  }
                } catch (error) {
                  console.warn('Dot click error:', error);
                }
              }}
              className={cn(
                "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "scale-125"
                  : "hover:scale-110"
              )}
              style={{
                background: index === currentIndex
                  ? infoTextColor
                  : `${infoTextColor}40`,
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
