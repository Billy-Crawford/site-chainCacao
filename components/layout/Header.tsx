// components/layout/Header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Container from "../shared/Container"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Problème", href: "/probleme" },
    // { name: "Solution", href: "/solution" },
    { name: "Impact", href: "/impact" },
    { name: "Équipe", href: "/equipe" },
    { name: "Acteurs", href: "/acteurs" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-secondary">
            ChainCacao
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-secondary transition"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/solution"
              className="bg-secondary text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-80 transition"
            >
              Voir la solution
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/solution"
              className="bg-secondary text-black px-4 py-2 rounded-lg text-sm font-medium text-center"
            >
              Voir la solution
            </Link>
          </div>
        )}
      </Container>
    </header>
  )
}

