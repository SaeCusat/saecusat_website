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
      <div className="relative p-6 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-slate-700/40 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/3 via-slate-800/5 to-indigo-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-400/70 transition-colors duration-300 bg-slate-800/50">
            {!imageLoaded && (
              <div className="w-full h-full committee-loading"></div>
            )}
            <Image
              src={member.image}
              alt={member.title}
              width={160}
              height={160}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          
          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {member.title}
          </h3>
          
          <p className="text-slate-400 text-sm mb-4 group-hover:text-slate-300 transition-colors duration-300">
            {member.subtitle}
          </p>
          
          {member.url && (
            <a
              href={member.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm glassmorphism-bg hover:bg-blue-500/20 text-blue-300 rounded-full transition-all duration-300 group/link"
              aria-label={`View ${member.title}'s LinkedIn profile`}
            >
              <span className="group-hover/link:text-blue-200">LinkedIn</span>
              <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
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
      
      <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden committee-container transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Optimized Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Dot Matrix Background Layer - Enhanced visibility */}
          <div className="dot-matrix-bg"></div>
          
          {/* Simplified gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-indigo-900/40"></div>
          
          {/* Reduced animated elements for performance */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/6 via-transparent to-indigo-600/8"></div>
          </div>
          
          {/* Reduced floating orbs - only 2 for performance */}
          <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-blue-500/8 backdrop-blur-lg border border-blue-400/12 floating-orb"></div>
          <div className="absolute bottom-[20%] right-[15%] w-24 h-24 rounded-full bg-indigo-500/8 backdrop-blur-lg border border-indigo-400/12 floating-orb" style={{animationDelay: '3s'}}></div>
        </div>

      <Navigation currentPage="committee" />
      
      <main id="main-content" className="relative z-10">
        {/* Enhanced Header with Simplified Glassmorphism */}
        <header className="relative py-24 pt-32 overflow-hidden">
          {/* Simplified background for performance */}
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-lg border-b border-blue-400/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 via-slate-800/5 to-indigo-800/15"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-blue-200 via-slate-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl">
                Executive Committee
              </h1>
            </div>
          </div>
        </header>

        {/* Faculty Section with Simplified Glassmorphism */}
        <section className="py-16 relative">
          {/* Simplified Section Background */}
          <div className="absolute inset-0 bg-slate-800/15 backdrop-blur-lg border-y border-blue-400/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/8"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-slate-200 to-indigo-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Faculty Advisors
              </h2>
            </div>

            {/* Faculty Grid - Custom layout for better performance */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facultyData.map((member, index) => (
                  <CommitteeMemberCard key={member.title} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Section with Simplified Glassmorphism */}
        <section className="py-16 relative">
          {/* Simplified Section Background */}
          <div className="absolute inset-0 bg-blue-900/15 backdrop-blur-lg border-y border-indigo-400/10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/6 via-transparent to-slate-500/5"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-blue-200 to-slate-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Student Executive Committee
              </h2>
            </div>

            {/* Student Grid - Custom layout for better performance */}
            <div className="max-w-6xl mx-auto">
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
