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
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
      image: "/gallery/yeti3.JPG",
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
      title: "TEAM TARUSA",
      category: "Team Photos",
      image: "/gallery/tarusa.JPG",
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

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentPage="gallery" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Gallery Title */}
        {/* Main Header */}
                {/* Main Header */}
        <div className="mb-20 text-center">
          
        </div>

        {/* Gallery Title Section */}
        <div className={`mb-20 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            {/* Animated Background Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl opacity-0 animate-pulse-slow"></div>
            
            {/* Main Title with Shadow and Depth */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent tracking-tighter leading-tight relative z-10"
              style={{
                textShadow: `
                  0 10px 30px rgba(59, 130, 246, 0.4),
                  0 20px 60px rgba(0, 0, 0, 0.6),
                  0 0 40px rgba(99, 102, 241, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                letterSpacing: '-0.02em',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              GALLERY
            </h1>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light animate-fade-in-up animation-delay-300 hover:text-white transition-colors duration-300">
            Explore our journey through competitions, events, and achievements
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="space-y-8 relative">
          {Array.from({ length: Math.ceil(filteredImages.length / 4) }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 relative animate-fade-in-up"
              style={{ animationDelay: `${rowIndex * 100}ms` }}
              id={`row-${rowIndex}`}
            >
              {filteredImages.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl cursor-pointer animate-scale-in transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                  style={{ animationDelay: `${(rowIndex * 4 + idx) * 75}ms` }}
                  onClick={() => setSelectedImageIndex(rowIndex * 4 + idx)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                      priority={rowIndex === 0}
                    />
                    {/* Overlay with Animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-all duration-500">
                            <ChevronRight className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-white font-semibold text-sm">View</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImageIndex(null)
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 animate-scale-in">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-red-600/50 p-2 rounded-full transition-all duration-300 transform hover:rotate-90 hover:scale-110"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-blue-600/50 p-3 rounded-full z-50 transition-all duration-300 transform hover:scale-110 hover:-translate-x-1"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-blue-600/50 p-3 rounded-full z-50 transition-all duration-300 transform hover:scale-110 hover:translate-x-1"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="relative aspect-[16/9] z-40 animate-fade-in animation-delay-200">
                <Image
                  src={filteredImages[selectedImageIndex].image}
                  alt={filteredImages[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 z-50 animate-slide-up animation-delay-300">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {filteredImages[selectedImageIndex].title}
                </h2>
                <p className="text-gray-300">
                  {selectedImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}