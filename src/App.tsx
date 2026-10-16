import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { CMSProvider } from './context/CMSContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/ui/Marquee';
import { ServicesBento } from './components/ServicesBento';
import { FeaturedWork } from './components/FeaturedWork';
import { InteractiveProcess } from './components/InteractiveProcess';
import { GrowthSimulator } from './components/GrowthSimulator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { IndustriesSection } from './components/IndustriesSection';
import { InteractiveAudit } from './components/InteractiveAudit';
import { TechEcosystem } from './components/TechEcosystem';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DiscoveryModal } from './components/DiscoveryModal';
import { CMSAdminBar } from './components/cms/CMSAdminBar';
import { CMSEditorDrawer } from './components/cms/CMSEditorDrawer';
import { ClientLoginModal } from './components/cms/ClientLoginModal';
import { GitHubDeployModal } from './components/cms/GitHubDeployModal';

function AppContent() {
  // Always default to 'dark' theme as requested
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('asearch_theme') as ThemeMode;
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [isDiscoveryOpen, setIsDiscoveryOpen] = useState(false);
  const [discoveryNotes, setDiscoveryNotes] = useState('');

  // Keep dark class synchronized on document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('asearch_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenDiscovery = (context = '') => {
    setDiscoveryNotes(context);
    setIsDiscoveryOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditReview = (domain: string, score: number) => {
    handleOpenDiscovery(`Architecture Diagnostic Review for ${domain} (Score: ${score}/100). Requesting 90-day technical remediation roadmap.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07080B] text-slate-900 dark:text-[#F5F7FA] transition-colors selection:bg-[#C6FF4D] selection:text-[#07080B]">
      {/* Floating Glassmorphic Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={handleOpenDiscovery}
      />

      <main>
        {/* 1. Cinematic Hero Section with full-bleed stars, clear left backdrop, and pure Edge Matrix */}
        <Hero
          theme={theme}
          onOpenContact={() => handleOpenDiscovery('Hero CTA: Let\'s Build Something Great')}
          onExploreWork={handleExploreWork}
        />

        {/* 2. Client & Capabilities Marquee Ticker */}
        <Marquee />

        {/* 3. Capabilities Bento Grid (All Core Services from asearchonline.com) */}
        <ServicesBento onOpenContact={(service) => handleOpenDiscovery(`Service Inquiry: ${service || 'General'}`)} />

        {/* 4. Featured Case Studies & Quantified Impact */}
        <FeaturedWork onOpenContact={(project) => handleOpenDiscovery(project || 'Case Study Replicate Request')} />

        {/* 5. Four-Stage Growth Methodology */}
        <InteractiveProcess />

        {/* 6. Why Choose Us (6 Advantages Bento) */}
        <WhyChooseUs />

        {/* 7. Voices of Satisfaction: Verified Client Outcomes */}
        <TestimonialsCarousel />

        {/* 8. Vertical Playbooks: 8 Industries We Serve */}
        <IndustriesSection onOpenStrategyCall={(industry) => handleOpenDiscovery(industry || 'Industry Consultation')} />

        {/* 9. Interactive Growth & Search Pipeline ROI Simulator */}
        <GrowthSimulator
          onApplyProjection={(summary) => handleOpenDiscovery(`ROI Simulator Projection: ${summary}`)}
        />

        {/* 10. Architecture Diagnostic Scanner (Passive 6-Pillar Audit) */}
        <InteractiveAudit onRequestAuditReview={handleAuditReview} />

        {/* 11. Modern Growth Tech Stack Ecosystem */}
        <TechEcosystem />

        {/* 12. About ASearch Online Media Private Limited */}
        <AboutUs onOpenStrategyCall={() => handleOpenDiscovery('About Us Inquiry')} />

        {/* 13. Direct Contact Form & Interactive FAQ Accordion */}
        <ContactSection />
      </main>

      {/* 14. World-Class Comprehensive Footer */}
      <Footer onOpenStrategyCall={() => handleOpenDiscovery('Footer CTA')} />

      {/* 15. Multi-Step Strategic Consultation Modal */}
      <DiscoveryModal
        isOpen={isDiscoveryOpen}
        onClose={() => setIsDiscoveryOpen(false)}
        prefilledNotes={discoveryNotes}
      />

      {/* CMS Administration Bar (Floating, shown when logged in) */}
      <CMSAdminBar />

      {/* CMS Full Section & Image Editor Drawer */}
      <CMSEditorDrawer />

      {/* Client & Admin Portal Authentication Modal */}
      <ClientLoginModal />

      {/* GitHub Commit & Vercel Live Deploy Modal */}
      <GitHubDeployModal />
    </div>
  );
}

export default function App() {
  return (
    <CMSProvider>
      <AppContent />
    </CMSProvider>
  );
}
