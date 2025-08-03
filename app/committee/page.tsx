"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ChromaGrid from "@/components/ChromaGrid"
import InteractiveBackground from "@/components/InteractiveBackground"
import { useState, useEffect } from "react"

export default function CommitteePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const facultyData = [
    { 
      image: "/placeholder.svg?height=200&width=200",
      title: "Dr Biju N", 
      subtitle: "Faculty Advisor", 
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://www.linkedin.com/in/biju-n-4287a9a"
    },
    { 
      image: "/placeholder.svg?height=200&width=200",
      title: "Dr Gireesh Kumaran", 
      subtitle: "Faculty Advisor", 
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.linkedin.com/in/gireesh-kumaran-thampi-b-s-6711253b"
    },
  ]

  const studentData = [
    { 
      image: "/committee/Harinadh.png",
      title: "Harinadh Sadish", 
      subtitle: "President", 
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://www.linkedin.com/in/harinadh-sadish-a173b6366"
    },
    { 
      image: "/committee/Alakanandha cb.png",
      title: "Alakanandha C B", 
      subtitle: "Vice President", 
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://www.linkedin.com/in/alakanandha-c-b-610641291"
    },
    { 
      image: "/committee/INDULEKHA T R.png",
      title: "Indulekha T R", 
      subtitle: "Secretary", 
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://www.linkedin.com/in/indulekha-t-r-945183227"
    },
    { 
      image: "/committee/neeraj.png",
      title: "Neeraj V", 
      subtitle: "Treasurer", 
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://www.linkedin.com/in/neerajv777"
    },
    { 
      image: "/committee/Aslam.png",
      title: "Muhammad Aslam", 
      subtitle: "Technical Head", 
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.linkedin.com/in/muhammad-aslam"
    },
    { 
      image: "/committee/Prajith AK.png",
      title: "Prajith A K", 
      subtitle: "Joint Secretary", 
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Interactive Background */}
      <InteractiveBackground />
      
      {/* Enhanced Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-indigo-900/30 to-cyan-900/40"></div>
        
        {/* Animated gradient meshes */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-500/15 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-indigo-500/12 via-transparent to-blue-500/12 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Floating glassmorphism elements */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-[25%] right-[15%] w-15 h-15 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-[30%] left-[20%] w-25 h-25 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 animate-pulse" style={{animationDuration: '10s', animationDelay: '4s'}}></div>
        <div className="absolute bottom-[20%] right-[25%] w-18 h-18 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 animate-pulse" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <Navigation currentPage="committee" />
      
      <div id="main-content" className="relative z-10">
        {/* Enhanced Header with Glassmorphism */}
        <section className="bg-gradient-to-br from-blue-900/70 via-indigo-900/50 to-cyan-900/70 text-white py-24 pt-32 relative overflow-hidden backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-indigo-800/20 to-cyan-800/30 backdrop-blur-sm"></div>
          <div className="absolute inset-0 border-b border-blue-400/20"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
                Executive Committee
              </h1>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-24 relative">
          {/* Glassmorphism Section Background */}
          <div className="absolute inset-0 bg-blue-500/15 backdrop-blur-md border-y border-blue-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-500/15"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-100 mb-4 font-sans drop-shadow-lg">
                Faculty Advisors
              </h2>
            </div>

            {/* Faculty ChromaGrid */}
            <div className="max-w-4xl mx-auto">
              <ChromaGrid 
                items={facultyData}
                columns={2}
                rows={1}
                radius={200}
                className="faculty-grid"
              />
            </div>
          </div>
        </section>

        {/* Student Section */}
        <section className="py-24 relative">
          {/* Glassmorphism Section Background */}
          <div className="absolute inset-0 bg-indigo-900/25 backdrop-blur-md border-y border-indigo-400/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-blue-500/15"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 font-sans bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Student Executive Committee
              </h2>
            </div>

            {/* Student ChromaGrid */}
            <div className="max-w-7xl mx-auto">
              <ChromaGrid 
                items={studentData}
                columns={3}
                rows={2}
                radius={250}
                className="student-grid"
              />
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  )
}
