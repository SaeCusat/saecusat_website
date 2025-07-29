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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Navigation */}
      <Navigation currentPage="checkin" />

      <div id="main-content" className="relative z-10">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-blue-800 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Lab Facility Check-in</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Mark your attendance for using SAE lab facilities and equipment.
          </p>
        </div>
      </section>

      {/* Check-in Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Check-in Section */}
            <Card className="mb-8 backdrop-blur-sm bg-white/90 shadow-lg border-0 animate-fade-in-up animation-delay-300 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce-slow hover:animate-pulse">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-navy-900 animate-fade-in-up animation-delay-400">Lab Attendance System</CardTitle>
                <CardDescription className="text-lg animate-fade-in-up animation-delay-500">
                  Click the button below to access the attendance marking system for SAE lab facilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-pulse-slow"
                  onClick={handleCheckin}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Check-in to Lab
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-sm text-gray-500 mt-4 animate-fade-in-up animation-delay-700">This will redirect you to the attendance marking system</p>
              </CardContent>
            </Card>

            {/* Lab Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-0 animate-slide-in-left animation-delay-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900 animate-fade-in-up animation-delay-900">
                    <Clock className="w-5 h-5 mr-2 animate-spin-slow" />
                    Lab Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="animate-fade-in-up animation-delay-1000">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Daily Hours:</span>
                      <span className="font-semibold text-navy-900">6:00 AM - 6:00 PM</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">
                      <p>* Extensions beyond 6:00 PM require prior approval</p>
                      <p>* Open 7 days a week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-0 animate-slide-in-right animation-delay-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900 animate-fade-in-up animation-delay-900">
                    <MapPin className="w-5 h-5 mr-2 animate-bounce-slow" />
                    Lab Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="animate-fade-in-up animation-delay-1000">
                  <div className="space-y-2 text-sm">
                    <p>SAE Workshop</p>
                    <p>Mechanical Engineering Department</p>
                    <p>CUSAT Campus, Kochi</p>
                    <p className="text-gray-500">Building B, Ground Floor</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines */}
            <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-2 border-blue-500 animate-scale-in animation-delay-1100 hover:shadow-2xl transition-all duration-500">
              <CardHeader className="bg-blue-50/50 relative z-10 animate-fade-in-up animation-delay-1200">
                <CardTitle className="text-navy-900 flex items-center">
                  <span className="text-blue-600 mr-2"></span>
                  Lab Usage Guidelines
                  <span className="text-blue-600 ml-2"></span>
                </CardTitle>
                <CardDescription className="text-blue-700 font-medium animate-fade-in-up animation-delay-1300">
                  Please read and follow all safety guidelines below
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-blue-50/20 relative z-10 animate-fade-in-up animation-delay-1400">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Wear safety goggles, gloves, face shields when using machines; welding helmets must be worn for welding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Fully covered clothing and safety shoes are mandatory for lab entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Entry is only permitted with a valid ID card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">A core team member must be present during all manufacturing activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Sign in when entering and sign out before exiting the lab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Ensure all doors and entry points are securely closed after use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Lab is open from 6:00 AM to 6:00 PM; extensions require prior approval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Report all injuries immediately and submit an incident report</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Keep the lab clean, organized, and clutter-free at all times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Return all tools to their default racks or positions after use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Dispose of waste properly using designated bins only</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Permission is required to use the lab for non-SAE projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 font-bold mr-2 mt-0.5">•</span>
                    <span className="font-medium text-gray-800">Follow safety protocols and behave responsibly at all times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
    </>
  )
}
