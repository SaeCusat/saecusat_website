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
      className="group relative rounded-xl overflow-hidden h-80 sm:h-80 md:h-80 lg:h-96 shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up" 
      style={{
        background: 'linear-gradient(135deg, #0a0f2c 0%, #0f1f4a 50%, #1a3a6a 100%), radial-gradient(ellipse at center, transparent 20%, rgba(5, 15, 40, 0.95) 100%)', 
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 -10px 30px rgba(0, 0, 0, 0.5)',
        animationDelay: `${index * 100}ms`
      }}
    >      {/* Background Image */}
      <img 
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/400x510/475569/f8fafc?text=${encodeURIComponent(member.name)}`
        }}
      />

      {/* Premium Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/98 group-hover:via-black/50"></div>

      {/* Text Content - Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-6 lg:p-8">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-1 transition-transform duration-300 group-hover:translate-y-0 translate-y-1 line-clamp-2">
          {member.name}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3">
          <p className="text-sm sm:text-base md:text-base lg:text-base text-gray-200 font-medium transition-transform duration-300 group-hover:translate-y-0 translate-y-1 line-clamp-1">
            {member.role}
          </p>
          {/* LinkedIn Icon */}
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 hover:text-white transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            title={`${member.name}'s LinkedIn Profile`}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
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
      name: "Dr Gireesh Kumaran",
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
      image: "/committee/aslam (2).png",
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
          className="fixed inset-0 pointer-events-none opacity-50"
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

          {/* Faculty Grid (2-col on tablet, 3-col on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-24 sm:mb-32">
            {facultyAdvisors.map((member, index) => (
              <CommitteeCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Student Committee Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Student Executive Committee</h2>
          </div>

          {/* Student Grid (2-col on tablet, 3-col on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
