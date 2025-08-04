"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
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

          {/* About Us Section - Dark Futuristic Theme */}
          <section id="about" className="about-us-matrix py-16 sm:py-20 relative z-20" style={{ backgroundColor: 'var(--dark-background)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div ref={aboutRef} className="opacity-100">
                  {/* Centered narrow layout wrapper */}
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 ${montserrat.className}`} 
                        style={{ 
                          color: 'var(--accent-cyan)',
                          textShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
                        }}>
                      About Us
                    </h2>
                    
                    {/* Text Content - Centered */}
                    <div className="space-y-6 text-center" style={{ color: 'var(--light-text)' }}>
                      <p className={`text-lg sm:text-xl leading-relaxed ${montserrat.className} font-medium`}>
                        Welcome to SAE CUSAT, where innovation meets engineering excellence. We are a team of passionate students driven by a shared interest in automobiles, design, and hands-on engineering. At SAE CUSAT, we go beyond just building vehicles - we focus on creating, learning, and growing through real-world experience.
                      </p>
                      <p className={`text-lg sm:text-xl leading-relaxed ${montserrat.className} font-medium`}>
                        As the official student chapter of the Society of Automotive Engineers at CUSAT, we bring together individuals who enjoy tackling challenges, working as a team, and constantly pushing the limits of what's possible. Our community is built on the foundation of <span className="highlight">collaborative learning</span>, <span className="highlight">innovative thinking</span>, and <span className="highlight">practical application of engineering principles</span>.
                      </p>
                      <p className={`text-lg sm:text-xl leading-relaxed ${montserrat.className} font-medium`}>
                        Whether you're interested in design, manufacturing, testing, or competition, we provide opportunities to explore every aspect of automotive engineering. If you have a passion for engineering, teamwork, and technology, you'll feel right at home here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Our Core Values Section - Dark Futuristic Theme */}
          <section className="py-16 sm:py-20 relative z-10" style={{ backgroundColor: 'var(--dark-background)' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h3 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${montserrat.className}`}
                    style={{ 
                      color: 'var(--accent-cyan)',
                      textShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
                    }}>
                  Our Core Values
                </h3>
                
                {/* Dark Theme Value Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {[
                    { icon: Users, title: "Community" },
                    { icon: Trophy, title: "Excellence" },
                    { icon: BookOpen, title: "Learning" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="value-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300" 
                             style={{ backgroundColor: 'transparent', border: '2px solid var(--accent-cyan)' }}>
                          <item.icon className="w-10 h-10" style={{ color: 'var(--accent-cyan)' }} />
                        </div>
                        <h3 className={`text-2xl font-bold ${montserrat.className}`} style={{ color: 'var(--light-text)' }}>
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                           style={{ boxShadow: '0 0 25px var(--accent-cyan-glow)' }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SAE Academy Section */}
          <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-6 animate-fade-in-up">
                    <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse shadow-lg">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Coming Soon
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                      SAE Academy
                    </h2>
                    <p className="text-lg text-blue-100 leading-relaxed">
                      Unlock your potential with our comprehensive engineering education platform. 
                      Learn from industry experts, work on real projects, and advance your automotive engineering career.
                    </p>
                    <div className="space-y-4">
                      {[
                        "Industry-expert instructors",
                        "Hands-on project experience", 
                        "Certificate programs",
                        "Career advancement support"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-blue-100">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/academy">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-1000">
                        Get Early Access
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Right Visual */}
                  <div className="relative animate-slide-in-right animation-delay-500">
                    <div className="bg-gradient-to-br from-blue-800/90 to-indigo-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-blue-400/20">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow shadow-lg">
                            <GraduationCap className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Learn. Build. Innovate.</h3>
                          <p className="text-blue-200">Join the future of automotive engineering education</p>
                        </div>
                        
                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          {[
                            { icon: "🎓", title: "Expert-Led", desc: "Industry professionals" },
                            { icon: "🔧", title: "Hands-On", desc: "Real projects" },
                            { icon: "📜", title: "Certified", desc: "Recognized credentials" },
                            { icon: "🚗", title: "Automotive", desc: "Specialized focus" }
                          ].map((item, index) => (
                            <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/25 transition-all duration-300 border border-blue-300/20" style={{ animationDelay: `${(index + 3) * 150}ms` }}>
                              <div className="text-2xl mb-2">{item.icon}</div>
                              <div className="text-white font-semibold text-sm">{item.title}</div>
                              <div className="text-blue-200 text-xs">{item.desc}</div>
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
