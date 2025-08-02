"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera, Grid, Zap, Eye, Play } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Formula SAE Competition 2024",
      date: "March 2024",
      type: "Competition",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Baja SAE India 2023",
      date: "January 2023",
      type: "Competition",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Annual Tech Fest 2023",
      date: "September 2023",
      type: "Event",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Workshop Series 2023",
      date: "Various Dates",
      type: "Workshop",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Team Building Activities",
      date: "Throughout 2023",
      type: "Team Event",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Industry Visits",
      date: "2023-2024",
      type: "Educational",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Competition":
        return "bg-red-900/30 text-red-300 border border-red-700/50 shadow-sm"
      case "Event":
        return "bg-blue-900/30 text-blue-300 border border-blue-700/50 shadow-sm"
      case "Workshop":
        return "bg-green-900/30 text-green-300 border border-green-700/50 shadow-sm"
      case "Team Event":
        return "bg-purple-900/30 text-purple-300 border border-purple-700/50 shadow-sm"
      case "Educational":
        return "bg-yellow-900/30 text-yellow-300 border border-yellow-700/50 shadow-sm"
      default:
        return "bg-gray-900/30 text-gray-300 border border-gray-700/50 shadow-sm"
    }
  }

  const gallerySectionRef = useScrollAnimation()
  const statsSectionRef = useScrollAnimation()

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation currentPage="gallery" />

      {/* Dark Background matching navigation with enhanced dot particles */}
      <div className="fixed inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Enhanced dot particle pattern */}
          <div className="absolute inset-0 enhanced-dot-particles opacity-80"></div>
          {/* Additional subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-600 rounded-full opacity-20 animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div id="main-content" className="relative z-10">
        {/* Hero Section with Dark Design matching nav */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Large Background Text - keeping this element you loved */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-gray-800 select-none tracking-tight">
              GALLERY
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10 pt-20">
            {/* Clean Main Title */}
            <div className="mb-12">
              <div className="inline-block">
                <div className="text-sm text-gray-300 font-medium mb-6 tracking-[0.3em] uppercase">
                  Visual Collection
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                  Gallery
                </h1>
              </div>
            </div>

            {/* Clean CTA Button with glassmorphic design and scroll functionality */}
            <button
              onClick={() => document.querySelector('#gallery-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <Eye className="w-5 h-5 mr-2 inline" />
              Explore Collection
            </button>
          </div>
        </section>

        {/* Gallery Collections - Redesigned Layout */}
        <section id="gallery-section" className="py-20 relative">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="text-gray-400 font-medium text-lg tracking-wide mb-4">
                Our Collection
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Captured <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Moments</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div ref={gallerySectionRef} className="scroll-animate">
              <div className="space-y-20">
                {galleryCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="group relative"
                  >
                    {/* Category Header - Dark Theme */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 mb-10 hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-500 relative overflow-hidden">
                      {/* Subtle background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
                      
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative z-10">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                            {category.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center text-gray-300">
                              <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                              <span className="font-medium">{category.date}</span>
                            </div>
                            <Badge className={`${getTypeColor(category.type)} font-medium text-sm px-4 py-2 rounded-full`}>
                              {category.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Redesigned Images Layout - Masonry Style */}
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                      {category.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="break-inside-avoid relative rounded-2xl overflow-hidden group/image cursor-pointer transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl mb-6"
                          style={{ 
                            animationDelay: `${imageIndex * 50}ms`,
                            height: `${200 + Math.random() * 150}px` // Random heights for masonry effect
                          }}
                        >
                          {/* Image container */}
                          <div className="relative w-full h-full border border-gray-700 rounded-2xl overflow-hidden group-hover/image:border-blue-500 transition-all duration-300">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${category.title} - Photo ${imageIndex + 1}`}
                              fill
                              className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                            />
                            
                            {/* Dark overlay with better contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-300">
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="text-white text-sm font-medium mb-3">
                                  {category.title}
                                </div>
                                <Button variant="secondary" size="sm" className="w-full bg-white/90 border-0 text-gray-900 hover:bg-white font-medium">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </div>
                            </div>

                            {/* Minimal corner indicator */}
                            <div className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                              {imageIndex + 1}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
