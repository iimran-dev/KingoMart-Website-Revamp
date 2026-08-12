'use client';

import { Facebook, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { footerLinks } from '@/lib/data';

export function Footer() {
  const columns = Object.entries(footerLinks);

  return (
    <footer className="mt-auto bg-navy text-white">
      <Container>
        {/* Top Section: Logo + Description */}
        <div className="pt-16 pb-10">
          <a href="/" className="inline-flex items-center gap-2.5">
            <img
              src="https://store.kingomart.com/logo.svg"
              alt="KingoMart Logo"
              className="h-8 w-8 object-cover object-left shrink-0"
            />
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              Kingo<span className="text-orange">Mart</span>
            </span>
          </a>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-2xl">
            The leading B2B wholesale marketplace connecting Algerian buyers
            with verified global suppliers. Source products at factory-direct
            prices with shared logistics and full trade protection.
          </p>
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
