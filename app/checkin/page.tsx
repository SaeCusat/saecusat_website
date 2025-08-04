"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, ExternalLink } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function CheckinPage() {
  const handleCheckin = () => {
    // This will redirect to the actual attendance system when it's built
    alert("Redirecting to attendance system... (To be implemented)")
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
        <section className="min-h-screen flex items-center justify-center relative">
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
                <div className="text-sm text-gray-300 font-medium mb-6 tracking-[0.3em] uppercase">
                  Lab Facility
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                  Check-in
                </h1>
              </div>
            </div>

            {/* Clean CTA Button with glassmorphic design */}
            <button
              onClick={() => document.querySelector('#checkin-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 hover:border-white/30"
            >
              <CheckCircle className="w-5 h-5 mr-2 inline" />
              Access Lab System
            </button>
          </div>
        </section>

      {/* Check-in Section with glassmorphism */}
      <section id="checkin-section" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Check-in Card with glassmorphism */}
            <div className="mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce-slow hover:animate-pulse">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up animation-delay-400">Lab Attendance System</h2>
                <p className="text-lg animate-fade-in-up animation-delay-500 text-gray-300 mb-8">
                  Click the button below to access the attendance marking system for SAE lab facilities.
                </p>
                <button
                  className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30"
                  onClick={handleCheckin}
                >
                  <CheckCircle className="w-5 h-5 mr-2 inline" />
                  Check-in to Lab
                  <ExternalLink className="w-4 h-4 ml-2 inline" />
                </button>
                <p className="text-sm text-gray-400 mt-4 animate-fade-in-up animation-delay-700">This will redirect you to the attendance marking system</p>
              </div>
            </div>

            {/* Lab Information with glassmorphism */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg animate-slide-in-left animation-delay-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                <div className="mb-4">
                  <h3 className="flex items-center text-white text-xl font-bold animate-fade-in-up animation-delay-900">
                    <Clock className="w-5 h-5 mr-2 animate-spin-slow text-blue-400" />
                    Lab Hours
                  </h3>
                </div>
                <div className="animate-fade-in-up animation-delay-1000">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-300">Daily Hours:</span>
                      <span className="font-semibold text-white">6:00 AM - 6:00 PM</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-3">
                      <p>* Extensions beyond 6:00 PM require prior approval</p>
                      <p>* Open 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg animate-slide-in-right animation-delay-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                <div className="mb-4">
                  <h3 className="flex items-center text-white text-xl font-bold animate-fade-in-up animation-delay-900">
                    <MapPin className="w-5 h-5 mr-2 animate-bounce-slow text-purple-400" />
                    Lab Location
                  </h3>
                </div>
                <div className="animate-fade-in-up animation-delay-1000">
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>SAE Workshop</p>
                    <p>Mechanical Engineering Department</p>
                    <p>CUSAT Campus, Kochi</p>
                    <p className="text-gray-400">Building B, Ground Floor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guidelines with glassmorphism */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg animate-scale-in animation-delay-1100 hover:shadow-2xl transition-all duration-500 hover:bg-white/15">
              <div className="mb-6 animate-fade-in-up animation-delay-1200">
                <h3 className="text-white text-2xl font-bold flex items-center">
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
