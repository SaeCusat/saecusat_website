"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

interface NavigationProps {
  currentPage?: string
  onSectionScroll?: (sectionId: string) => void
}

export default function Navigation({ currentPage = "home", onSectionScroll }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navigateToPage = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const getPageTitle = () => {
    switch (currentPage) {
      case "teams":
        return "Our Teams"
      case "gallery":
        return "Photo Gallery"
      case "academy":
        return "SAE Academy"
      case "checkin":
        return "Lab Check-in"
      case "committee":
        return "Executive Committee"
      default:
        return "SAE CUSAT"
    }
  }

  const navigationItems = [
    { label: "About", href: currentPage === "home" ? "#about" : "/#about" },
    { label: "Teams", href: "/teams" },
    { label: "Committee", href: "/committee" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: currentPage === "home" ? "#contact" : "/#contact" },
  ]

  return (
    <>
      {/* Desktop Navigation - Separate positioning for logo, nav, and check-in */}
      <div className="hidden lg:block">
        {/* SAE Logo - Top Left Corner */}
        <div className="absolute top-6 left-6 z-[70]">
          <Link href="/" className="hover:scale-105 transition-all duration-300 group">
            <Image
              src="/Logo/sae_logo_white.png"
              alt="SAE Logo"
              width={60}
              height={60}
              className="transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
              priority
            />
          </Link>
        </div>

        {/* Central Navigation Bar - Only covering nav items */}
        <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-[60]">
          <div className="bg-gradient-to-r from-black/20 via-black/25 to-black/20 backdrop-blur-2xl border border-white/3 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2 text-sm xl:text-base font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-110 group"
                  onClick={() => {
                    if (item.href.startsWith('#') && currentPage === "home") {
                      const sectionId = item.href.substring(1)
                      if (onSectionScroll) {
                        onSectionScroll(sectionId)
                      }
                    }
                  }}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-300">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-400 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Check-in Button - Top Right Corner */}
        <div className="absolute top-6 right-6 z-[70]">
          <Link href="/checkin">
            <Button
              variant="outline"
              size="sm"
              className="bg-black/15 backdrop-blur-xl border-white/8 text-white hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-105 font-medium px-6 py-4 shadow-2xl hover:shadow-3xl group overflow-hidden relative rounded-full border-2 hover:border-cyan-400/40"
            >
              <CheckCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Check-in</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out rounded-full"></div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Tablet Navigation - Simplified glassmorphism */}
      <nav className="hidden md:block lg:hidden absolute top-4 left-4 right-4 z-[60] bg-gradient-to-r from-black/20 via-black/25 to-black/20 backdrop-blur-2xl border border-white/3 rounded-full shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="hover:scale-105 transition-all duration-300 group">
              <Image
                src="/Logo/sae_logo_white.png"
                alt="SAE Logo"
                width={48}
                height={48}
                className="transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                priority
              />
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              {navigationItems.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  <span className="relative z-10 group-hover:text-cyan-300">{item.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 ease-out"></div>
                </Link>
              ))}
            </div>

            {/* Check-in Button */}
            <Link href="/checkin">
              <Button
                variant="outline"
                size="sm"
                className="bg-black/15 backdrop-blur-xl border-white/8 text-white hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-105 font-medium px-4 py-2 shadow-lg hover:shadow-xl group overflow-hidden relative rounded-full"
              >
                <CheckCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Check-in</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden absolute top-4 left-4 right-4 z-[60]">
        {/* Mobile Navigation Header - Fixed Rectangle Shape */}
        <nav className="bg-gradient-to-r from-black/20 via-black/25 to-black/20 backdrop-blur-2xl border border-white/3 rounded-full shadow-2xl">
          <div className="flex items-center justify-between h-14 px-4">
            {/* Logo */}
            <Link href="/" className="hover:scale-105 transition-all duration-300 group">
              <Image
                src="/Logo/sae_logo_white.png"
                alt="SAE Logo"
                width={42}
                height={42}
                className="transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                priority
              />
            </Link>

            {/* Mobile Menu Button with Custom Hamburger to X Animation */}
            <button
              className="p-3 transition-all duration-300 hover:scale-110 active:scale-95 group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`relative w-6 h-6 flex flex-col justify-center items-center ${mobileMenuOpen ? 'hamburger-to-x' : ''}`}>
                {/* Hamburger lines */}
                <div className="hamburger-line w-5 h-0.5 bg-white rounded-full mb-1 group-hover:bg-cyan-300"></div>
                <div className="hamburger-line w-5 h-0.5 bg-white rounded-full mb-1 group-hover:bg-cyan-300"></div>
                <div className="hamburger-line w-5 h-0.5 bg-white rounded-full group-hover:bg-cyan-300"></div>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown - Slides down from navigation bar */}
        <div
          className={`mt-2 transition-all duration-400 ease-in-out transform origin-top ${
            mobileMenuOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-0 translate-y-[-10px]"
          }`}
        >
          <div className="bg-gradient-to-b from-black/25 via-black/30 to-black/25 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl p-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-3 mb-6">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ease-out ${
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 100 + 100}ms` : '0ms'
                  }}
                >
                  <button
                    onClick={() => {
                      if (item.href.startsWith('#') && currentPage === "home") {
                        const sectionId = item.href.substring(1)
                        if (onSectionScroll) {
                          onSectionScroll(sectionId)
                        }
                        setMobileMenuOpen(false)
                      } else {
                        navigateToPage(item.href)
                      }
                    }}
                    className="mobile-nav-item w-full bg-gradient-to-r from-black/15 via-black/20 to-black/15 backdrop-blur-xl border border-white/5 rounded-2xl px-5 py-3 text-left text-white/90 hover:text-white transition-all duration-300 font-medium text-base hover:scale-[1.02] active:scale-95 group relative overflow-hidden hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10 hover:border-white/10"
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-cyan-300">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out rounded-2xl"></div>
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Check-in Button */}
            <div className={`transition-all duration-300 ease-out ${
              mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-20px] opacity-0'
            }`} style={{
              transitionDelay: mobileMenuOpen ? `${navigationItems.length * 100 + 200}ms` : '0ms'
            }}>
              <button
                onClick={() => navigateToPage("/checkin")}
                className="w-full bg-gradient-to-r from-cyan-600/70 to-blue-600/70 hover:from-cyan-700/80 hover:to-blue-700/80 active:from-cyan-800 active:to-blue-800 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/50 rounded-2xl px-6 py-3 transition-all duration-300 font-semibold text-white shadow-xl text-base hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
              >
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="relative z-10">Lab Check-in</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out rounded-2xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
