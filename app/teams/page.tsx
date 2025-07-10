"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { Trophy, Users, ChevronLeft, ChevronRight, X, Play } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useState, useEffect } from "react"

export default function TeamsPage() {
  const headerRef = useScrollAnimation()
  const teamsRef = useScrollAnimation()
  const carouselRef = useScrollAnimation()

  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [selectedTeam, setSelectedTeam] = useState<any>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  // Handle window resize and set initial width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    // Set initial width
    handleResize()
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const teams = [
    {
      id: 1,
      name: "Formula SAE Team",
      description:
        "Our flagship team designing and building formula-style race cars for international competitions. We focus on aerodynamics, chassis design, and powertrain optimization to create competitive vehicles.",
      achievements: ["3rd Place - Formula SAE 2024", "Best Design Award 2023", "Innovation Excellence 2022"],
      members: 15,
      established: "2018",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 2,
      name: "Baja SAE Team",
      description:
        "Specialized in designing and manufacturing off-road vehicles for the Baja SAE competition. Our team excels in creating robust, all-terrain vehicles capable of handling extreme conditions.",
      achievements: ["1st Place - Baja SAE India 2023", "Innovation Award 2022", "Best Performance 2021"],
      members: 12,
      established: "2019",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 3,
      name: "Electric Vehicle Team",
      description:
        "Focused on developing sustainable electric vehicle solutions and participating in EV competitions. We work on battery management, electric motors, and energy efficiency optimization.",
      achievements: ["Best EV Design 2024", "Efficiency Champion 2023", "Green Innovation Award 2022"],
      members: 18,
      established: "2020",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 4,
      name: "Aero Design Team",
      description:
        "Specializing in aerodynamic design and analysis for various automotive applications. We use CFD analysis and wind tunnel testing to optimize vehicle performance.",
      achievements: ["Aero Excellence Award 2024", "CFD Challenge Winner 2023", "Design Innovation 2022"],
      members: 10,
      established: "2021",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 5,
      name: "Powertrain Team",
      description:
        "Dedicated to engine design, optimization, and powertrain development for racing vehicles. We focus on maximizing power output while maintaining reliability and efficiency.",
      achievements: ["Engine Performance Award 2024", "Powertrain Innovation 2023", "Technical Excellence 2022"],
      members: 14,
      established: "2019",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 6,
      name: "Chassis & Suspension Team",
      description:
        "Experts in vehicle dynamics, chassis design, and suspension system development. We create lightweight yet strong chassis with optimal suspension geometry.",
      achievements: ["Best Chassis Design 2024", "Suspension Innovation 2023", "Structural Excellence 2022"],
      members: 11,
      established: "2020",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
    {
      id: 7,
      name: "Electronics & Controls Team",
      description:
        "Responsible for electronic systems, data acquisition, and vehicle control systems. We develop advanced telemetry systems and electronic control units.",
      achievements: ["Best Electronics Integration 2024", "Data Systems Award 2023", "Innovation Prize 2022"],
      members: 13,
      established: "2021",
      image: "/placeholder.svg?height=300&width=400",
      gallery: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      videoUrl: "/placeholder-video.mp4",
    },
  ]

  const nextTeam = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teams.length)
  }

  const prevTeam = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teams.length) % teams.length)
  }

  const openTeamDetail = (team: any) => {
    setSelectedTeam(team)
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <Navigation currentPage="teams" />

      <div id="main-content">
      {/* Dot Pattern Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0">
        <div className="absolute inset-0 matrix-background"></div>
        <div className="absolute inset-0 animated-dots"></div>
      </div>

      {/* Team Detail Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-lg">
              <Image
                src={selectedTeam.image || "/placeholder.svg"}
                alt={selectedTeam.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedTeam.name}</h2>
                <p className="text-base sm:text-lg">Est. {selectedTeam.established}</p>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">About the Team</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedTeam.description}</p>

                  <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {selectedTeam.members} Members
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      {selectedTeam.achievements.length} Awards
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">Recent Achievements</h3>
                  <div className="space-y-2">
                    {selectedTeam.achievements.map((achievement: any, index: number) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Trophy className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">Team Gallery</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  {selectedTeam.gallery.map((image: string, index: number) => (
                    <div key={index} className="relative h-20 sm:h-24 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedTeam.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">Team Video</h3>
                <div className="relative h-32 sm:h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm sm:text-base">Video content coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-blue-800 text-white py-12 sm:py-16 relative z-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div ref={headerRef} className="scroll-animate">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">Our Teams</h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
              Meet the dedicated teams that drive innovation and excellence in automotive engineering at SAE CUSAT.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced 3D Teams Carousel Section */}
      <section className="py-16 sm:py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div ref={carouselRef} className="scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 text-center mb-12 sm:mb-16">Featured Teams</h2>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevTeam}
                className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-4 sm:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-navy-900" />
              </button>

              <button
                onClick={nextTeam}
                className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-4 sm:p-5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-navy-900" />
              </button>

              {/* Enhanced 3D Carousel */}
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
                <div className="flex items-center justify-center h-full perspective-1000">
                  {teams.map((team, index) => {
                    const offset = index - currentTeamIndex
                    const isActive = offset === 0
                    const isVisible = Math.abs(offset) <= 2

                    if (!isVisible) return null

                    return (
                      <div
                        key={team.id}
                        className={`absolute transition-all duration-700 cursor-pointer ${isActive ? "z-10" : "z-0"}`}
                        style={{
                          transform: `
                            translateX(${offset * (windowWidth < 640 ? 280 : windowWidth < 1024 ? 350 : 420)}px) 
                            translateZ(${isActive ? "0px" : "-150px"}) 
                            rotateY(${offset * 12}deg)
                            scale(${isActive ? 1 : 0.75})
                          `,
                          opacity: isActive ? 1 : 0.5,
                        }}
                        onClick={() => openTeamDetail(team)}
                      >
                        <Card className="w-72 h-96 sm:w-80 sm:h-[450px] lg:w-96 lg:h-[500px] overflow-hidden hover:shadow-3xl transition-all duration-500 group border-2 border-transparent hover:border-navy-200">
                          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                            <Image
                              src={team.image || "/placeholder.svg"}
                              alt={team.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl">{team.name}</h3>
                              <p className="text-sm sm:text-base opacity-90">Est. {team.established}</p>
                            </div>
                          </div>
                          <CardHeader className="p-4 sm:p-6">
                            <div className="flex items-center justify-between text-sm sm:text-base text-gray-500 mb-3">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                {team.members} Members
                              </div>
                              <div className="flex items-center">
                                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                {team.achievements.length} Awards
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base line-clamp-4 leading-relaxed">
                              {team.description}
                            </p>

                            {/* Enhanced CTA for active card */}
                            {isActive && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-center">
                                  <span className="text-navy-900 font-semibold text-sm flex items-center">
                                    Click to explore <ChevronRight className="w-4 h-4 ml-1" />
                                  </span>
                                </div>
                              </div>
                            )}
                          </CardHeader>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Enhanced Team Indicators */}
              <div className="flex justify-center mt-8 sm:mt-12 space-x-3">
                {teams.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTeamIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTeamIndex
                        ? "w-12 h-3 bg-navy-900"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                    }`}
                  />
                ))}
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
