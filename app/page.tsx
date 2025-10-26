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
  Users2,
  Wrench,
  Award,
  Gauge,
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

  // Scroll reveal animation handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
      
      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
        const windowHeight = window.innerHeight
        
        // Trigger animation when element is in viewport
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Trigger on initial load
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
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
    <>
      {/* Main Content Background - Always rendered to prevent white flash */}
      <div className="min-h-screen bg-gradient-to-br from-[#050812] via-[#0a0e1a] to-[#050812] relative overflow-x-hidden">
        {/* Enhanced Matrix Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 matrix-background opacity-[0.01]"></div>
          <div className="absolute inset-0 animated-dots opacity-[0.01]"></div>
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
              className="absolute inset-0 bg-gradient-to-b from-[#020208]/50 via-transparent to-[#020208]/30 md:from-[#020208]/40 md:via-transparent md:to-[#020208]/20 z-[1] hero-parallax-bg parallax-element"
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
                        filter: `blur(${Math.min(scrollY * 0.003, 1)}px)`,
                        WebkitTextFillColor: 'inherit',
                        WebkitBackgroundClip: 'unset'
                      } : {}}
                    >
                      Cochin University of Science and Technology
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Separator Line Below Hero */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent relative z-10"></div>

          {/* About Us Section - Glassmorphic Cards Design */}
          <section id="about" className="about-us-matrix glassmorphic-section relative z-20">
            <div className="container mx-auto px-4">
              <div ref={aboutRef} className="opacity-100">
                <div className="text-center mb-8 animate-fade-in-down">
                  <h2 className={`section-heading ${montserrat.className} scroll-reveal scroll-text-reveal`}>
                    About Us
                  </h2>
                  <p className={`text-lg sm:text-xl ${montserrat.className} text-center animate-fade-in-up animation-delay-200 scroll-reveal scroll-text-reveal`} style={{ color: 'var(--light-text)' }}>
                    Welcome to SAE CUSAT, where innovation meets engineering excellence.
                  </p>
                </div>
                
                <div className="cards-container">
                  {/* Card 1: Our Mission */}
                  <div className="glass-card scroll-reveal card-hover-zoom group">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
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
                  <div className="glass-card scroll-reveal card-hover-zoom group">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto group-hover:drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
                  <div className="glass-card scroll-reveal card-hover-zoom group">
                    <div className="card-icon">
                      <svg className="w-12 h-12 mx-auto group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
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
          {/* Our Core Values Section */}
          <section className="relative z-10 py-16 md:py-20 overflow-hidden">
            {/* Background dot pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #8892ac 0.8px, transparent 0.8px)',
                backgroundSize: '40px 40px',
                opacity: 0.25
              }}></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h3 className={`section-heading ${montserrat.className} animate-fade-in-down scroll-reveal scroll-text-reveal`}>
                Our Core Values
              </h3>
              
              <div className="cards-container animate-fade-in-up animation-delay-300">
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
                    className="glass-card group scroll-reveal card-hover-zoom"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="card-icon">
                      <item.icon className="w-12 h-12 mx-auto group-hover:drop-shadow-lg" />
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

          {/* Separator Line Above SAE Academy */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent relative z-10"></div>

          {/* SAE Academy Section */}
          <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative z-10 overflow-hidden">
            {/* Simple Dot Grid Background */}
            <div className="absolute inset-0 z-0">
              <DotGrid
                dotSize={1}
                gap={32}
                baseColor="#64748b"
                activeColor="#4A90E2"
                proximity={120}
                shockRadius={180}
                shockStrength={3}
                resistance={500}
                returnDuration={1.8}
                speedTrigger={80}
                className="opacity-40"
              />
            </div>
            
            {/* Subtle background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-blue-900/5 to-blue-950/5 z-5"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 animate-fade-in-up scroll-reveal">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent scroll-reveal scroll-text-reveal">
                      SAE Academy
                    </h2>
                    <div className="glassmorphic-content-card p-6 rounded-2xl backdrop-blur-md bg-white/8 border border-white/10 scroll-reveal card-hover-zoom">
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
                        <div key={index} className="flex items-center space-x-3 animate-fade-in-up glassmorphic-feature-item p-3 rounded-xl backdrop-blur-sm bg-white/8 border border-white/10 scroll-reveal card-hover-zoom group" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                          <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover:drop-shadow-lg" />
                          <span className="text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Visual */}
                  <div className="relative animate-slide-in-right animation-delay-500 scroll-reveal">
                    <div className="glass-card card-hover-zoom" style={{ padding: '2rem', textAlign: 'initial' }}>
                      <div className="space-y-6 relative z-10">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow shadow-lg backdrop-blur-sm border border-white/30 hover-glow">
                            <GraduationCap className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">Learn. Build. Innovate.</h3>
                          <p className="text-gray-200">Student-led learning community</p>
                        </div>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          {[
                            { Icon: Users2, title: "Peer-Led", desc: "Expert students" },
                            { Icon: Wrench, title: "Hands-On", desc: "Real projects" },
                            { Icon: Award, title: "Certified", desc: "Recognized credentials" },
                            { Icon: Gauge, title: "Automotive", desc: "Specialized focus" }
                          ].map((item, index) => (
                            <div key={index} className="glass-card group scroll-reveal card-hover-zoom" style={{ animationDelay: `${(index + 3) * 150}ms` }}>
                              <div className="mb-3">
                                <item.Icon className="w-8 h-8 mx-auto text-blue-400 group-hover:drop-shadow-lg" />
                              </div>
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
          <section id="contact" className="py-3 sm:py-6 md:py-8 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white relative z-10 about-us-matrix border-t border-blue-500/70">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch min-h-40 md:min-h-64 animate-fade-in-up animation-delay-200 relative">
                  {/* 1st Quarter: Contact Us Heading - Center Aligned Horizontally and Vertically */}
                  <div className="flex flex-col justify-center items-center text-center animate-fade-in-left w-full py-4 sm:py-6 md:py-0">
                    <div className="w-full flex items-center justify-center">
                      <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-white">Contact Us</h2>
                    </div>
                  </div>

                  {/* Separator 1 */}
                  <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-blue-500/70"></div>

                  {/* 2nd Quarter: Contact Details & Icons - Center Aligned */}
                  <div className="flex flex-col justify-center items-center text-center animate-fade-in-left px-4 py-4 sm:py-6 md:py-0">
                    {/* Contact Details - Hidden on mobile */}
                    <div className="hidden md:block space-y-1 text-xs md:text-sm text-blue-200 mb-4">
                      <p className="flex items-center justify-center gap-3 animate-fade-in-left animation-delay-400">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        <a href="https://instagram.com/saecusat" target="_blank" rel="noopener noreferrer" className="hover-underline hover:text-blue-100 transition-colors">@saecusat</a>
                      </p>
                      <p className="flex items-center justify-center gap-3 animate-fade-in-left animation-delay-500">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        <a href="https://www.linkedin.com/company/society-of-automotive-engineers/" target="_blank" rel="noopener noreferrer" className="hover-underline hover:text-blue-100 transition-colors">SAE CUSAT</a>
                      </p>
                      <p className="flex items-center justify-center gap-3 animate-fade-in-left animation-delay-300">
                        <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <a href="mailto:sae.official@cusat.ac.in" className="hover-underline hover:text-blue-100 transition-colors">sae.official@cusat.ac.in</a>
                      </p>
                    </div>

                    {/* Icon Links - Horizontal (Below Details) */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-1 sm:py-2">
                      {/* Email */}
                      <a 
                        href="mailto:sae.official@cusat.ac.in" 
                        title="Email" 
                        className="text-blue-300 hover:text-blue-100 hover:scale-120 transition-transform duration-200 animate-fade-in-left animation-delay-300 hover-glow icon-scale-only group"
                      >
                        <Mail className="w-8 h-8 group-hover:drop-shadow-lg" />
                      </a>
                      
                      {/* Instagram */}
                      <a 
                        href="https://instagram.com/saecusat" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram" 
                        className="text-blue-300 hover:text-blue-100 hover:scale-120 transition-transform duration-200 animate-fade-in-left animation-delay-400 hover-glow icon-scale-only group"
                      >
                        <svg className="w-8 h-8 group-hover:drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                      
                      {/* LinkedIn */}
                      <a 
                        href="https://www.linkedin.com/company/society-of-automotive-engineers/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn" 
                        className="text-blue-300 hover:text-blue-100 hover:scale-120 transition-transform duration-200 animate-fade-in-left animation-delay-500 hover-glow icon-scale-only group"
                      >
                        <svg className="w-8 h-8 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </a>

                      {/* Location */}
                      <a 
                        href="https://maps.app.goo.gl/qdsh7cX4LXd4BpdH7" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on Google Maps" 
                        className="text-blue-300 hover:text-blue-100 hover:scale-120 transition-transform duration-200 animate-fade-in-left animation-delay-600 hover-glow icon-scale-only group"
                      >
                        <svg className="w-8 h-8 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" /></svg>
                      </a>
                    </div>
                  </div>

                  {/* Separator 2 */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/70"></div>

                  {/* Right Half: Google Map - Center Aligned */}
                  <div className="md:col-span-2 flex items-center justify-center animate-fade-in-right animation-delay-200 px-4 w-full py-4 sm:py-6 md:py-0">
                    <div className="relative w-full max-w-sm md:max-w-lg h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-lg border-2 border-blue-500/30 hover-border-glow transition-all flex items-center justify-center">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3928.6186679667867!2d76.3288979747943!3d10.048292090059615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c3a571be335%3A0xe9d0d17ee3a87389!2sSchool%20of%20Engineering%2C%20CUSAT!5e0!3m2!1sen!2sin!4v1761487657079" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black text-white py-6 sm:py-8 relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
              <div className="flex space-x-6 mb-3">
                <a href="https://instagram.com/saecusat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-400 transition-colors hover-glow hover-float group">
                  <svg className="w-7 h-7 group-hover:drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com/company/saecusat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition-colors hover-glow hover-float group">
                  <svg className="w-7 h-7 group-hover:drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
    </>
  )
}
