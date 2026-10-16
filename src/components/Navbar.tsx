import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, ChevronDown, Sparkles, TrendingUp, Cpu, ShieldCheck, ArrowRight, Layers } from 'lucide-react';
import { ThemeMode } from '../types';
import { MagneticButton } from './ui/MagneticButton';
import { cn } from '../lib/utils';
import { ALL_SERVICES } from '../data/siteData';

import { useCMS } from '../context/CMSContext';
import { Lock, Edit3, Eye } from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenContact: (context?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenContact }) => {
  const { siteContent, isAuthenticated, isEditMode, setIsEditMode, setIsLoginModalOpen, setIsEditorDrawerOpen, logout } = useCMS();
  const [scrolled, setScrolled] = useState(false);
  const [logoShrunk, setLogoShrunk] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // On site load: show bigger logo with glowing aura, then smoothly decrease to resting size
    const timer = setTimeout(() => {
      setLogoShrunk(true);
    }, 550);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const marketingServices = siteContent.services.filter(s => s.category === 'Digital Marketing & Strategy');
  const techServices = siteContent.services.filter(s => s.category === 'Technology & Automation Solutions');

  const navLinks = [
    { label: 'Services', href: '#services', isDropdown: true },
    { label: 'Clients & Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8',
        scrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto rounded-2xl transition-all duration-300 h-16 sm:h-20 px-3.5 sm:px-7 flex items-center justify-between gap-2 sm:gap-4 relative',
          scrolled
            ? 'bg-white/95 dark:bg-[#0D1017]/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/50'
            : 'bg-white/70 dark:bg-black/30 backdrop-blur-md border border-slate-200/70 dark:border-white/5'
        )}
      >
        {/* Brand Logo (Zone 1) - 20% bigger resting size + load scale-down animation */}
        <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0 overflow-visible" aria-label="ASearch Online Home">
          <div
            className={cn(
              "flex items-center gap-2 origin-left transition-all duration-1000 ease-out",
              logoShrunk
                ? "scale-100 filter-none"
                : "scale-[1.35] sm:scale-[1.45] drop-shadow-[0_0_22px_rgba(198,255,77,0.6)]"
            )}
          >
            <img
<<<<<<< Updated upstream
              src={siteContent.branding.logoUrl || "https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png"}
=======
              src="https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png"
>>>>>>> Stashed changes
              alt="ASearch Online"
              className="h-9 sm:h-11 w-auto max-w-[180px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('navbar-brand-fallback');
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            <div id="navbar-brand-fallback" className="hidden items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#C6FF4D] text-[#07080B] flex items-center justify-center font-extrabold text-lg shadow-lg shadow-[#C6FF4D]/20">
                A
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
                  ASEARCH
                </span>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] tracking-widest">
                  // ONLINE
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Navigation Links & Megamenu (Zone 2) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs sm:text-sm font-semibold tracking-wide text-slate-600 dark:text-[#9CA3AF]">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <a
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1.5 transition-colors whitespace-nowrap hover:text-slate-950 dark:hover:text-[#F5F7FA] group cursor-pointer',
                      servicesDropdownOpen ? 'text-lime-600 dark:text-[#C6FF4D]' : ''
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        servicesDropdownOpen ? 'rotate-180 text-lime-600 dark:text-[#C6FF4D]' : 'text-slate-400'
                      )}
                    />
                  </a>

                  {/* High-End Services Megamenu Dropdown */}
                  {servicesDropdownOpen && (
                    <div
                      className="absolute top-full -left-28 xl:-left-20 w-[780px] p-6 rounded-3xl bg-white/98 dark:bg-[#0D1017]/98 backdrop-blur-2xl border border-slate-200/90 dark:border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left"
                    >
                      <div className="grid grid-cols-2 gap-8">
                        {/* Submenu Column 1: Digital Marketing & Strategy */}
                        <div>
                          <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-100 dark:border-white/10">
                            <TrendingUp className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D]" />
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA]">
                              Digital Marketing & Strategy
                            </h4>
                          </div>
                          <ul className="space-y-1.5">
                            {marketingServices.map((srv) => (
                              <li key={srv.id}>
                                <a
                                  href={`#services`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                                >
                                  <span className="text-[10px] font-mono text-lime-600 dark:text-[#C6FF4D] mt-0.5 font-bold">
                                    {srv.number}
                                  </span>
                                  <div>
                                    <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] group-hover/item:text-lime-600 dark:group-hover/item:text-[#C6FF4D] transition-colors">
                                      {srv.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-[#9CA3AF] line-clamp-1">
                                      {srv.tagline}
                                    </div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Submenu Column 2: Technology & Automation Solutions */}
                        <div>
                          <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-slate-100 dark:border-white/10">
                            <Cpu className="w-4 h-4 text-indigo-500 dark:text-[#8B5CF6]" />
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA]">
                              Technology & Automation
                            </h4>
                          </div>
                          <ul className="space-y-1.5">
                            {techServices.map((srv) => (
                              <li key={srv.id}>
                                <a
                                  href={`#services`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group/item flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                                >
                                  <span className="text-[10px] font-mono text-indigo-500 dark:text-[#8B5CF6] mt-0.5 font-bold">
                                    {srv.number}
                                  </span>
                                  <div>
                                    <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] group-hover/item:text-indigo-600 dark:group-hover/item:text-[#C6FF4D] transition-colors">
                                      {srv.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-[#9CA3AF] line-clamp-1">
                                      {srv.tagline}
                                    </div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Megamenu Bottom Bar */}
                      <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-4 text-slate-500 dark:text-[#9CA3AF] font-mono text-[11px]">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D]" />
                            <span>Google Certified Partner</span>
                          </span>
                          <span>•</span>
                          <span>14+ Years in Business</span>
                          <span>•</span>
                          <span>110+ Clients Worldwide</span>
                        </div>

                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenContact('Navigation Megamenu Strategy Call');
                          }}
                          className="inline-flex items-center gap-1 font-bold text-lime-600 dark:text-[#C6FF4D] hover:underline cursor-pointer"
                        >
                          <span>Free Strategy Call</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
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
                className="hover:text-slate-950 dark:hover:text-[#F5F7FA] transition-colors whitespace-nowrap py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 dark:bg-[#C6FF4D] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Theme Switcher (Zone 3) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl text-slate-700 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F5F7FA] bg-slate-100 dark:bg-[#11151D]/80 hover:bg-slate-200 dark:hover:bg-[#161B26] border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 dark:text-[#C6FF4D]" />
            )}
          </button>

          {/* Client Portal Mode Button: "Edit Mode" (prompts login) vs "Website Mode" (logs out) */}
          <button
            onClick={() => {
              if (isAuthenticated) {
                // Clicking Website Mode logs out and returns to clean website
                logout();
              } else {
                // Clicking Edit Mode prompts for login credentials
                setIsLoginModalOpen(true);
              }
            }}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl transition-all cursor-pointer border flex items-center gap-1.5 ${
              isAuthenticated
                ? 'bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] border-lime-500/40 hover:bg-lime-500/30 shadow-xs'
                : 'bg-slate-100 dark:bg-[#11151D]/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white'
            }`}
            title={
              isAuthenticated
                ? 'Switch to Website Mode (Log out of Edit Mode)'
                : 'Enter Edit Mode (Requires Login)'
            }
            aria-label={
              isAuthenticated
                ? 'Switch to Website Mode'
                : 'Enter Edit Mode'
            }
          >
            {isAuthenticated ? (
              <>
                <Eye className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D]" />
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                  Website Mode
                </span>
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4" />
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  Edit Mode
                </span>
              </>
            )}
          </button>

          {/* Master Prompt CTA: "Talk to Us" - opens email client in new tab/window */}
          <MagneticButton
            href="mailto:akram@asearchonline.com?subject=Strategic%20Consultation%20Inquiry%20-%20ASearch%20Online"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="hidden sm:inline-flex text-xs uppercase tracking-wider py-2.5 px-5 font-extrabold cursor-pointer"
          >
            <span>Talk to Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-[#F5F7FA] bg-slate-100 dark:bg-[#11151D]/80 border border-slate-200 dark:border-white/10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl bg-white/98 dark:bg-[#0D1017]/98 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 text-left">
            {/* Mobile Services with Submenu Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full flex items-center justify-between text-base font-semibold text-slate-800 dark:text-[#F5F7FA] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors py-2 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform',
                    mobileServicesExpanded ? 'rotate-180 text-lime-600 dark:text-[#C6FF4D]' : ''
                  )}
                />
              </button>

              {mobileServicesExpanded && (
                <div className="pl-3 pr-1 py-2 space-y-3 bg-slate-50 dark:bg-[#11151D] rounded-xl my-1 border border-slate-200 dark:border-white/5">
                  <div className="text-[11px] font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D] px-2">
                    Digital Marketing & Strategy
                  </div>
                  <div className="space-y-1">
                    {marketingServices.map((srv) => (
                      <a
                        key={srv.id}
                        href="#services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F5F7FA] py-1 px-2 rounded-md"
                      >
                        {srv.title}
                      </a>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono font-bold uppercase text-indigo-500 dark:text-[#8B5CF6] px-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
                    Technology & Automation
                  </div>
                  <div className="space-y-1">
                    {techServices.map((srv) => (
                      <a
                        key={srv.id}
                        href="#services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-medium text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F5F7FA] py-1 px-2 rounded-md"
                      >
                        {srv.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Mobile Nav Links */}
            {navLinks.filter(l => !l.isDropdown).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 dark:text-[#F5F7FA] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors py-2 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 space-y-2">
            <div className="text-[11px] text-slate-500 dark:text-[#9CA3AF] font-mono text-center">
              Google Certified Partner • 14+ Years in Business
            </div>
            <MagneticButton
<<<<<<< Updated upstream
              href="mailto:akram@asearchonline.com?subject=Strategic%20Consultation%20Inquiry%20-%20ASearch%20Online"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
=======
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = 'mailto:akram@asearchonline.com?subject=Strategic%20Consultation%20Inquiry%20-%20ASearch%20Online';
              }}
>>>>>>> Stashed changes
              variant="primary"
              className="w-full text-xs uppercase tracking-wider py-3"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      )}
    </header>
  );
};
