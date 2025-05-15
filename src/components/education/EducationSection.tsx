
import React from 'react';
import HowItWorksSection from './HowItWorksSection';
import BenefitsSection from './BenefitsSection';
import TechnicalConceptsSection from './TechnicalConceptsSection';
import FaqSection from './FaqSection';
import DeveloperResourcesSection from './DeveloperResourcesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <Card className="w-full mt-12 bg-cardDark border-slate-700 shadow-xl">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center bg-inputDark text-primary-foreground p-3 rounded-full mb-4 shadow-lg mx-auto ring-1 ring-brandPurple/50">
          <BookOpen size={40} className="text-brandPurple" />
        </div>
        <CardTitle className="text-4xl font-extrabold text-foreground">
          Understanding ZK <span className="text-brandPurple">Compression</span>
        </CardTitle>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
          Dive deeper into how ZK compression revolutionizes storage on Solana.
        </p>
      </CardHeader>
      <CardContent className="space-y-10 px-4 md:px-8 py-8">
        <HowItWorksSection />
        <BenefitsSection />
        <TechnicalConceptsSection />
        <FaqSection />
        <DeveloperResourcesSection />
      </CardContent>
    </Card>
  );
};

export default EducationSection;
