'use client'

import Link from 'next/link'
import { ShoppingCart, Instagram, Youtube, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    (<header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            VGym
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-white/80">
              About
            </Link>
            <Link href="/schedule" className="text-white hover:text-white/80">
              Schedule
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80">
              Contact
            </Link>
            <Link href="/store" className="text-white hover:text-white/80">
              Store
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="https://instagram.com" className="text-white hover:text-white/80">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="text-white hover:text-white/80">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            <Button variant="ghost" className="text-white">
              Login
            </Button>
            <Link href="/cart" className="text-white hover:text-white/80">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">0</span>
            </Link>
          </div>
        </div>
      </div>
    </header>)
  );
}

