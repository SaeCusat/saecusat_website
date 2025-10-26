"use client"

import { Trophy, Users, X, ChevronLeft, ChevronRight } from "lucide-react"
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
      if (width < 480) { // Small Mobile
        setCarouselConfig({
          cardWidth: 200,
          cardHeight: 280,
          visibleCards: 1
        })
      } else if (width < 768) { // Mobile
        setCarouselConfig({
          cardWidth: 240,
          cardHeight: 320,
          visibleCards: 1
        })
      } else if (width < 1024) { // Tablet
        setCarouselConfig({
          cardWidth: 300,
          cardHeight: 400,
          visibleCards: 2
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
      "Team Hermes is a student-led engineering group dedicated to designing and building high-efficiency, human-powered vehicles. The team blends innovative engineering with sustainable design to develop competitive bicycles that excel in both performance and eco-friendly mobility.",
    achievements: [
      " All India Rank 1 (Overall) – BDC 6.0",
      " All India Rank 2 (Design) – BDC 6.0",
      " All India Rank 6 (Overall) – BDC 5.0",
      " All India Rank 2 (Design) – BDC 5.0"
    ],
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
      "Team AROHA is a student-led drone research and innovation team dedicated to developing advanced UAVs for real-world applications and top-tier competitions. By integrating aerodynamics, control systems, and intelligent design, the team creates high-performance drones built for precision, endurance, and reliability. Currently competing in SAEINDIA AEROTHON 2025 and ADDC 2025–26, Team AROHA is also forging global collaborations with RWTH Aachen University (Germany) and emerging defense startups.",
    achievements: [
      " AIR 25 / 79 – SAEINDIA AEROTHON Phase 1 (2025)",
      " Kerala Rank 2 – SAEINDIA AEROTHON Phase 1 (2025)"
    ],
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
      "Team TARUSA is a student-driven off-road engineering team specializing in the end-to-end design and development of competition-grade all-terrain vehicles (ATVs). Founded in 2017 under SAE CUSAT, the team integrates mechanical precision, structural resilience, and system innovation to engineer vehicles capable of withstanding extreme racing environments.",
    achievements: [
      "All India Rank 7 (Overall) – SAEINDIA BAJA 2025",
      " AIR 1 – Cost and Statics (SAEINDIA BAJA 2025)",
      " AIR 2 – Altair Simulation (SAEINDIA BAJA 2025)",
      " Top 5 Finishes – Sales, Sustainability, and Design (SAEINDIA BAJA 2025)",
      " 1st Place – Fastrack Exhibition (SAEINDIA BAJA 2025)",
      " AIR 1 – hBAJA 2024 Prelims",
      " Top 20 Finish – eBAJA 2022",
      " AIR 10 – Mega ATV 2022",
      " Most Cost-Effective Design Award – mBAJA 2019"
    ],
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
    "Team YETI Racing is a student-led Formula-style car design and racing team from CUSAT, Kochi, dedicated to pioneering excellence in Formula Student vehicle construction. The team combines engineering precision, innovation, and collaboration to develop high-performance, competition-grade Formula cars",
  achievements: [
    " First Team from Kerala to Win Formula Bharat",
    " Strong presence in SAE SUPRA, FFS INDIA, and FORMULA BHARAT competitions",
    " Recognized for engineering excellence, innovation, and team synergy"
  ],
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
      "Team Storm Racing is the pioneering kart racing team of CUSAT, dedicated to the design, development, and performance of lightweight, open-wheel racing vehicles known as go-karts. Founded in 2024 by a group of passionate automotive enthusiasts, the team aims to bring innovation, teamwork, and racing spirit to the motorsport culture of the university.",
    achievements: [" Preparing for its maiden competition – DKDC 2025, organized by FMAE, scheduled for July 2025"],
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
      "Team Marutsakha is CUSAT’s official Aero Design Club, committed to UAV innovation, research, and excellence in aerial engineering. Since its revival in 2023, the team has demonstrated outstanding performance in national-level competitions, driven by a passion for flight dynamics, design precision, and innovation.",
    achievements: [
      " All India Rank 3 – SAEISS Drone Development Challenge (DDC)",
      " Consistent top-tier performances in national UAV and aero design events"
    ],
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
    name: "Astron Endurance",
    description:
      "Team Astron Endurance is CUSAT’s pioneering solar off-road electric vehicle (EV) team, leading the charge in sustainable mobility and green innovation. Formed in 2024, this student-led team unites electrical and mechanical engineers to design and build solar-powered electric vehicles that embody creativity, performance, and environmental responsibility.",
    achievements: [
      " Kerala Rank 1 – ESVC (Electric Solar Vehicle Championship)",
      " All India Rank 9 – ESVC, Asia’s largest solar car event"
    ],
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
    setCurrentTeam(prev => {
      const newIndex = (prev + 1) % teams.length
      setSelectedTeam(teams[newIndex])
      return newIndex
    })
  }

  const prevTeam = () => {
    setCurrentTeam(prev => {
      const newIndex = (prev - 1 + teams.length) % teams.length
      setSelectedTeam(teams[newIndex])
      return newIndex
    })
  }

  const openTeamDetail = (team: any) => {
    const index = teams.findIndex(t => t.id === team.id)
    setCurrentTeam(index >= 0 ? index : 0)
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
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Navigation */}
      <Navigation currentPage="teams" />

      {/* Dark Background matching navigation with enhanced dot particles */}
      <div className="fixed inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950">
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
            <div className="mb-12 animate-fade-in-up">
              <div className="inline-block">
                <div className="text-sm text-gray-300 font-medium mb-6 tracking-[0.3em] uppercase animate-fade-in-up animation-delay-200">
                  Our Teams
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-300">
                  Teams
                </h1>
              </div>
            </div>

            {/* Clean CTA Button with glassmorphic design */}
            <button
              onClick={() => document.querySelector('#team-carousel')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/30 animate-fade-in-up animation-delay-400"
            >
              <Users className="w-5 h-5 mr-2 inline" />
              Meet Our Teams
            </button>
          </div>
        </section>

      {/* Team Detail Modal - Minimal Design */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-3xl w-full animate-scale-in">
            {/* Left navigation */}
            <button
              onClick={prevTeam}
              aria-label="Previous team"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/40 text-white p-3 rounded-r-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Modal Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full max-h-[85vh] overflow-hidden relative shadow-2xl animate-fade-in-up border border-white/20">
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
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(85vh-14rem)]">
                {/* Description - show full description text */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {selectedTeam.description}
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

                {/* Gallery removed */}
              </div>
            </div>

            {/* Right navigation */}
            <button
              onClick={nextTeam}
              aria-label="Next team"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/40 text-white p-3 rounded-l-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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