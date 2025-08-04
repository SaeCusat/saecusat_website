"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState, useEffect, useMemo, memo } from "react"
import "./committee.css"

// Optimized committee member card component for performance
const CommitteeMemberCard = memo(({ member, index }: { member: any; index: number }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div 
      className="group relative animate-slide-in committee-member-card"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative p-8 rounded-3xl committee-member-enhanced hover:scale-[1.02] transition-all duration-500">
        {/* Subtle inner glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-3"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-400/60 group-hover:border-blue-300/80 transition-all duration-500 bg-slate-900/80 shadow-2xl shadow-blue-900/40 group-hover:shadow-blue-400/40">
            {!imageLoaded && (
              <div className="w-full h-full committee-loading"></div>
            )}
            <Image
              src={member.image}
              alt={member.title}
              width={208}
              height={208}
              className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 208px, 208px"
            />
          </div>
          
          <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {member.title}
          </h3>
          
          <p className="text-slate-400 text-sm mb-6 group-hover:text-slate-300 transition-colors duration-300 font-medium">
            {member.subtitle}
          </p>
          
          {member.url && (
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-sm font-medium bg-slate-800/60 hover:bg-slate-700/70 text-slate-300 hover:text-blue-300 rounded-lg transition-all duration-300 group/link border border-slate-600/40 hover:border-blue-500/50 backdrop-blur-sm shadow-lg hover:shadow-xl"
              aria-label={`View ${member.title}'s LinkedIn profile`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="group-hover/link:text-blue-300 font-medium">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
})

CommitteeMemberCard.displayName = "CommitteeMemberCard"

export default function CommitteePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsLoaded(true)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  // Memoized data to prevent unnecessary re-renders
  const facultyData = useMemo(() => [
    { 
      image: "/placeholder.svg?height=200&width=200",
      title: "Dr Biju N", 
      subtitle: "Faculty Advisor", 
      borderColor: "#1e3a8a",
      gradient: "linear-gradient(135deg, #1e3a8a, #0f172a)",
      url: "https://www.linkedin.com/in/biju-n-4287a9a"
    },
    { 
      image: "/placeholder.svg?height=200&width=200",
      title: "Dr Gireesh Kumaran", 
      subtitle: "Faculty Advisor", 
      borderColor: "#1d4ed8",
      gradient: "linear-gradient(225deg, #1d4ed8, #0f172a)",
      url: "https://www.linkedin.com/in/gireesh-kumaran-thampi-b-s-6711253b"
    },
  ], [])

  const studentData = useMemo(() => [
    { 
      image: "/committee/Harinadh.png",
      title: "Harinadh Sadish", 
      subtitle: "President", 
      borderColor: "#1e40af",
      gradient: "linear-gradient(145deg, #1e40af, #0f172a)",
      url: "https://www.linkedin.com/in/harinadh-sadish-a173b6366"
    },
    { 
      image: "/committee/Alakanandha cb.png",
      title: "Alakanandha C B", 
      subtitle: "Vice President", 
      borderColor: "#1e3a8a",
      gradient: "linear-gradient(210deg, #1e3a8a, #0f172a)",
      url: "https://www.linkedin.com/in/alakanandha-c-b-610641291"
    },
    { 
      image: "/committee/INDULEKHA T R.png",
      title: "Indulekha T R", 
      subtitle: "Secretary", 
      borderColor: "#2563eb",
      gradient: "linear-gradient(165deg, #2563eb, #0f172a)",
      url: "https://www.linkedin.com/in/indulekha-t-r-945183227"
    },
    { 
      image: "/committee/neeraj.png",
      title: "Neeraj V", 
      subtitle: "Treasurer", 
      borderColor: "#1d4ed8",
      gradient: "linear-gradient(195deg, #1d4ed8, #0f172a)",
      url: "https://www.linkedin.com/in/neerajv777"
    },
    { 
      image: "/committee/aslam (2).png",
      title: "Muhammad Aslam", 
      subtitle: "Technical Head", 
      borderColor: "#3b82f6",
      gradient: "linear-gradient(225deg, #3b82f6, #0f172a)",
      url: "https://www.linkedin.com/in/muhammad-aslam-a1484a336"
    },
    { 
      image: "/committee/prajith.png",
      title: "Prajith A K", 
      subtitle: "Joint Secretary", 
      borderColor: "#1e40af",
      gradient: "linear-gradient(135deg, #1e40af, #0f172a)",
      url: "https://www.linkedin.com/in/prajith-a-k"
    }
  ], [])

  return (
    <>
      {/* Simple loading screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center">
          <div className="animate-pulse text-blue-300 text-xl">Loading...</div>
        </div>
      )}
      
      <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden committee-container transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Enhanced Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Dot Matrix Background Layer - Enhanced visibility */}
          <div className="dot-matrix-bg"></div>
          
          {/* Circular Gradient Dot Matrix Pattern */}
          <div className="circular-dot-matrix"></div>
          
          {/* Wave Pattern Background */}
          <div className="wave-pattern"></div>
          
          {/* Enhanced gradient overlay with darker tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-gray-900/50 to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 via-transparent to-indigo-950/40"></div>
          
          {/* Enhanced animated elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/15"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/8 via-transparent to-blue-900/12"></div>
          </div>
          
          {/* Enhanced floating orbs with better glow */}
          <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full floating-orb"></div>
          <div className="absolute top-[60%] left-[5%] w-24 h-24 rounded-full floating-orb" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-[20%] right-[15%] w-28 h-28 rounded-full floating-orb" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-[30%] right-[20%] w-20 h-20 rounded-full floating-orb" style={{animationDelay: '5s'}}></div>
        </div>

      <Navigation currentPage="committee" />
      
      <main id="main-content" className="relative z-10">
        {/* Enhanced Header with Premium Glassmorphism */}
        <header className="relative py-24 pt-40 overflow-hidden">
          {/* Enhanced background with deeper glassmorphism */}
          <div className="absolute inset-0 header-bg-enhanced">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-slate-900/10 to-indigo-900/20"></div>
            {/* Additional glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-blue-200 via-slate-100 to-indigo-200 bg-clip-text text-transparent mb-4 tracking-wide leading-tight" style={{
                textShadow: '0 6px 12px rgba(59, 130, 246, 0.4), 0 12px 24px rgba(0, 0, 0, 0.5), 0 3px 6px rgba(99, 102, 241, 0.3)',
                letterSpacing: '0.01em'
              }}>
                Executive Committee
              </h1>
            </div>
          </div>
        </header>

        {/* Faculty Section with Enhanced Glassmorphism */}
        <section className="py-20 relative">
          {/* Enhanced Section Background */}
          <div className="absolute inset-0 section-bg-enhanced">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-indigo-500/12"></div>
            {/* Additional depth layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            {/* Section Title */}
            <div className="text-center mb-20 pt-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-slate-200 to-indigo-300 bg-clip-text text-transparent mb-6 tracking-wide leading-relaxed relative z-30" style={{
                textShadow: '0 4px 8px rgba(59, 130, 246, 0.3), 0 8px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(99, 102, 241, 0.2)',
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}>
                Faculty Advisors
              </h2>
            </div>

            {/* Faculty Grid - Custom layout for better performance */}
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facultyData.map((member, index) => (
                  <CommitteeMemberCard key={member.title} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Section with Enhanced Glassmorphism */}
        <section className="py-20 relative">
          {/* Enhanced Section Background */}
          <div className="absolute inset-0 section-bg-enhanced">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-slate-500/8"></div>
            {/* Additional depth and glow */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-900/5 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            {/* Section Title */}
            <div className="text-center mb-20 pt-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-blue-200 to-slate-300 bg-clip-text text-transparent mb-6 tracking-wide leading-relaxed relative z-30" style={{
                textShadow: '0 4px 8px rgba(99, 102, 241, 0.3), 0 8px 16px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(59, 130, 246, 0.2)',
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}>
                Student Executive Committee
              </h2>
            </div>

            {/* Student Grid - Custom layout for better performance */}
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentData.map((member, index) => (
                  <CommitteeMemberCard key={member.title} member={member} index={index + facultyData.length} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
    </>
  )
}
