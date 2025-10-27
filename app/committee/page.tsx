"use client"

import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

interface CommitteeMember {
  name: string
  role: string
  image: string
  linkedin: string
  isFaculty?: boolean
}

const CommitteeCard = ({ member, index }: { member: CommitteeMember; index: number }) => {
  return (
    <div 
      className="group rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up flex flex-col border border-blue-500/40 hover:border-blue-400/60 relative"
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 25px 50px rgba(59, 130, 246, 0.1)'
      }}
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-blue-300/5 to-transparent pointer-events-none rounded-2xl z-20"></div>      
      {/* Image Container - Fixed Height - Same ratio across all screens */}
      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-slate-850 via-blue-850 to-slate-950 flex-shrink-0">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/400x510/1e3a5f/f8fafc?text=${encodeURIComponent(member.name)}`
          }}
        />
      </div>

      {/* Text Content Box - Below Image */}
      <div className="bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 p-2 sm:p-3 md:p-4 lg:p-5 flex-grow flex flex-col justify-center items-center text-center border-t-2 border-blue-500/30 transition-all duration-300 group-hover:from-slate-700 group-hover:via-slate-800 group-hover:to-slate-850">
        <div className="w-full">
          <h2 className="text-xs sm:text-sm md:text-base lg:text-base font-bold text-white line-clamp-2 group-hover:text-blue-300 transition-colors duration-300 mb-1">
            {member.name}
          </h2>
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-blue-300 font-semibold line-clamp-1 group-hover:text-blue-200 transition-colors duration-300 mb-2">
            {member.role}
          </p>
          {/* LinkedIn Icon - Round and Below */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-blue-600/60 to-blue-700/60 hover:from-blue-500 hover:to-blue-600 text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125 shadow-lg"
            title={`${member.name}'s LinkedIn Profile`}
          >
            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CommitteePage() {
  const facultyAdvisors: CommitteeMember[] = [
    {
      name: "Dr Biju N",
      role: "Faculty Advisor",
      image: "/committee/Biju_sir.png",
      linkedin: "https://www.linkedin.com/in/biju-n-4287a9a",
      isFaculty: true
    },
    {
      name: "Dr Gireesh Kumaran Thampi",
      role: "Faculty Advisor",
      image: "/committee/Gireesh_sir.png",
      linkedin: "https://www.linkedin.com/in/gireesh-kumaran-thampi-b-s-6711253b",
      isFaculty: true
    },
    {
      name: "Dr Akhil S Karun",
      role: "Faculty Advisor",
      image: "/committee/akhil_sir.png",
      linkedin: "https://www.linkedin.com/in/dr-akhil-s-karun-mie-31593328",
      isFaculty: true
    }
  ]

  const studentCommittee: CommitteeMember[] = [
    {
      name: "Harinadh Sadish",
      role: "President",
      image: "/committee/hari.png",
      linkedin: "https://www.linkedin.com/in/harinadh-sadish-a173b6366"
    },
    {
      name: "Alakanandha C B",
      role: "Vice President",
      image: "/committee/Alakanandha cb.png",
      linkedin: "https://www.linkedin.com/in/alakanandha-c-b-610641291"
    },
    {
      name: "Indulekha T R",
      role: "Secretary",
      image: "/committee/INDULEKHA T R.png",
      linkedin: "https://www.linkedin.com/in/indulekha-t-r-945183227"
    },
    {
      name: "Neeraj V",
      role: "Treasurer",
      image: "/committee/neeraj.png",
      linkedin: "https://www.linkedin.com/in/neerajv777"
    },
    {
      name: "Muhammad Aslam",
      role: "Technical Head",
      image: "/committee/Aslam.png",
      linkedin: "https://www.linkedin.com/in/muhammad-aslam-a1484a336"
    },
    {
      name: "Prajith A K",
      role: "Joint Secretary",
      image: "/committee/prajith.png",
      linkedin: "https://www.linkedin.com/in/prajith-a-k-3b4b25210"
    }
  ]

  return (
    <>
      <Navigation currentPage="committee" />
      
      <main className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#0a0e1a] to-[#020614] relative">
        {/* Dot Grid Background */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-75"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(96, 165, 250, 0.3) 1px, transparent 1px),
              radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 100px 100px',
            backgroundPosition: '0 0, 25px 25px'
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20 sm:mb-28 pt-8 sm:pt-12 animate-fade-in-down">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent mt-2 tracking-tight drop-shadow-lg animate-fade-in-up">
              Executive Committee
            </h1>
          </div>

          {/* Faculty Advisors Section */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Faculty Advisors</h2>
          </div>

          {/* Faculty Grid (1-col on mobile, 2-col on tablet, 3-col on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto mb-24 sm:mb-32">
            {facultyAdvisors.map((member, index) => (
              <CommitteeCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Student Committee Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Student Executive Committee</h2>
          </div>

          {/* Student Grid (1-col on mobile, 2-col on tablet, 3-col on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
            {studentCommittee.map((member, index) => (
              <CommitteeCard key={member.name} member={member} index={index + facultyAdvisors.length} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
