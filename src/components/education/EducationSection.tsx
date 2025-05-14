
import React from 'react';
import HowItWorksSection from './HowItWorksSection';
import BenefitsSection from './BenefitsSection';
import TechnicalConceptsSection from './TechnicalConceptsSection';
import FaqSection from './FaqSection';
import DeveloperResourcesSection from './DeveloperResourcesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react'; // Using BookOpen as a general education icon

const EducationSection: React.FC = () => {
  return (
    <Card className="w-full mt-12 bg-background/70 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center bg-secondary-solana text-secondary-foreground p-3 rounded-full mb-4 shadow-lg mx-auto">
          <BookOpen size={40} />
        </div>
        <CardTitle className="text-4xl font-extrabold text-primary-solana">
          Understanding ZK Compression
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
