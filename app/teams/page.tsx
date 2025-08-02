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

  const [currentTeam, setCurrentTeam] = useState(0)
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
      name: "Hermes",
      description:
        "Team Hermes, the official bicycle design team of CUSAT, is a student-led group focused on building high-efficiency, human-powered vehicles. Combining innovative engineering with sustainable design, the team develops competitive bicycles built for performance and eco-friendly mobility. Establishing itself as a national front-runner, Hermes secured All India Rank 1 overall and AIR 2 in Design at BDC 6.0, following a strong showing at BDC 5.0 with AIR 6 overall and another AIR 2 in Design. With back-to-back top-tier performances, the team continues to demonstrate technical depth, innovation, and consistency—cementing its place as a leading force in student-driven cycle engineering in India.",
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
      name: "AROHA",
      description:
        "Team AROHA, the official drone design and innovation team of CUSAT, develops advanced UAVs for real-world applications and top-tier competitions. Integrating aerodynamics, control systems, and intelligent design, the team builds high-performance drones focused on precision and endurance. Currently competing in SAEINDIA AEROTHON 2025 and ADDC 2025–26, AROHA secured AIR 25/79 and Kerala Rank 2 in AEROTHON Phase 1. On the global front, the team is pursuing strategic collaborations with RWTH Aachen University, Germany, and defense startups—positioning itself at the forefront of aerospace and autonomous systems innovation.",
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
      name: "TARUSA",
      description:
        "Team TARUSA, the official off-road engineering team of the School of Engineering, CUSAT, specializes in the complete design and development of competition-grade all-terrain vehicles. Founded in 2017 under SAE CUSAT, the team blends mechanical precision, structural resilience, and systems innovation for extreme racing environments. In SAEINDIA BAJA 2025, TARUSA secured AIR 7 overall, with AIR 1 in Cost and Statics, AIR 2 in Altair Simulation, and top-five finishes in Sales, Sustainability, and Design, along with 1st in the Fastrack Exhibition. Past achievements include AIR 1 in hBAJA 2024 Prelims, a Top 20 finish in eBAJA 2022, AIR 10 in Mega ATV 2022, and the Most Cost-Effective Design Award in mBAJA 2019.",
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
      name: "YETI Racing",
      description:
        "Paving a new pathway in the domain of Formula style Cars, the highest form of racing cars sanctioned by the FIA. A leading force in Formula Student vehicle construction from CUSAT, Kochi, embodies dedication and collaboration, with a strong presence in prestigious competitions like SAE SUPRA, FFS INDIA, and FORMULA BHARAT. The team has been the first ever team from Kerala to win Formula Bharat and their engineering skills and vision brings creative innovation in the very field of Formula Car design.",
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
      name: "Storm Racing ",
      description:
        "Kart racing, being a form of open wheel motorsport using small light weight four wheelers called go-karts, find its CUSAT pioneer in the team Storm Racing, which was founded in the year 2024 by ambitious automotive enthusiasts of CUSAT. The team is all set to compete in its maiden competition in the month of July, 2025 in DKDC organised by FMAE.",
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
      name: "Marutsakha",
      description:
        "Team Marutsakha is CUSAT’s official Aero Design Club, dedicated to UAV innovation and excellence. Since its revival in 2023, the team has achieved top national ranks in the SAEISS Drone Development Challenge, including All India Rank 3.For the 2026 SAE ADC  competition, the team will be joined by an additional 10-member Micro-Class team, in addition to the regular class team.With a passion for flight and a mission to push boundaries, Marutsakha blends creativity, teamwork, and real-world engineering to shape the future of aerial tech.",
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
      name: "Astron Aperta",
      description:
        "Team Astron Aperta is CUSAT’s pioneering solar off road EV club, blazing a trail in green mobility. Formed in 2024, this student-led team combines electrical and mechanical minds to build innovative solar-powered electric vehicles.With a strong showing at ESVC, Asia’s biggest solar car event, earning Kerala Rank 1 and All India Rank 9, they’re proving that clean energy can power bold ideas.The team is all set for participating in EBAJA and BSVC . For Astron Aperta, it's not just about building cars, it’s about building a sustainable tomorrow.",
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
    setCurrentTeam((prev) => (prev + 1) % teams.length)
  }

  const prevTeam = () => {
    setCurrentTeam((prev) => (prev - 1 + teams.length) % teams.length)
  }

  const openTeamDetail = (team: any) => {
    setSelectedTeam(team)
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation currentPage="teams" />

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
        {/* Hero Section with Dark Design matching gallery */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Large Background Text - matching gallery style */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-gray-800 select-none tracking-tight">
              TEAMS
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10 pt-20">
            {/* Clean Main Title */}
            <div className="mb-12">
              <div className="inline-block">
                <div className="text-sm text-gray-300 font-medium mb-6 tracking-[0.3em] uppercase">
                  Our Teams
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                  Teams
                </h1>
              </div>
            </div>

            {/* Clean CTA Button with glassmorphic design */}
            <button
              onClick={() => document.querySelector('#teams-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <Users className="w-5 h-5 mr-2 inline" />
              Meet Our Teams
            </button>
          </div>
        </section>

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

      {/* Enhanced 3D Teams Carousel Section */}
      <section id="teams-section" className="py-12 bg-gray-800/50 relative z-10">
        <div className="container mx-auto px-4">
          <div ref={carouselRef} className="scroll-animate">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-12 sm:mb-16">Featured Teams</h2>

            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevTeam}
                className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
              </button>

              <button
                onClick={nextTeam}
                className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
              </button>

              {/* Enhanced 3D Carousel */}
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
                <div className="flex items-center justify-center h-full perspective-1000">
                  {teams.map((team, index) => {
                    const offset = index - currentTeam
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
                        <Card className="w-72 h-96 sm:w-80 sm:h-[450px] lg:w-96 lg:h-[500px] overflow-hidden hover:shadow-xl transition-all duration-500 group bg-white border border-gray-200 hover:border-cyan-400/50">
                          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                            <Image
                              src={team.image || "/placeholder.svg"}
                              alt={team.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl">{team.name}</h3>
                              <p className="text-sm sm:text-base opacity-90">Est. {team.established}</p>
                            </div>
                          </div>
                          <CardHeader className="p-4 sm:p-6">
                            <div className="flex items-center justify-between text-sm sm:text-base text-gray-600 mb-3">
                              <div className="flex items-center">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-500" />
                                {team.members} Members
                              </div>
                              <div className="flex items-center">
                                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-500" />
                                {team.achievements.length} Awards
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm sm:text-base line-clamp-4 leading-relaxed">
                              {team.description}
                            </p>

                            {/* Enhanced CTA for active card */}
                            {isActive && (
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-center">
                                  <span className="text-cyan-600 font-semibold text-sm flex items-center">
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
                    onClick={() => setCurrentTeam(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTeam
                        ? "w-12 h-3 bg-gradient-to-r from-cyan-500 to-blue-600"
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
