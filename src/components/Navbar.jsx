import { useState, useEffect } from 'react'
import { Menu, X, Mail, FileDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-lg sm:text-xl tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Your Name</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
              <FileDown size={16} /> CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 hover:border-gray-400">
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>

        <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-700">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white">
                <FileDown size={16} /> CV
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
