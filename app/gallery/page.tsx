"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

const GALLERY_IMAGES = [
  { title: "YETI RACING", image: "/gallery/yeti.jpg" },
  { title: "YETI RACING", image: "/gallery/yeti3.JPG" },
  { title: "YETI RACING", image: "/gallery/yeti2.jpg" },
  { title: "TEAM STORM RACING", image: "/gallery/storm2.jpg" },
  { title: "TEAM STORM RACING", image: "/gallery/storm.jpg" },
  { title: "TEAM HERMES", image: "/gallery/hermes.jpg" },
  { title: "TEAM MARUTSAKA", image: "/gallery/marutsaka.jpg" },
  { title: "TEAM MARUTSAKA", image: "/gallery/marutsaka2.jpg" },
  { title: "TEAM TARUSA", image: "/gallery/tarusa.JPG" },
  { title: "CADABLE 2024", image: "/gallery/cad.jpg" },
  { title: "WELDING WORKSHOP", image: "/gallery/weld3.jpg" },
  { title: "WELDING WORKSHOP", image: "/gallery/weld4.jpg" },
]

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePrevious = () => {
    if (selectedImageIndex === null) return
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : GALLERY_IMAGES.length - 1
    setSelectedImageIndex(newIndex)
  }

  const handleNext = () => {
    if (selectedImageIndex === null) return
    const newIndex = selectedImageIndex < GALLERY_IMAGES.length - 1 ? selectedImageIndex + 1 : 0
    setSelectedImageIndex(newIndex)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0]?.clientX || 0)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0]?.clientX || 0)
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left, show next image
        handleNext()
      } else {
        // Swiped right, show previous image
        handlePrevious()
      }
    }
  }

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") setSelectedImageIndex(null)
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [selectedImageIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#0a0e1a] to-[#020614]">
      <Navigation currentPage="gallery" />
      
      <main className="relative min-h-screen">
        {/* Dot Grid Background - Fixed and Behind */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-50 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(96, 165, 250, 0.3) 1px, transparent 1px),
              radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 100px 100px',
            backgroundPosition: '0 0, 25px 25px'
          }}
        ></div>

        {/* Content Container - In front of background */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* Header Section */}
          <div className="text-center mb-20 sm:mb-28 pt-8 sm:pt-12">
            {/* Gallery Heading - Premium Style */}
            <div className="relative inline-block w-full mb-8">
              {/* Animated Background Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl blur-3xl opacity-75 animate-pulse-glow"></div>
              
              <h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-0 animate-fade-in-up relative z-10 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
                style={{
                  letterSpacing: '-0.02em',
                }}
              >
                GALLERY
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed hover:text-gray-100 transition-colors duration-300 animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
              Explore our journey through <span className="text-cyan-300 font-semibold">competitions</span>, <span className="text-blue-300 font-semibold">events</span>, and <span className="text-indigo-300 font-semibold">achievements</span>
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {GALLERY_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ 
                  animationDelay: `${idx * 75}ms`,
                }}
                onClick={() => {
                  setSelectedImageIndex(idx)
                  document.body.style.overflow = 'hidden'
                }}
              >
                <div style={{ paddingBottom: '75%', position: 'relative', overflow: 'hidden', backgroundColor: '#1a1a2e' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox - Outside content container to avoid z-index issues */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/98 flex items-center justify-center p-4 z-[9999] top-0 left-0 right-0 bottom-0"
            onClick={() => {
              setSelectedImageIndex(null)
              document.body.style.overflow = 'auto'
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Blurred background content - optional visual enhancement */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-md -z-10" />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center max-w-screen-lg" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImageIndex(null)
                  document.body.style.overflow = 'auto'
                }}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-red-500 transition-colors duration-200 z-[10000] p-2 rounded-full"
                style={{
                  outline: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
                title="Close (ESC)"
              >
                <X className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white text-opacity-70 hover:text-opacity-100 hover:text-blue-400 transition-colors duration-200 z-[10001] select-none flex items-center justify-center"
                style={{
                  outline: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '48px',
                  height: '48px',
                  padding: '0',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-50%)'
                }}
                title="Previous (Left Arrow)"
                type="button"
              >
                <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white text-opacity-70 hover:text-opacity-100 hover:text-blue-400 transition-colors duration-200 z-[10001] select-none flex items-center justify-center"
                style={{
                  outline: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  width: '48px',
                  height: '48px',
                  padding: '0',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-50%)'
                }}
                title="Next (Right Arrow)"
                type="button"
              >
                <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
              </button>

              {/* Image Container */}
              <div className="flex items-center justify-center h-full w-full px-4">
                <img
                  src={GALLERY_IMAGES[selectedImageIndex].image}
                  alt={GALLERY_IMAGES[selectedImageIndex].title}
                  style={{
                    maxWidth: '95vw',
                    maxHeight: '80vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  className="drop-shadow-2xl"
                />
              </div>

              {/* Image Info - Fixed at bottom */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-[10000] w-full px-4">
                <p className="text-lg sm:text-xl font-semibold">{GALLERY_IMAGES[selectedImageIndex].title}</p>
                <p className="text-sm sm:text-base text-gray-300">{selectedImageIndex + 1} of {GALLERY_IMAGES.length}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
