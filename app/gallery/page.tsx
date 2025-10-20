"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})

  const galleryImages = [
    {
      title: "YETI RACING",
      category: "Competition",
      image: "/gallery/yeti.jpg",
      slug: "yeti-racing"
    },
    {
      title: "YETI RACING",
      category: "Team Photos",
      image: "/gallery/yeti3.jpg",
      slug: "yeti-racing"
    },
    {
      title: "YETI RACING",
      category: "Team Photos",
      image: "/gallery/yeti2.jpg",
      slug: "yeti-racing"
    },
    {
      title: "TEAM STORM RACING",
      category: "Team Photos",
      image: "/gallery/storm2.jpg",
      slug: "storm-racing"
    },
    {
      title: "TEAM STORM RACING",
      category: "Team Photos",
      image: "/gallery/storm.jpg",
      slug: "storm-racing"
    },
    {
      title: "TEAM HERMES",
      category: "Team Photos",
      image: "/gallery/hermes.jpg",
      slug: "hermes"
    },
    {
      title: "TEAM MARUTSAKA",
      category: "Team Photos",
      image: "/gallery/marutsaka.jpg",
      slug: "marutsaka"
    },
    {
      title: "TEAM MARUTSAKA",
      category: "Team Photos",
      image: "/gallery/marutsaka2.jpg",
      slug: "marutsaka"
    },
    {
      title: "TEAM STORM RACING",
      category: "Team Photos",
      image: "/gallery/storm-pic.jpg",
      slug: "storm-racing"
    },
    {
      title: "TEAM TARUSA",
      category: "Team Photos",
      image: "/gallery/tarusa.jpg",
      slug: "tarusa"
    },
    {
      title: "CADABLE 2024",
      category: "Team Photos",
      image: "/gallery/cad.jpg",
      slug: "CADABLE 2024"
    },
    {
      title: "WELDING WORKSHOP",
      category: "Team Photos",
      image: "/gallery/weld3.jpg",
      slug: "welding-workshop"
    },
    {
      title: "WELDING WORKSHOP",
      category: "Team Photos",
      image: "/gallery/weld4.jpg",
      slug: "welding-workshop"
    },
  ]

  const filteredImages = galleryImages.filter(
    (img) =>
      (selectedCategory === "All" || img.category === selectedCategory) &&
      (searchQuery === "" ||
        img.title.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex === null) return
    const newIndex =
      selectedImageIndex > 0 ? selectedImageIndex - 1 : filteredImages.length - 1
    setSelectedImageIndex(newIndex)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedImageIndex === null) return
    const newIndex =
      selectedImageIndex < filteredImages.length - 1 ? selectedImageIndex + 1 : 0
    setSelectedImageIndex(newIndex)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return
      if (e.key === "ArrowLeft") handlePrevious(e as unknown as React.MouseEvent)
      if (e.key === "ArrowRight") handleNext(e as unknown as React.MouseEvent)
      if (e.key === "Escape") setSelectedImageIndex(null)
    }
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [selectedImageIndex])

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, el: HTMLDivElement) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xPercent = (x / rect.width - 0.5) * 20
    const yPercent = (y / rect.height - 0.5) * 20

    el.style.transform = `perspective(1000px) rotateX(${-yPercent}deg) rotateY(${xPercent}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (el: HTMLDivElement) => {
    el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`
  }

  // Ripple effect
  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const ripple = document.createElement("div")
    ripple.classList.add("ripple-effect")
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    e.currentTarget.appendChild(ripple)
    setTimeout(() => ripple.remove(), 1000)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentPage="gallery" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Main Header */}
        <div className="mb-20 text-center">
          
        </div>

        {/* Gallery Title */}
        <div className="mb-12 text-center" id="title-section">
          <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-white to-blue-400 
                        bg-clip-text text-transparent tracking-wider mb-4">
            GALLERY
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto animate-pulse-slow">
            Explore our journey through competitions, events, and achievements
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-8 relative">
          <div className="absolute inset-0 dot-particle-bg opacity-20"></div>
          {Array.from({ length: Math.ceil(filteredImages.length / 4) }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 animate-on-scroll relative"
              id={`row-${rowIndex}`}
            >
              {filteredImages.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl cursor-pointer transform-gpu
                    transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                    animation: `float ${3 + idx * 0.5}s ease-in-out infinite`,
                  }}
                  onClick={(e) => {
                    createRipple(e)
                    setSelectedImageIndex(rowIndex * 4 + idx)
                  }}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                      priority={rowIndex === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent 
                                 opacity-0 group-hover:opacity-100 transition-all duration-300
                                 border border-transparent group-hover:border-blue-500/50 group-hover:glow">
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 
                                  transform translate-y-full group-hover:translate-y-0 
                                  transition-transform duration-500 bg-gradient-to-t from-black/90 to-black/0">
                        <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-white text-center
                                   group-hover:scale-105 transition-transform duration-300
                                   group-hover:text-blue-400 animate-text-shimmer">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImageIndex(null)
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 animate-slideUp">
              <div className="absolute inset-0 bg-black/95 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 circular-dot-matrix opacity-30"></div>
              </div>

              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-50 text-white hover:text-blue-400 transition-all
                         bg-black/50 p-2 rounded-full hover:bg-black/70 hover:scale-110 hover:rotate-90 duration-300
                         border border-white/20 hover:border-blue-500/50"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-all
                         bg-black/50 p-2 rounded-full hover:bg-black/70 z-50 hover:scale-110 duration-300
                         hover:-translate-x-2 border border-white/20 hover:border-blue-500/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-all
                         bg-black/50 p-2 rounded-full hover:bg-black/70 z-50 hover:scale-110 duration-300
                         hover:translate-x-2 border border-white/20 hover:border-blue-500/50"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="relative aspect-[16/9] z-40">
                <Image
                  src={filteredImages[selectedImageIndex].image}
                  alt={filteredImages[selectedImageIndex].title}
                  fill
                  className="object-contain transform transition-opacity duration-300 hover:opacity-90"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 z-50">
                <h2 className="text-3xl font-bold text-white mb-2 animate-slideUp hover:text-blue-400 transition-colors">
                  {filteredImages[selectedImageIndex].title}
                </h2>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}