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
        image: "/committee/Harinadh.jpg",
        linkedin: "https://www.linkedin.com/in/harinadh-sadish-a173b6366"
      },
      { 
        name: "Alakanandha C B", 
        position: "Vice President", 
        image: "/committee/Alakanandha cb.jpg",
        linkedin: "https://www.linkedin.com/in/alakanandha-c-b-610641291"
      },
      { 
        name: "Indulekha T R", 
        position: "Secretary", 
        image: "/committee/INDULEKHA T R.JPG",
        linkedin: "https://www.linkedin.com/in/indulekha-t-r-945183227"
      },
      { 
        name: "Neeraj V", 
        position: "Treasurer", 
        image: "/placeholder.svg?height=200&width=200",
        linkedin: "https://www.linkedin.com/in/neerajv777"
      },
      { 
        name: "Muhammad Aslam", 
        position: "Technical Head", 
        image: "/committee/Aslam.jpg",
        linkedin: "https://www.linkedin.com/in/muhammad-aslam"
      },
      { 
        name: "Prajith A K", 
        position: "Joint Secretary", 
        image: "/committee/Prajith AK.jpg",
        linkedin: "https://linkedin.com/in/ananyavarma"
      }
    ],
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* Grid Effect and Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Optional: Soft animated blobs for depth, can keep or remove as desired */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Navigation currentPage="committee" />
      
      <div id="main-content" className="pt-20 relative z-10">
        {/* Futuristic Header Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Glowing Title */}
              <div className="relative mb-8">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Executive Committee
                </h1>
                <div className="absolute inset-0 text-5xl lg:text-7xl font-bold text-blue-400/10 blur-lg">
                  Executive Committee
                </div>
              </div>
              
              {/* Subtitle with Glassmorphism - REMOVED */}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 font-sans">
                Faculty Advisors
              </h2>
            </div>

            {/* Faculty Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {executiveCommittee.faculty.map((member, index) => (
                <div 
                  key={index}
                  className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-slate-100 to-blue-100' 
                      : 'bg-gradient-to-br from-gray-100 to-slate-200'
                  }`}
                >
                  {/* Content */}
                  <div className="text-center">
                    {/* Circular Image */}
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Name - Large and Bold */}
                    <h3 className="text-3xl font-bold text-slate-800 mb-3 font-sans">
                      {member.name}
                    </h3>
                    
                    {/* Title/Role - Smaller Font */}
                    <p className="text-lg text-slate-600 font-medium mb-6 font-sans">
                      {member.position}
                    </p>
                    
                    {/* LinkedIn Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Committee Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-800 mb-4 font-sans">
                Student Executive Committee
              </h2>
            </div>

            {/* Student Cards - Responsive Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {executiveCommittee.students.map((member, index) => {
                const backgroundColors = [
                  'bg-gradient-to-br from-slate-100 to-slate-200',
                  'bg-gradient-to-br from-blue-100 to-blue-200',
                  'bg-gradient-to-br from-gray-100 to-gray-200',
                  'bg-gradient-to-br from-blue-50 to-blue-100',
                  'bg-gradient-to-br from-slate-200 to-gray-100',
                  'bg-gradient-to-br from-blue-200 to-slate-100'
                ];
                
                return (
                  <div 
                    key={index}
                    className={`group relative rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${backgroundColors[index % backgroundColors.length]}`}
                  >
                    {/* Content */}
                    <div className="text-center">
                      {/* Circular Image */}
                      <div className="relative w-36 h-36 mx-auto mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      
                      {/* Name - Large and Bold */}
                      <h3 className="text-xl font-bold text-slate-800 mb-2 font-sans">
                        {member.name}
                      </h3>
                      
                      {/* Title/Role - Smaller Font */}
                      <p className="text-sm text-slate-600 font-medium mb-4 font-sans">
                        {member.position}
                      </p>
                      
                      {/* LinkedIn Button */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
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
