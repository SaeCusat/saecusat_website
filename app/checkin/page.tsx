"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { CheckCircle, ExternalLink } from "lucide-react"

export default function CheckinPage() {
  const handleCheckin = () => {
    window.location.href = 'https://saelab.cusat.co.in/'
  }

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1.0s;
        }
        
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        
        .animation-delay-1300 {
          animation-delay: 1.3s;
        }
        
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-1600 {
          animation-delay: 1.6s;
        }
        
        .animation-delay-1700 {
          animation-delay: 1.7s;
        }
        
        .animation-delay-1800 {
          animation-delay: 1.8s;
        }
        
        .animation-delay-1900 {
          animation-delay: 1.9s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2.0s;
        }
        
        .animation-delay-2100 {
          animation-delay: 2.1s;
        }
        
        .animation-delay-2200 {
          animation-delay: 2.2s;
        }
        
        .animation-delay-2300 {
          animation-delay: 2.3s;
        }
        
        .animation-delay-2400 {
          animation-delay: 2.4s;
        }
        
        .animation-delay-2500 {
          animation-delay: 2.5s;
        }
        
        .animation-delay-2600 {
          animation-delay: 2.6s;
        }
        
        .animation-delay-2700 {
          animation-delay: 2.7s;
        }
      `}</style>
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Enhanced Dark Background with dot particles */}
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
            { left: 35, top: 35, delay: 1, duration: 10.5 },
            { left: 65, top: 50, delay: 2.5, duration: 9 },
            { left: 45, top: 70, delay: 4, duration: 11.5 },
            { left: 75, top: 35, delay: 0.5, duration: 8 },
            { left: 25, top: 60, delay: 3, duration: 12 },
            { left: 55, top: 25, delay: 1.5, duration: 9.5 }
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
      
      {/* Navigation */}
      <Navigation currentPage="checkin" />

      <div id="main-content" className="relative z-10">
        {/* Hero Section with glassmorphic header */}
        <section className="min-h-screen flex items-center justify-center relative animate-fade-in-down">
          {/* Large Background Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black text-gray-800 select-none tracking-tight">
              CHECK-IN
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10 pt-20">
            {/* Clean Main Title */}
            <div className="mb-12">
              <div className="inline-block">
                <div className="text-sm text-gray-300 font-medium mb-6 tracking-[0.3em] uppercase animate-fade-in-up">
                  SAE Lab Facility
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                  Check-in
                </h1>
              </div>
            </div>

            {/* Enhanced Check-in Button */}
            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={handleCheckin}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/30 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:border-blue-400/50 animate-fade-in-up animation-delay-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <span className="group-hover:text-blue-200 transition-colors duration-300">Check-in to Lab</span>
                  <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
              </button>

              {/* Guidelines Button */}
              <button
                onClick={() => document.querySelector('#checkin-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors duration-300 animate-fade-in-up animation-delay-600 group"
              >
                <span>View Lab Guidelines</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

      {/* Check-in Section with glassmorphism */}
      <section id="checkin-section" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Guidelines with glassmorphism */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg animate-scale-in animation-delay-1100 hover:shadow-2xl transition-all duration-500 hover:bg-white/15">
              <div className="mb-6 animate-fade-in-up animation-delay-1200 text-center">
                <h3 className="text-white text-2xl font-bold flex items-center justify-center">
                  <span className="text-blue-400 mr-2">⚠️</span>
                  Lab Usage Guidelines
                  <span className="text-purple-400 ml-2">⚠️</span>
                </h3>
                <p className="text-blue-300 font-medium mt-2 animate-fade-in-up animation-delay-1300">
                  Please read and follow all safety guidelines below
                </p>
              </div>
              <div className="animate-fade-in-up animation-delay-1400">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Wear safety goggles, gloves, face shields when using machines; welding helmets must be worn for welding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Fully covered clothing and safety shoes are mandatory for lab entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Entry is only permitted with a valid ID card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">A core team member must be present during all manufacturing activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Sign in when entering and sign out before exiting the lab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Ensure all doors and entry points are securely closed after use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Lab is open from 6:00 AM to 6:00 PM; extensions require prior approval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Report all injuries immediately and submit an incident report</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Keep the lab clean, organized, and clutter-free at all times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Return all tools to their default racks or positions after use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Dispose of waste properly using designated bins only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Permission is required to use the lab for non-SAE projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-300">Follow safety protocols and behave responsibly at all times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
    </>
  )
}
