"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import DotGrid from "@/components/DotGrid"
import {
  MapPin,
  Phone,
  Mail,
  Users,
  Trophy,
  BookOpen,
  GraduationCap,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useAdvancedParallax } from "@/hooks/use-parallax"
import { useEffect, useState } from "react"
import LightRays from "@/components/LightRays"
import { Montserrat, Inter } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
})

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const aboutRef = useScrollAnimation()
  const contactRef = useScrollAnimation()
  
  // Parallax effects
  const { scrollY, isClient, getParallaxStyle, getOpacityFade, getScaleFade } = useAdvancedParallax()

  const [showSplash, setShowSplash] = useState(true)
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false)
  const [preloaderFadeStart, setPreloaderFadeStart] = useState(false)
  const [heroContentReady, setHeroContentReady] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Faster smooth transition sequence with better performance
    const logoZoomTimer = setTimeout(() => {
      setLogoAnimationComplete(true)
    }, 2000) // Logo finishes smooth positioning - faster

    const preloaderFadeTimer = setTimeout(() => {
      setPreloaderFadeStart(true)
    }, 2100) // Start fading preloader overlay - faster

    const heroContentTimer = setTimeout(() => {
      setHeroContentReady(true)
    }, 2200) // Hero content starts appearing - faster

    const splashHideTimer = setTimeout(() => {
      setShowSplash(false)
    }, 3600) // Complete removal of preloader - faster

    return () => {
      clearTimeout(logoZoomTimer)
      clearTimeout(preloaderFadeTimer)
      clearTimeout(heroContentTimer)
      clearTimeout(splashHideTimer)
    }
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.warn('Scroll to section error:', error)
    }
  }

  return (
    /* Main Content Background - Always rendered to prevent white flash */
    <div className="min-h-screen bg-gradient-to-br from-[#020208] via-[#040408] to-[#060608] relative overflow-x-hidden">
      {/* Enhanced Matrix Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 matrix-background opacity-[0.03]"></div>
        <div className="absolute inset-0 animated-dots opacity-[0.02]"></div>
      </div>

      {/* Navigation */}
      <Navigation currentPage="home" onSectionScroll={scrollToSection} />

        {/* Seamless Preloader Overlay - Hardware Accelerated */}
        {showSplash && (
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#020208] via-[#040408] to-[#060608] ${
              preloaderFadeStart ? "animate-preloader-fade-seamless" : ""
            }`}
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            {/* Logo with Perfect Zoom-to-Position Animation - Match Hero Position */}
            <div className="relative z-10 w-full h-full">
              {/* Match hero section positioning exactly */}
              <div className="absolute inset-0 flex items-center justify-center -mt-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                  <div className="max-w-2xl mx-auto">
                    <div className="preloader-logo-container" style={{ transform: 'translateZ(0)' }}>
                      {/* Match exact hero section sizing: outer container */}
                      <div className="w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto flex items-center justify-center animate-preloader-logo-zoom">
                        {/* Match exact hero section sizing: inner image container */}
                        <div className="w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] relative">
                          <Image
                            src="/Logo/sae_logo_white.png"
                            alt="SAE CUSAT Logo"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main page content with smooth transition */}
        <div 
          id="main-content"
          className="transition-all duration-1000"
        >
          {/* Hero Section - Full Screen */}
          <section className="hero-seamless-bg text-white relative overflow-hidden" style={{ height: '100vh', minHeight: '100vh', marginTop: '0' }}>
            {/* Light Rays Background Effect with Parallax */}
            <div 
              className={`absolute inset-0 w-full h-full animate-light-rays-fade-in opacity-0 hero-parallax-bg parallax-element`}
              style={isClient ? getParallaxStyle(0.2, 'down') : {}}
            >
              <LightRays
                raysOrigin="top-center"
                raysColor="#00d4ff"
                raysSpeed={1.2}
                lightSpread={0.8}
                rayLength={2.2}
                followMouse={true}
                mouseInfluence={0.15}
                noiseAmount={0.08}
                distortion={0.03}
                fadeDistance={0.85}
                saturation={1.3}
                className="light-rays-container"
              />
            </div>
            
            {/* Subtle Gradient Overlay for better text readability - Reduced on Mobile with Parallax */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#020208]/60 via-transparent to-[#020208]/40 md:from-[#020208]/60 md:via-transparent md:to-[#020208]/40 from-[#020208]/30 via-transparent to-[#020208]/20 z-[1] hero-parallax-bg parallax-element"
              style={isClient ? getParallaxStyle(0.1) : {}}
            ></div>
            
            {/* Content - Centered in Optical Center */}
            <div className="absolute inset-0 flex items-center justify-center -mt-20">
              <div className="container mx-auto px-4 text-center relative z-10">
                {/* Logo and Text Container - Centered */}
                <div className="max-w-2xl mx-auto">
                  {/* SAE Logo - Static in Hero Section with Enhanced Parallax and Fade */}
                  <div 
                    className={`w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto flex items-center justify-center hero-parallax-logo parallax-element hero-depth-layer-3 ${!showSplash ? 'hover:scale-105 transition-all duration-300' : ''}`}
                    style={isClient ? {
                      ...getParallaxStyle(0.2),
                      opacity: getOpacityFade(0, 500),
                      filter: `blur(${Math.min(scrollY * 0.008, 2)}px)`,
                      transform: `${getParallaxStyle(0.2).transform} scale(${getScaleFade(0, 400, 1.08)})`
                    } : {}}
                  >
                    <div className="w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] relative">
                      <Image
                        src="/Logo/sae_logo_white.png"
                        alt="SAE CUSAT Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Organization Name and University - Enhanced Text with Strong Parallax */}
                  <div 
                    className={`space-y-2 ${montserrat.className} animate-hero-text-slide-in opacity-0 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 hero-parallax-text parallax-element hero-depth-layer-2`}
                    style={isClient ? {
                      ...getParallaxStyle(0.6),
                      opacity: getOpacityFade(0, 600),
                      filter: `blur(${Math.min(scrollY * 0.005, 1.5)}px)`,
                      transform: `${getParallaxStyle(0.6).transform} scale(${getScaleFade(50, 450, 1.05)})`
                    } : {}}
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-tight hero-title-animated parallax-text-zoom">
                      Society of Automotive Engineers
                    </h1>
                    <h2 
                      className="text-lg md:text-xl lg:text-2xl font-medium text-white/90 tracking-wide leading-relaxed hero-subtitle-animated parallax-text-blur"
                      style={isClient ? {
                        transform: `translateY(${scrollY * 0.4}px) scale(${getScaleFade(100, 500, 1.03)})`,
                        filter: `blur(${Math.min(scrollY * 0.003, 1)}px)`
                      } : {}}
                    >
                      Cochin University of Science and Technology
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section - Glassmorphic Cards Design */}
          <section id="about" className="about-us-matrix glassmorphic-section relative z-20">
            <div className="container mx-auto px-4">
              <div ref={aboutRef} className="opacity-100">
                <div className="text-center mb-8">
                  <h2 className={`section-heading ${montserrat.className}`}>
                    About Us
                  </h2>
                  <p className={`text-lg sm:text-xl ${montserrat.className} text-center`} style={{ color: 'var(--light-text)' }}>
                    Welcome to SAE CUSAT, where innovation meets engineering excellence.
                  </p>
                </div>
                
                <div className="cards-container">
                  {/* Card 1: Our Mission */}
                  <div className="glass-card">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <circle cx="12" cy="12" r="3" fill="currentColor"/>
                      </svg>
                    </div>
                    <h3 className={montserrat.className}>Our Mission</h3>
                    <p className={montserrat.className}>
                      We are a passionate team of student engineers dedicated to real-world application and hands-on discovery. Our primary focus is to foster a dynamic environment for creating, learning, and growing through practical projects and challenges.
                    </p>
                  </div>

                  {/* Card 2: Our Approach */}
                  <div className="glass-card">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M8 12h8M12 8v8M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                        <circle cx="9" cy="9" r="2" fill="currentColor"/>
                        <circle cx="15" cy="9" r="2" fill="currentColor"/>
                        <circle cx="9" cy="15" r="2" fill="currentColor"/>
                        <circle cx="15" cy="15" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <h3 className={montserrat.className}>Our Approach</h3>
                    <p className={montserrat.className}>
                      As the official student chapter at CUSAT, our community is built on teamwork and collaborative learning. We bring together individuals who thrive on innovative thinking, tackling complex challenges, and pushing the limits of what is possible.
                    </p>
                  </div>

                  {/* Card 3: Hands-On Engineering */}
                  <div className="glass-card">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"/>
                      </svg>
                    </div>
                    <h3 className={montserrat.className}>Hands-On Engineering</h3>
                    <p className={montserrat.className}>
                      We provide immersive opportunities across the full spectrum of automotive engineering. From initial design and manufacturing to rigorous testing and track-side competition, we empower members to apply their skills in a practical environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Core Values Section - Glassmorphic Cards Design */}
          <section className="glassmorphic-section relative z-10">
            <div className="container mx-auto px-4">
              <h3 className={`section-heading ${montserrat.className}`}>
                Our Core Values
              </h3>
              
              <div className="cards-container">
                {[
                  { 
                    icon: Users, 
                    title: "Community",
                    description: "United by passion, driven by teamwork. We foster a collaborative environment where we achieve more, together."
                  },
                  { 
                    icon: Trophy, 
                    title: "Excellence",
                    description: "A relentless commitment to precision, performance, and engineering innovation. We don't just meet standards; we aim to set them."
                  },
                  { 
                    icon: BookOpen, 
                    title: "Learning",
                    description: "Bridging the gap between theory and practice. We believe true knowledge is forged in the workshop and proven on the track."
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-card group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="card-icon">
                      <item.icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className={`${montserrat.className}`}>
                      {item.title}
                    </h3>
                    <p className={montserrat.className}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SAE Academy Section */}
          <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative z-10 overflow-hidden">
            {/* Interactive Dot Grid Background */}
            <div className="absolute inset-0 z-0">
              <DotGrid
                dotSize={6}
                gap={25}
                baseColor="#1e293b"
                activeColor="#4A90E2"
                proximity={120}
                shockRadius={180}
                shockStrength={3}
                resistance={500}
                returnDuration={1.8}
                speedTrigger={80}
                className="opacity-60"
              />
            </div>
            
            {/* Glassmorphic background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-blue-800/5 to-blue-900/10 z-5"></div>
            <div className="absolute inset-0 backdrop-blur-[0.5px] z-5"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 animate-fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                      SAE Academy
                    </h2>
                    <div className="glassmorphic-content-card p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/5 via-blue-500/5 to-white/5 border border-white/10">
                      <p className="text-lg text-gray-200 leading-relaxed">
                        Learn from our experienced student members who share their knowledge and expertise. 
                        Our peer-to-peer learning approach connects you with skilled students who mentor and guide newcomers through hands-on projects.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Student mentors and guides",
                        "Hands-on project experience", 
                        "Certificate programs"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 animate-fade-in-up glassmorphic-feature-item p-3 rounded-xl backdrop-blur-sm bg-gradient-to-r from-white/5 to-blue-500/5 border border-white/5" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Visual */}
                  <div className="relative animate-slide-in-right animation-delay-500">
                    <div className="glassmorphic-academy-card bg-gradient-to-br from-gray-800/30 via-blue-800/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20">
                      {/* Gradient overlay for extra depth */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-white/5 rounded-3xl"></div>
                      
                      <div className="space-y-6 relative z-10">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow shadow-lg backdrop-blur-sm border border-white/20">
                            <GraduationCap className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Learn. Build. Innovate.</h3>
                          <p className="text-gray-200">Student-led learning community</p>
                        </div>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          {[
                            { icon: "👥", title: "Peer-Led", desc: "Expert students" },
                            { icon: "🔧", title: "Hands-On", desc: "Real projects" },
                            { icon: "📜", title: "Certified", desc: "Recognized credentials" },
                            { icon: "🚗", title: "Automotive", desc: "Specialized focus" }
                          ].map((item, index) => (
                            <div key={index} className="glassmorphic-feature-box bg-gradient-to-br from-white/10 via-blue-500/5 to-white/5 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-gradient-to-br hover:from-white/15 hover:via-blue-500/8 hover:to-white/8 transition-all duration-300 border border-white/10 hover:border-white/20" style={{ animationDelay: `${(index + 3) * 150}ms` }}>
                              <div className="text-2xl mb-2">{item.icon}</div>
                              <div className="text-white font-semibold text-sm">{item.title}</div>
                              <div className="text-gray-200 text-xs">{item.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 sm:py-16 bg-slate-900 text-white relative z-10">
            <div className="container mx-auto px-4">
              <div ref={contactRef} className="opacity-100">
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
          <footer className="bg-black text-white py-6 sm:py-8 relative z-10">
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
  )
}
