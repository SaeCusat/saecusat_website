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
        <div className="mb-12 text-center">
          <h2 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-wider">
  GALLERY
</h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our journey through competitions, events, and achievements
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="space-y-8 relative">
          {Array.from({ length: Math.ceil(filteredImages.length / 4) }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 relative"
              id={`row-${rowIndex}`}
            >
              {filteredImages.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedImageIndex(rowIndex * 4 + idx)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                      priority={rowIndex === 0}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 bg-black/70">
                        <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-white text-center">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedImageIndex(null)
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/50 p-2 rounded-full"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full z-50"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full z-50"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="relative aspect-[16/9] z-40">
                <Image
                  src={filteredImages[selectedImageIndex].image}
                  alt={filteredImages[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-8 z-50">
                <h2 className="text-3xl font-bold text-white mb-2">
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