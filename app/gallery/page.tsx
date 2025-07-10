"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera } from "lucide-react"
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
        return "bg-red-100 text-red-800"
      case "Event":
        return "bg-blue-100 text-blue-800"
      case "Workshop":
        return "bg-green-100 text-green-800"
      case "Team Event":
        return "bg-purple-100 text-purple-800"
      case "Educational":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const gallerySectionRef = useScrollAnimation()
  const statsSectionRef = useScrollAnimation()

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="gallery" />

      <div id="main-content">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 via-blue-800 to-purple-800 text-white py-20 relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up animate-text-reveal">Photo Gallery</h1>
          <p className="text-2xl text-blue-200 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 animate-text-reveal">
            Explore our journey through competitions, events, workshops, and memorable moments at SAE CUSAT.
          </p>
          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Camera className="w-5 h-5 mr-2" />
              <span className="text-lg font-semibold">Capturing Excellence</span>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/10 rounded-full animate-float animation-delay-600"></div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div ref={gallerySectionRef} className="scroll-animate">
            <div className="space-y-20">
              {galleryCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <div className="flex items-center justify-between mb-10 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900 mb-3 animate-text-reveal">{category.title}</h2>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center text-gray-600 animate-fade-in-left">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span className="text-lg">{category.date}</span>
                        </div>
                        <Badge className={`${getTypeColor(category.type)} text-lg px-4 py-2 animate-scale-in`}>
                          {category.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right animate-fade-in-right">
                      <div className="text-3xl font-bold text-navy-900">{category.images.length}</div>
                      <div className="text-gray-500">photos</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 animate-scale-in"
                        style={{ animationDelay: `${imageIndex * 100}ms` }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${category.title} - Photo ${imageIndex + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-white text-sm font-medium mb-2">{category.title}</div>
                            <Button variant="secondary" size="sm" className="w-full">
                              View Full Size
                            </Button>
                          </div>
                        </div>

                        {/* Hover overlay with number */}
                        <div className="absolute top-4 right-4 bg-navy-900/80 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {imageIndex + 1}
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div ref={statsSectionRef} className="scroll-animate">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">500+</div>
                <div className="text-gray-600">Total Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">25+</div>
                <div className="text-gray-600">Events Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">15+</div>
                <div className="text-gray-600">Competitions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-navy-900 mb-2">3</div>
                <div className="text-gray-600">Years of Memories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
