"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/Navigation"
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Users,
  Trophy,
  Camera,
  BookOpen,
  GraduationCap,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useEffect, useState } from "react"

export default function HomePage() {
  const aboutRef = useScrollAnimation()
  const achievementsRef = useScrollAnimation()
  const eventsRef = useScrollAnimation()
  const contactRef = useScrollAnimation()

  const [showSplash, setShowSplash] = useState(true)
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false)

  useEffect(() => {
    // Simplified and faster splash screen
    const timer = setTimeout(() => {
      setSplashAnimationComplete(true)
      setTimeout(() => {
        setShowSplash(false)
      }, 300) // Reduced fade out time
    }, 1500) // Reduced total splash duration from 3000ms to 1500ms

    return () => clearTimeout(timer)
  }, [])

  const achievements = [
    {
      title: "Formula SAE Competition 2024",
      description:
        "Secured 3rd position in the national Formula SAE competition with our innovative electric vehicle design.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 2024",
    },
    {
      title: "Baja SAE India 2023",
      description: "Won the Best Design Award for our all-terrain vehicle at the prestigious Baja SAE competition.",
      image: "/placeholder.svg?height=200&width=300",
      date: "January 2023",
    },
    {
      title: "Efficycle Competition",
      description: "First place in the fuel efficiency challenge with our hybrid prototype vehicle.",
      image: "/placeholder.svg?height=200&width=300",
      date: "September 2023",
    },
  ]

  const events = [
    {
      id: 1,
      title: "Annual Tech Fest 2024",
      date: "2024-03-15",
      type: "upcoming",
      description:
        "Join us for our biggest technical event of the year featuring workshops, competitions, and exhibitions.",
    },
    {
      id: 2,
      title: "Formula SAE Workshop Series",
      date: "2024-02-20",
      type: "upcoming",
      description: "Comprehensive workshop series covering vehicle dynamics, engine design, and aerodynamics.",
    },
    {
      id: 3,
      title: "Industry Expert Lecture",
      date: "2024-01-10",
      type: "past",
      description: "Guest lecture by automotive industry experts on future trends in electric vehicles.",
    },
    {
      id: 4,
      title: "Baja SAE Preparation Camp",
      date: "2023-12-05",
      type: "past",
      description: "Intensive preparation camp for the upcoming Baja SAE competition.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Simplified Splash Screen */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${splashAnimationComplete ? "opacity-0" : "opacity-100"}`}
        >
          {/* Animated Gradient & Particles Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 matrix-background opacity-40 pointer-events-none" />
            <div className="absolute inset-0 animated-dots opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a102a] via-[#101a3a] to-[#1a2350] animate-gradient-move opacity-90 pointer-events-none" />
          </div>

          {/* Splash Content */}
          <div className="relative text-center z-10">
            {/* Logo with enhanced zoom-in animation */}
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl animate-logo-zoom-in">
                <Image
                  src="/Logo/sae_logo.png"
                  alt="SAE CUSAT Logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Improved Text Animation */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white animate-text-reveal">SAE CUSAT</h1>
              <p className="text-lg text-blue-200 animate-text-reveal animation-delay-200">
                Society of Automotive Engineers
              </p>
              <div className="flex items-center justify-center mt-4 animate-text-reveal animation-delay-400">
                <div className="w-12 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Simple loading indicator */}
            <div className="mt-8 animate-fade-in-up animation-delay-600">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`transition-opacity duration-300 ${showSplash ? "opacity-0" : "opacity-100"}`}>
        <div className="min-h-screen bg-white relative overflow-x-hidden">
          {/* Enhanced Matrix Background */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 matrix-background opacity-[0.03]"></div>
            <div className="absolute inset-0 animated-dots opacity-[0.02]"></div>
          </div>

          {/* Navigation */}
          <Navigation currentPage="home" onSectionScroll={scrollToSection} />

          {/* Main page content that can be blurred */}
          <div id="main-content">
            {/* Floating SAE Academy Button */}
            <div className="fixed bottom-6 right-6 z-50">
            <Link href="/academy">
              <div className="bg-gradient-to-r from-navy-900 to-blue-800 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group flex items-center px-4 sm:px-6 py-3 sm:py-4 space-x-2 sm:space-x-3 floating-button">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-navy-900" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-sm">SAE Academy</div>
                  <div className="text-xs text-blue-200">Coming Soon!</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-r from-navy-900 to-blue-800 text-white py-16 sm:py-20 lg:py-24 relative mt-20">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up font-serif tracking-wider text-center">
                  Society of Automotive Engineers
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-200 animate-fade-in-up animation-delay-200 font-sans text-center">
                  Cochin University of Science and Technology
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed animate-fade-in-up animation-delay-400 text-center px-4">
                  Driving innovation in automotive engineering through hands-on learning, competitive excellence, and
                  technical expertise.
                </p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-12 sm:py-16 bg-gray-50 relative z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div ref={aboutRef} className="scroll-animate">
                  <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">About Us</h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 px-4">
                    Welcome to SAE CUSAT, where innovation meets engineering excellence.<br></br>
We are a team of passionate students driven by a shared interest in automobiles, design, and hands-on engineering. At SAE CUSAT, we go beyond just building vehicles,we focus on creating, learning, and growing through real-world experience. As the official student chapter of the Society of Automotive Engineers at CUSAT, we bring together individuals who enjoy tackling challenges, working as a team, and constantly pushing the limits of what’s possible. If you have a passion for engineering, teamwork, and technology, you’ll feel right at home here.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[
                    { icon: Users, title: "Community", desc: "Building a strong network of automotive enthusiasts" },
                    { icon: Trophy, title: "Excellence", desc: "Striving for excellence in all our endeavors" },
                    { icon: BookOpen, title: "Learning", desc: "Continuous learning and skill development" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer p-4"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-800 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-12 sm:py-16 relative z-10">
            <div className="container mx-auto px-4">
              <div ref={achievementsRef} className="scroll-animate">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 text-center mb-8 sm:mb-12">Achievements</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 cursor-pointer group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <CardTitle className="text-base sm:text-lg text-navy-900 group-hover:text-blue-700 transition-colors duration-300">
                          {achievement.title}
                        </CardTitle>
                        <Badge variant="secondary" className="self-start sm:self-auto">
                          {achievement.date}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 text-sm sm:text-base">
                        {achievement.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/gallery">
                  <Button className="bg-navy-900 hover:bg-navy-800 hover:scale-105 transition-all duration-300">
                    <Camera className="w-4 h-4 mr-2" />
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Events Timeline */}
          <section id="events" className="py-12 sm:py-16 relative z-10">
            <div className="container mx-auto px-4">
              <div ref={eventsRef} className="scroll-animate">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 text-center mb-8 sm:mb-12">Events</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-navy-600 to-gray-400"></div>

                  <div className="space-y-8 sm:space-y-12">
                    {events.map((event, index) => (
                      <div
                        key={event.id}
                        className="relative flex items-start space-x-4 sm:space-x-8 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                              event.type === "upcoming"
                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                : "bg-gradient-to-r from-gray-400 to-gray-500"
                            } group-hover:scale-125 transition-transform duration-300`}
                          ></div>
                        </div>

                        <Card className="flex-1 hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-[1.02] group-hover:translate-x-2">
                          <CardHeader className="p-4 sm:pb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                              <CardTitle className="text-lg sm:text-xl text-navy-900 group-hover:text-blue-700 transition-colors duration-300">
                                {event.title}
                              </CardTitle>
                              <Badge
                                variant={event.type === "upcoming" ? "default" : "secondary"}
                                className={`self-start sm:self-auto ${event.type === "upcoming" ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                              >
                                {event.type === "upcoming" ? "Upcoming" : "Past"}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                              <Calendar className="w-4 h-4 mr-2" />
                              {new Date(event.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                              {event.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 sm:py-16 bg-navy-900 text-white relative z-10">
            <div className="container mx-auto px-4">
              <div ref={contactRef} className="scroll-animate">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 animate-text-reveal">
                  Contact Us
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                  {/* Left: Address & Email */}
                  <div className="space-y-8 text-left">
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-center gap-3 animate-fade-in-left">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-blue-200" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                        <h4 className="font-semibold text-base sm:text-lg mb-0.5">Address</h4>
                        <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
                          Cochin University of Science and Technology<br />Kochi, Kerala, India
                        </p>
                        </div>
                      </div>
                      {/* Email */}
                      <div className="flex items-center gap-3 animate-fade-in-left animation-delay-200">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-200" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-semibold text-base sm:text-lg mb-0.5">Email</h4>
                          <a href="mailto:sae.official@cusat.ac.in" className="text-blue-200 text-sm sm:text-base hover:underline">sae.official@cusat.ac.in</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right: Instagram & LinkedIn */}
                  <div className="space-y-8 text-left md:text-right flex flex-col items-start md:items-end justify-center h-full">
                    <div className="space-y-6 w-full">
                      {/* Instagram */}
                      <div className="flex items-center gap-4 animate-fade-in-left animation-delay-400 justify-start md:justify-end">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-base sm:text-lg mb-0.5">Instagram</h4>
                          <a href="https://instagram.com/saecusat" target="_blank" rel="noopener noreferrer" className="text-blue-200 text-sm sm:text-base hover:underline">@saecusat</a>
                        </div>
                      </div>
                      {/* LinkedIn */}
                      <div className="flex items-center gap-4 animate-fade-in-left animation-delay-600 justify-start md:justify-end">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-base sm:text-lg mb-0.5">LinkedIn</h4>
                          <a href="https://www.linkedin.com/company/society-of-automotive-engineers/" target="_blank" rel="noopener noreferrer" className="text-blue-200 text-sm sm:text-base hover:underline">SAE CUSAT</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-6 sm:py-8 relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
              <div className="flex space-x-6 mb-3">
                <a href="https://instagram.com/saecusat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com/company/saecusat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <p className="text-sm sm:text-base">&copy; 2025 SAE CUSAT. All rights reserved.</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Society of Automotive Engineers - Cochin University of Science and Technology
              </p>
            </div>
          </footer>
          </div>
        </div>
      </div>
    </>
  )
}
