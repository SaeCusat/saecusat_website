import { useEffect, useRef, useState } from 'react'

interface ScrollFadeOptions {
  threshold?: number
  rootMargin?: string
}

export function useScrollFade(options: ScrollFadeOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
  } = options

  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Stop observing after element becomes visible
            if (entry.target) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin])

  return { elementRef, isVisible }
}

export default useScrollFade
