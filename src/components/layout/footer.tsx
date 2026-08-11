'use client';

import { Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { footerLinks } from '@/lib/data';

export function Footer() {
  const columns = Object.entries(footerLinks);

  return (
    <footer className="mt-auto bg-navy text-white">
      <Container>
        {/* Top Section: Logo + Description + Newsletter */}
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="/">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Kingo<span className="text-orange">Mart</span>
              </span>
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-lg">
              The leading B2B wholesale marketplace connecting Algerian buyers
              with verified global suppliers. Source products at factory-direct
              prices with shared logistics and full trade protection.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-white mb-2 text-sm">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-xs mb-3">
              Get the latest deals and market insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-500 h-9 text-sm focus-visible:border-orange/50 focus-visible:ring-orange/30"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold h-9 px-4 shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Middle Section: 8-Column Link Grid */}
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {columns.map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section: Social + Copyright + Language */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="size-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            &copy; 2025 KingoMart. All rights reserved.
          </p>

          {/* Language Selector */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
            <Globe className="size-4" />
            <span>English</span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
