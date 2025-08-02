"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function CommitteePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const executiveCommittee = {
    faculty: [
      { 
        name: "Dr Biju N", 
        position: "Faculty Advisor", 
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://www.linkedin.com/in/biju-n-4287a9a"
      },
      { 
        name: "Dr Gireesh Kumaran", 
        position: "Faculty Advisor", 
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://www.linkedin.com/in/gireesh-kumaran-thampi-b-s-6711253b"
      },
    ],
    students: [
      { 
        name: "Harinadh Sadish", 
        position: "President", 
        image: "/committee/Harinadh.png",
        linkedin: "https://www.linkedin.com/in/harinadh-sadish-a173b6366"
      },
      { 
        name: "Alakanandha C B", 
        position: "Vice President", 
        image: "/committee/Alakanandha cb.png",
        linkedin: "https://www.linkedin.com/in/alakanandha-c-b-610641291"
      },
      { 
        name: "Indulekha T R", 
        position: "Secretary", 
        image: "/committee/INDULEKHA T R.png",
        linkedin: "https://www.linkedin.com/in/indulekha-t-r-945183227"
      },
      { 
        name: "Neeraj V", 
        position: "Treasurer", 
        image: "/committee/neeraj.png",
        linkedin: "https://www.linkedin.com/in/neerajv777"
      },
      { 
        name: "Muhammad Aslam", 
        position: "Technical Head", 
        image: "/committee/Aslam.png",
        linkedin: "https://www.linkedin.com/in/muhammad-aslam"
      },
      { 
        name: "Prajith A K", 
        position: "Joint Secretary", 
        image: "/committee/Prajith AK.png",
      }
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020208] via-[#0a0a0f] to-[#020208] relative overflow-hidden">
      {/* Enhanced Dark Background */}
      <div className="fixed inset-0 opacity-[0.15] pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(147, 51, 234, 0.06) 0%, transparent 50%)
          `
        }}></div>
        <div className="absolute inset-0 matrix-background opacity-30"></div>
        {/* Animated blobs for depth */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Navigation currentPage="committee" />
      
      <div id="main-content" className="relative z-10">
        {/* Dark Header */}
        <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-24 pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-slate-800/20 to-gray-900/30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                Executive Committee
              </h1>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-24">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 font-sans">
                Faculty Advisors
              </h2>
            </div>

            {/* Faculty Cards */}
            <div className="grid md:grid-cols-2 gap-20 max-w-4xl mx-auto">
              {executiveCommittee.faculty.map((member, index) => (
                <div 
                  key={index}
                  className="group relative pt-32"
                >
                  {/* Image - Positioned to pop out from top */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative w-60 h-60">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl border-2 border-cyan-400/30"
                      />
                    </div>
                  </div>
                  
                  {/* Card Container - Dark theme */}
                  <div className={`rounded-3xl p-6 pt-24 pb-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index % 2 === 0 
                      ? 'bg-black/20 backdrop-blur-xl border border-cyan-400/20' 
                      : 'bg-black/20 backdrop-blur-xl border border-blue-400/20'
                  }`}>
                    {/* Content */}
                    <div className="text-center">
                      {/* Name - Large and Bold */}
                      <h3 className="text-3xl font-bold text-white mb-3 font-sans bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      
                      {/* Title/Role - Smaller Font */}
                      <p className="text-lg text-gray-300 font-medium mb-6 font-sans">
                        {member.position}
                      </p>
                      
                      {/* LinkedIn Button */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Committee Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-24">
              <h2 className="text-4xl font-bold text-white mb-4 font-sans bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Student Executive Committee
              </h2>
            </div>

            {/* Student Cards - Responsive Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
              {executiveCommittee.students.map((member, index) => {
                const backgroundColors = [
                  'bg-black/20 backdrop-blur-xl border border-cyan-400/20',
                  'bg-black/20 backdrop-blur-xl border border-blue-400/20',
                  'bg-black/20 backdrop-blur-xl border border-purple-400/20',
                  'bg-black/20 backdrop-blur-xl border border-cyan-400/20',
                  'bg-black/20 backdrop-blur-xl border border-blue-400/20',
                  'bg-black/20 backdrop-blur-xl border border-purple-400/20'
                ];
                
                return (
                  <div 
                    key={index}
                    className="group relative pt-28"
                  >
                    {/* Image - Positioned to pop out from top */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="relative w-44 h-44">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl border-2 border-cyan-400/30"
                        />
                      </div>
                    </div>
                    
                    {/* Card Container - Dark theme */}
                    <div className={`rounded-3xl p-4 pt-20 pb-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${backgroundColors[index % backgroundColors.length]}`}>
                      {/* Content */}
                      <div className="text-center">
                        {/* Name - Large and Bold */}
                        <h3 className="text-xl font-bold text-white mb-2 font-sans bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {member.name}
                        </h3>
                        
                        {/* Title/Role - Smaller Font */}
                        <p className="text-sm text-gray-300 font-medium mb-4 font-sans">
                          {member.position}
                        </p>
                        
                        {/* LinkedIn Button */}
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  )
}
