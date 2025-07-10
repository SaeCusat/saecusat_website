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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
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
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl fixed top-0 left-0 right-0 z-50 border-b border-blue-800/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 z-50 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-blue-100 rounded-full flex items-center justify-center shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="SAE Logo"
                width={48}
                height={48}
                className="object-cover transition-transform duration-300 group-hover:scale-110 w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg sm:text-xl tracking-wide text-white group-hover:text-blue-200 transition-colors duration-300">
                SAE CUSAT
              </h1>
              <p className="text-xs text-blue-200 font-medium group-hover:text-blue-100 transition-colors duration-300">
                Automotive Excellence
              </p>
            </div>
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
            {navigationItems.slice(0, 3).map((item, index) => (
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
            className="md:hidden z-50 p-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30 shadow-lg active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`w-6 h-6 text-white absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 w-80 h-full bg-slate-900 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="SAE Logo"
                  width={40}
                  height={40}
                  className="object-cover w-6 h-6"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg text-white">SAE CUSAT</h1>
                <p className="text-xs text-blue-300">{getPageTitle()}</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
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
                className="w-full flex items-center px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 rounded-lg font-medium"
              >
                <span className="text-base">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Check-in Button */}
          <div className="p-4 border-t border-white/20">
            <button
              onClick={() => navigateToPage("/checkin")}
              className="w-full flex items-center justify-center space-x-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-white shadow-lg"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Lab Check-in</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
