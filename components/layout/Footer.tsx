// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#pricing', label: 'Pricing' },
      { href: '/portal', label: 'Patient Portal' },
      { href: '/lab-testing', label: 'Lab Testing' },
      { href: '/journal', label: 'Health Journal' },
    ],
    support: [
      { href: '#faq', label: 'FAQs' },
      { href: '/shipping', label: 'Shipping & Returns' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/hipaa', label: 'HIPAA Notice' },
      { href: '/contact', label: 'Contact Us' },
    ],
    services: [
      { href: '/metabolic-reset', label: 'Metabolic Reset' },
      { href: '/hormone-optimization', label: 'Hormone Optimization' },
      { href: '/weight-loss', label: 'Weight Transformation' },
      { href: '/diagnostics', label: 'Advanced Diagnostics' },
      { href: '/peptide-therapy', label: 'Peptide Therapy' },
      { href: '/consultation', label: 'Book Consultation' },
    ],
  }

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                HealthClinic
              </h3>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming lives through personalized medicine and cutting-edge health solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href="mailto:support@healthclinic.com"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                support@healthclinic.com
              </a>
              <a 
                href="tel:1-800-HEALTH-1"
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                1-800-HEALTH-1
              </a>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-3 flex-shrink-0" />
                Mon-Fri 8am-8pm EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} HealthClinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}