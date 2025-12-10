import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import ProjectsGrid from '../components/ProjectsGrid';
import ResearchBlock from '../components/ResearchBlock';
import TechStack from '../components/TechStack';
import ProofOfProduction from '../components/ProofOfProduction';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo />
      <ProjectsGrid />
      <ResearchBlock />
      <TechStack />
      <ProofOfProduction />
      <CTA />
      <Footer />
    </main>
  );
}
