'use client'

import { useState } from 'react'
import { Menu, X, Atom } from 'lucide-react'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      closeNav()
    }
  }

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#demo', label: 'Demo' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Atom className="h-8 w-8 mr-2 text-accent-500" />
          <span className="text-2xl font-bold text-primary-900">ReactPro</span>
        </div>

        <button onClick={toggleNav} className="md:hidden text-primary-900">
          {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className={`md:flex ${isNavOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden -z-10"
          onClick={closeNav}
        />
      )}
    </header>
  )
}
