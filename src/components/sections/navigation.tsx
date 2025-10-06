"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Usługi", href: '#uslugi' },
  { name: "Nieruchomości", href: '#nieruchomosci', active: true },
  { name: 'Kontakt', href: '#kontakt' }
];


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = '+48 698 474 320';
  const telLink = `tel:${phoneNumber.replace(/\s/g, '')}`;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 supports-[backdrop-filter]:bg-white/90 backdrop-blur-md shadow-md border-b border-border/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1758707653027.png"
              alt="Piotrowski Nieruchomości logo"
              width={160}
              height={48}
              priority
              style={{ width: '6cm', height: 'auto' }} />

          </Link>
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) =>
            item.name === "Nieruchomości" ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                      item.active ? 'text-accent' : 'text-muted-foreground hover:text-accent'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[180px]">
                  <DropdownMenuItem asChild>
                    <Link href="/domy">Domy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dzialki">Działki</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/lokale">Lokale</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/mieszkania">Mieszkania</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium tracking-wide transition-colors ${
              item.active ?
              'text-accent' :
              'text-muted-foreground hover:text-accent'}`
              }>

                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a href={telLink} className="hidden items-center space-x-2 sm:flex">
            <Phone className="h-4 w-4 text-accent" />
            <span className="text-base font-medium text-accent">{phoneNumber}</span>
          </a>
          <button
            className="flex items-center md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">

            {isMenuOpen ?
            <X className="h-6 w-6 text-foreground" /> :

            <Menu className="h-6 w-6 text-foreground" />
            }
          </button>
        </div>
      </div>

      {isMenuOpen &&
      <div className="border-t bg-background md:hidden">
          <nav className="flex flex-col items-center space-y-6 px-4 py-8">
            {navItems.map((item) =>
              item.name === "Nieruchomości" ? (
                <div key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`mb-2 block text-base font-medium text-center transition-colors ${
                      item.active ? 'text-accent' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                  <div className="flex flex-col items-center space-y-3">
                    <Link href="/domy" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent">Domy</Link>
                    <Link href="/dzialki" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent">Działki</Link>
                    <Link href="/lokale" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent">Lokale</Link>
                    <Link href="/mieszkania" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent">Mieszkania</Link>
                  </div>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-medium transition-colors ${
              item.active ? 'text-accent' : 'text-foreground hover:text-accent'}`
              }>
                    {item.name}
                  </button>
              )
            )}
            <a href={telLink} className="flex items-center space-x-2 pt-4 sm:hidden">
              <Phone className="h-5 w-5 text-accent" />
              <span className="text-lg font-medium text-accent">{phoneNumber}</span>
            </a>
          </nav>
        </div>
      }
    </header>);

}