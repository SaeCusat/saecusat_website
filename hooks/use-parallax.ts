"use client"

import { useEffect, useRef, useState } from "react"

export function useParallax(speed = 0.5, offset = 0) {
  const ref = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (ref.current && typeof window !== 'undefined') {
      const translateY = (scrollY - offset) * speed
      ref.current.style.transform = `translate3d(0, ${translateY}px, 0)`
    }
  }, [scrollY, speed, offset])

  return ref
}

export function useParallaxValue(speed = 0.5, offset = 0) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (scrollY - offset) * speed
}

export function useAdvancedParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      try {
        setScrollY(window.scrollY)
      } catch (error) {
        console.warn('Scroll event error:', error)
      }
    }

    const handleResize = () => {
      try {
        setWindowHeight(window.innerHeight)
      } catch (error) {
        console.warn('Resize event error:', error)
      }
    }

    // Initial setup
    handleResize()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const getParallaxStyle = (speed: number, direction: 'up' | 'down' = 'up') => {
    if (!isClient) return {}
    
    const translateY = direction === 'up' 
      ? -scrollY * speed 
      : scrollY * speed
    
    return {
      transform: `translate3d(0, ${translateY}px, 0)`,
      willChange: 'transform'
    }
  }

  const getOpacityFade = (fadeStart: number, fadeEnd: number) => {
    if (!isClient) return 1
    
    const progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1)
    return Math.max(1 - progress, 0)
  }

  const getScaleFade = (scaleStart: number, scaleEnd: number, maxScale: number = 1.2) => {
    if (!isClient) return 1
    
    const progress = Math.min(Math.max((scrollY - scaleStart) / (scaleEnd - scaleStart), 0), 1)
    return 1 + (maxScale - 1) * progress
  }

  return {
    scrollY,
    windowHeight,
    isClient,
    getParallaxStyle,
    getOpacityFade,
    getScaleFade
  }
}
