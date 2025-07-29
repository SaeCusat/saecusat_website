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

  // Prevent body scroll and blur content when mobile menu is open
  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      if (mainContent) {
        mainContent.style.filter = "blur(4px)"
        mainContent.style.transition = "filter 0.3s ease-in-out"
        mainContent.style.pointerEvents = "none"
      }
    } else {
      document.body.style.overflow = "unset"
      if (mainContent) {
        mainContent.style.filter = "none"
        mainContent.style.pointerEvents = "auto"
      }
    }

    return () => {
      document.body.style.overflow = "unset"
      if (mainContent) {
        mainContent.style.filter = "none"
        mainContent.style.pointerEvents = "auto"
      }
    }
  }, [mobileMenuOpen])

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
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl fixed top-0 left-0 right-0 z-[60] border-b border-blue-800/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link href="/" className="hover:scale-105 transition-all duration-300 z-50 group">
            <Image
              src="/Logo/sae_logo_white.png"
              alt="SAE Logo"
              width={75}
              height={75}
              className="transition-transform duration-300 group-hover:scale-110"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-all duration-300 hover:scale-105 group overflow-hidden rounded-lg"
                onClick={() => {
                  if (item.href.startsWith('#') && currentPage === "home") {
                    const sectionId = item.href.substring(1)
                    if (onSectionScroll) {
                      onSectionScroll(sectionId)
                    }
                  }
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Link>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-3 py-2 text-xs font-medium text-white hover:bg-white/15 hover:text-white transition-all duration-300 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/checkin">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 font-medium px-3 py-1 text-xs"
              >
                <CheckCircle className="w-3 h-3 mr-1" />
                Check-in
              </Button>
            </Link>
          </div>

          {/* Mobile Page Title */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-sm font-bold text-white">
              {getPageTitle()}
            </h1>
          </div>

          {/* Desktop Check-in Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/checkin">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 font-medium px-6 py-2 shadow-lg hover:shadow-xl group overflow-hidden relative"
              >
                <CheckCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Check-in</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[70] p-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 text-white absolute inset-0 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`} />
              <X className={`w-6 h-6 text-white absolute inset-0 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay and Full Screen Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[65] transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 58, 138, 0.96) 50%, rgba(15, 23, 42, 0.98) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'inset 0 0 100px rgba(59, 130, 246, 0.1)',
          height: '100dvh', // Dynamic viewport height for better mobile support
          overflowY: 'auto'
        }}
      >
        <div className={`flex flex-col min-h-full transition-transform duration-500 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className={`flex-shrink-0 flex items-center justify-between p-4 sm:p-6 border-b border-blue-400/40 transition-all duration-700 ease-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'
          }`} style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 58, 138, 1) 25%, rgba(59, 130, 246, 1) 50%, rgba(30, 58, 138, 1) 75%, rgba(15, 23, 42, 1) 100%)',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 4px 20px rgba(30, 58, 138, 0.4)'
          }}>
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-blue-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                mobileMenuOpen ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
              }`}>
                <Image
                  src="/Logo/sae_logo.png"
                  alt="SAE Logo"
                  width={100}
                  height={100}
                  className="object-cover w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
              <div className={`transition-all duration-500 delay-100 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-10px] opacity-0'
              }`}>
                <p className="text-sm text-blue-200">{getPageTitle()}</p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links - Centered */}
          <div className="flex-1 flex flex-col justify-center py-6 sm:py-8 px-4 sm:px-6 min-h-0">
            <div className="max-w-sm mx-auto w-full space-y-4 sm:space-y-5">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
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
                  className="w-full flex items-center justify-center px-6 sm:px-8 py-4 sm:py-6 text-center text-white hover:bg-white/20 active:bg-white/30 transition-all duration-300 rounded-full font-semibold text-lg sm:text-xl hover:scale-105 active:scale-95 backdrop-blur-sm group relative overflow-hidden"
                  style={{
                    background: 'rgba(30, 58, 138, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(30, 58, 138, 0.2)',
                    transitionDelay: `${(index + 2) * 100}ms`,
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)'
                  }}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/30 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out rounded-full"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Check-in Button */}
          <div className={`flex-shrink-0 p-4 sm:p-6 border-t border-blue-400/40 transition-all duration-700 ease-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'
          }`} style={{
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.9) 100%)',
            backdropFilter: 'blur(15px)',
            transitionDelay: mobileMenuOpen ? '600ms' : '0ms'
          }}>
            <div className="max-w-sm mx-auto">
              <button
                onClick={() => navigateToPage("/checkin")}
                className="w-full flex items-center justify-center space-x-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 transition-all duration-300 font-bold text-white shadow-xl text-lg sm:text-xl hover:scale-105 active:scale-95 group relative overflow-hidden"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="relative z-10">Lab Check-in</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
