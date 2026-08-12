'use client';

import { useEffect, useState } from 'react';
import { Menu, ChevronDown, Globe } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs h-14'
          : 'bg-[#06152a]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none h-14 sm:h-16'
      )}
    >
      <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2">
          <img
            src="https://store.kingomart.com/logo.svg"
            alt="KingoMart Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 object-cover object-left shrink-0"
          />
          <span
            className={cn(
              'font-display font-bold text-lg sm:text-xl tracking-tight transition-colors',
              scrolled ? 'text-slate-900' : 'text-white'
            )}
          >
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
                'flex items-center gap-1 px-2.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer',
                scrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              Categories
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-200',
                  megaMenuOpen && 'rotate-180'
                )}
              />
            </button>

            <AnimatePresence>
              {megaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' as const }}
                  className="absolute top-full left-0 pt-2 w-[640px]"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 grid grid-cols-2 sm:grid-cols-4 gap-5 text-left">
                    {megaMenuCategories.map((column) => (
                      <div key={column.title}>
                        <h3 className="font-display font-bold text-xs text-slate-900 uppercase tracking-wider mb-2.5">
                          {column.title}
                        </h3>
                        <ul className="space-y-1.5">
                          {column.items.map((item) => (
                            <li key={item.name}>
                              <a
                                href="#categories"
                                onClick={() => setMegaMenuOpen(false)}
                                className="group flex items-center justify-between text-xs text-slate-600 hover:text-orange transition-colors py-0.5"
                              >
                                <span className="truncate">{item.name}</span>
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
                'px-2.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors',
                scrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
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
              'flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer',
              scrolled
                ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            )}
          >
            <Globe className="size-3.5" />
            <span>EN</span>
          </button>

          <Button
            variant="ghost"
            size="sm"
            className={cn(
              'h-8 px-3 text-xs font-semibold cursor-pointer',
              scrolled ? 'text-slate-700 hover:text-slate-900' : 'text-white/90 hover:text-white hover:bg-white/10'
            )}
          >
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'h-8 px-3 text-xs font-semibold cursor-pointer',
              scrolled ? 'border-slate-200 text-slate-800' : 'border-white/30 text-white bg-white/5 hover:bg-white/20 hover:text-white'
            )}
          >
            Register
          </Button>
          <Button
            size="sm"
            className="h-8 px-3.5 text-xs font-bold bg-orange hover:bg-orange/90 text-white shadow-xs cursor-pointer"
          >
            Start Buying
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'p-1.5 rounded-lg transition-colors cursor-pointer',
                  scrolled
                    ? 'text-slate-800 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="size-5.5" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[85vw] max-w-xs p-0 border-r border-slate-200">
              <SheetHeader className="p-4 border-b border-slate-100 flex flex-row items-center justify-between">
                <SheetTitle asChild>
                  <a
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://store.kingomart.com/logo.svg"
                      alt="KingoMart Logo"
                      className="h-7 w-7 object-cover object-left shrink-0"
                    />
                    <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                      Kingo<span className="text-orange">Mart</span>
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Drawer Body */}
              <div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)] flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Category Fast Links */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                      Main Categories
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {megaMenuCategories.map((col) => (
                        <a
                          key={col.title}
                          href="#categories"
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg border border-slate-100 truncate"
                        >
                          {col.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100" />

                  {/* Section Links */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                      Navigation
                    </p>
                    <div className="flex flex-col space-y-1">
                      {navLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:text-orange hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Mobile Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 mt-6">
                  <div className="flex items-center justify-between px-2 mb-1">
                    <span className="text-xs font-medium text-slate-500">Language</span>
                    <button className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Globe className="size-3" /> EN
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full justify-center text-xs h-9 font-semibold"
                  >
                    Login / Register
                  </Button>
                  <Button className="w-full justify-center bg-orange hover:bg-orange/90 text-white font-bold text-xs h-9 shadow-sm">
                    Start Buying
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
