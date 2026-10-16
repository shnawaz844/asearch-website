import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers, Cpu, Globe, PhoneCall } from 'lucide-react';
import { ThemeMode } from '../types';
import { ALL_SERVICES } from '../data/siteData';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenStrategyCall: (context?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, onOpenStrategyCall }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Industries', href: '#industries' },
    { label: '3D Spatial Lab', href: '#spatial-lab' },
    { label: 'ROI Simulator', href: '#roi-simulator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070a12]/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/70 dark:bg-[#070a12]/70 backdrop-blur-xs border-b border-slate-100 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Logo (Zone 1) */}
        <a href="#" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0" aria-label="ASearch Online Home">
          <img
            src="https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png"
            alt="ASearch Online"
            className="h-8 sm:h-9 w-auto max-w-[190px] object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('header-brand-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />
          <div id="header-brand-fallback" className="hidden items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-base">
              A
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              ASearch<span className="text-blue-600">Online</span>
            </span>
          </div>
        </a>

        {/* Navigation Links (Zone 2) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 whitespace-nowrap"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  {/* Mega Services Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full -left-20 w-[640px] p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                      {ALL_SERVICES.slice(0, 8).map((srv) => (
                        <a
                          key={srv.id}
                          href={`#services`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                              {srv.number}
                            </span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                              {srv.metricHeadline}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                            {srv.tagline}
                          </div>
                        </a>
                      ))}
                      <div className="col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-2 text-xs">
                        <span className="text-slate-500 dark:text-slate-400">
                          10 Full-Stack Growth Capabilities
                        </span>
                        <a
                          href="#services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <span>View All Services</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher (Zone 3) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Robust Theme Toggle with visual feedback */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 transition-all cursor-pointer"
            aria-label={theme === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 rotate-0 transition-transform" />
            )}
          </button>

          {/* Primary CTA from asearchonline.com: "Free Strategy Call" */}
          <button
            onClick={() => onOpenStrategyCall()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Free Strategy Call</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070a12]/95 backdrop-blur-md px-5 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyCall();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Free Strategy Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
