import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BootLoader } from './components/layout/BootLoader';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ComprehensiveAboutSection } from './components/sections/ComprehensiveAboutSection';
import { JourneySection } from './components/sections/JourneySection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { MainProjectSection } from './components/sections/MainProjectSection';
import { OtherProjectsSection } from './components/sections/OtherProjectsSection';
import { LabSection } from './components/sections/LabSection';
import { EngineeringPrinciplesSection } from './components/sections/EngineeringPrinciplesSection';
import { GitHubSection } from './components/sections/GitHubSection';
import { CodingAndBlogSection } from './components/sections/CodingAndBlogSection';
import { ServicesAndOpportunitiesSection } from './components/sections/ServicesAndOpportunitiesSection';
import { CodeWindowSection } from './components/sections/CodeWindowSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { CommandCenter } from './components/layout/CommandCenter';
import { ResumeModal } from './components/layout/ResumeModal';
import { useAppStore } from './store/useAppStore';

import { ErrorBoundary } from './components/layout/ErrorBoundary';

const queryClient = new QueryClient();

export function App() {
  const { initialized, setInitialized } = useAppStore();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500 selection:text-black antialiased overflow-x-hidden">
        <CustomCursor />
        {!initialized && <BootLoader onComplete={() => setInitialized(true)} />}
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ComprehensiveAboutSection />
          <JourneySection />
          <ExperienceSection />
          <SkillsSection />
          <MainProjectSection />
          <OtherProjectsSection />
          <EngineeringPrinciplesSection />
          <LabSection />
          <GitHubSection />
          <CodingAndBlogSection />
          <ServicesAndOpportunitiesSection />
          <CodeWindowSection />
          <ContactSection />
        </main>
        <Footer />
        <CommandCenter />
        <ResumeModal />
      </div>
    </QueryClientProvider>
  </ErrorBoundary>
  );
}

export default App;
