'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { href: '/services/metabolic-reset', label: 'Metabolic Reset' },
    { href: '/services/hormone-optimization', label: 'Hormone Optimization' },
    { href: '/services/weight-transformation', label: 'Weight Transformation' },
    { href: '/services/diagnostics', label: 'Advanced Diagnostics' },
  ]

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services', hasDropdown: true },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#testimonials', label: 'Success Stories' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            HealthClinic
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button 
                      className="text-gray-700 hover:text-blue-900 transition-colors flex items-center"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-900 hover:bg-gray-100 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <>
                    <p className="block py-2 text-gray-700 font-semibold">{link.label}</p>
                    <div className="pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-2 text-gray-600 hover:text-blue-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <button className="w-full px-4 py-2 text-blue-900 border border-blue-900 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}