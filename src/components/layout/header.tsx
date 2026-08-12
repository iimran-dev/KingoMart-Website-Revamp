'use client';

import { useEffect, useState } from 'react';
import { Menu, ChevronDown, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { navLinks, megaMenuCategories } from '@/lib/data';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm h-16'
          : 'bg-transparent h-20'
      )}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <img
            src="https://store.kingomart.com/logo.svg"
            alt="KingoMart Logo"
            className="h-8 w-8 object-cover object-left shrink-0"
          />
          <span className={cn("font-display font-bold text-xl tracking-tight transition-colors", scrolled ? "text-navy" : "text-white")}>
            Kingo<span className="text-orange">Mart</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Categories with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              onClick={() => setMegaMenuOpen((prev) => !prev)}
              className={cn(
                'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                scrolled
                  ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              Categories
              <ChevronDown
                className={cn(
                  'size-4 transition-transform duration-200',
                  megaMenuOpen && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' as const }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px]"
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 grid grid-cols-3 gap-8 text-left">
                    {megaMenuCategories.map((column) => (
                      <div key={column.title}>
                        <h3 className="font-display font-semibold text-sm text-navy mb-3">
                          {column.title}
                        </h3>
                        <ul className="space-y-2">
                          {column.items.map((item) => (
                            <li key={item.name}>
                              <a
                                href="#"
                                className="group flex items-center justify-between text-sm text-gray-600 hover:text-orange transition-colors py-0.5"
                              >
                                <span>{item.name}</span>
                                <span className="text-xs text-gray-400 group-hover:text-orange/70 transition-colors">
                                  {item.count}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular Nav Links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                scrolled
                  ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language Selector */}
          <button
            className={cn(
              'flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors',
              scrolled
                ? 'text-gray-700 hover:text-navy hover:bg-gray-100'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            )}
          >
            <Globe className="size-4" />
            <span>EN</span>
          </button>

          <Button variant="ghost" className={scrolled ? 'text-gray-700 hover:text-navy' : 'text-white/90 hover:text-white hover:bg-white/10'}>
            Login
          </Button>
          <Button variant="outline" className={scrolled ? '' : 'border-white/30 text-white bg-white/5 hover:bg-white/20 hover:text-white'}>Register</Button>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-sm">
            Start Buying
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'p-2 rounded-md transition-colors',
                  scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 overflow-y-auto">
              <SheetHeader className="pt-8 pb-4">
                <SheetTitle>
                  <a href="/" className="flex items-center gap-2.5">
                    <img
                      src="https://store.kingomart.com/logo.svg"
                      alt="KingoMart Logo"
                      className="h-8 w-8 object-cover object-left shrink-0"
                    />
                    <span className="font-display font-bold text-xl tracking-tight text-navy">
                      Kingo<span className="text-orange">Mart</span>
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4">
                {/* Categories Section in Mobile */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 px-3">
                    Categories
                  </p>
                  {megaMenuCategories.map((column) => (
                    <div key={column.title} className="mb-3">
                      <p className="text-xs font-semibold text-navy px-3 py-1">
                        {column.title}
                      </p>
                      {column.items.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="flex items-center justify-between px-3 py-1.5 text-sm text-gray-600 hover:text-orange hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-gray-400">
                            {item.count}
                          </span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 my-3" />

                {/* Navigation Links */}
                {navLinks.slice(1).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="border-t border-gray-100 my-3" />

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col gap-2 pt-2 pb-4">
                  <Button variant="outline" className="w-full justify-center">
                    Login
                  </Button>
                  <Button className="w-full justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    Start Buying
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
