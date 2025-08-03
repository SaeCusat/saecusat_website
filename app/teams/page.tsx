"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { Trophy, Users, ChevronLeft, ChevronRight, X, Play } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import TeamCarousel from "@/components/TeamCarousel"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useState, useEffect } from "react"

export default function TeamsPage() {
  const headerRef = useScrollAnimation()
  const teamsRef = useScrollAnimation()
  const carouselRef = useScrollAnimation()

  const [currentTeam, setCurrentTeam] = useState(0)
  const [selectedTeam, setSelectedTeam] = useState<any>(null)
  const [windowWidth, setWindowWidth] = useState(0)
  const [carouselConfig, setCarouselConfig] = useState({
    cardWidth: 340,
    cardHeight: 460,
    visibleCards: 2
  })

  // Handle window resize and set initial width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      
      // Update carousel config based on screen size
      if (width < 768) { // Mobile
        setCarouselConfig({
          cardWidth: 280,
          cardHeight: 380,
          visibleCards: 1
        })
      } else if (width < 1024) { // Tablet
        setCarouselConfig({
          cardWidth: 320,
          cardHeight: 420,
          visibleCards: 1
        })
      } else { // Desktop
        setCarouselConfig({
          cardWidth: 340,
          cardHeight: 460,
          visibleCards: 2
        })
      }
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
      image: "/Team pics/hermes.jpg",
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
      image: "/Team pics/aroha.jpg",
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
      image: "/Team pics/tarusa.jpg",
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
      image: "/Team pics/yeti.JPG",
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
      image: "/Team pics/storm.jpg",
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
      image: "/Team pics/maru.jpg",
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
      image: "/Team pics/astron.jpg",
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

  const carouselMembers = teams.map(team => ({
    id: team.id.toString(),
    name: team.name,
    role: "", // Empty role since we only want team name
    image: team.image,
    bio: team.description.split('.').slice(0, 2).join('.') + '.',
    teamData: team
  }))

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
          {[
            { left: 25, top: 30, delay: 0, duration: 10 },
            { left: 65, top: 45, delay: 1.5, duration: 12 },
            { left: 45, top: 65, delay: 3, duration: 9 },
            { left: 75, top: 25, delay: 4.5, duration: 11 },
            { left: 35, top: 55, delay: 2, duration: 8 },
            { left: 55, top: 75, delay: 3.5, duration: 10.5 }
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-600 rounded-full opacity-20 animate-float"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`
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
              onClick={() => document.querySelector('#team-carousel')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <Users className="w-5 h-5 mr-2 inline" />
              Meet Our Teams
            </button>
          </div>
        </section>

      {/* Team Detail Modal - Minimal Design */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden relative shadow-2xl animate-fade-in-up border border-white/20">
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 z-10 bg-black/10 backdrop-blur-md rounded-full p-2 hover:bg-black/20 transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-gray-700 group-hover:text-black" />
            </button>

            {/* Hero Image with Team Name Overlay */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={selectedTeam.image || "/placeholder.svg"}
                alt={selectedTeam.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-1">{selectedTeam.name}</h2>
                <p className="text-lg opacity-90">Established {selectedTeam.established}</p>
                <div className="flex items-center mt-2 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  {selectedTeam.members} Members
                </div>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-14rem)]">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  {selectedTeam.description.split('.').slice(0, 2).join('.')}...
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Key Achievements
                </h3>
                <div className="grid gap-2">
                  {selectedTeam.achievements.slice(0, 3).map((achievement: any, index: number) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-100">
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Preview */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gallery</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedTeam.gallery.slice(0, 3).map((image: string, index: number) => (
                    <div key={index} className="relative h-24 rounded-lg overflow-hidden group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${selectedTeam.name} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TeamCarousel Section */}
      <section id="team-carousel" className="relative z-10">
        <TeamCarousel 
          members={carouselMembers}
          title="OUR TEAMS"
          titleColor="#ffffff"
          background="transparent"
          cardWidth={carouselConfig.cardWidth}
          cardHeight={carouselConfig.cardHeight}
          cardRadius={16}
          showArrows={true}
          showDots={true}
          keyboardNavigation={true}
          touchNavigation={true}
          animationDuration={600}
          autoPlay={0}
          pauseOnHover={true}
          visibleCards={carouselConfig.visibleCards}
          sideCardScale={0.85}
          sideCardOpacity={0.7}
          grayscaleEffect={true}
          infoPosition="overlay"
          infoTextColor="#ffffff"
          infoBackground="linear-gradient(transparent, rgba(0,0,0,0.85))"
          onCardClick={(member) => {
            if (member.teamData) {
              openTeamDetail(member.teamData);
            }
          }}
          className="py-8 md:py-12"
        />
        
        {/* Instructions */}
        <div className="text-center text-gray-400 pb-8 md:pb-12 px-4">
          <p className="text-xs md:text-sm">
            Use arrow keys, swipe, or click arrows to navigate • Click on a team to view details
          </p>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
