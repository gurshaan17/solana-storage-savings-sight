
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers3, Database, ShieldCheck, SquareCheck, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Layers3 className="h-8 w-8 text-brandPurple" />,
      title: "Step 1: Data Compression",
      description: "Account data is compressed using efficient algorithms, reducing its size significantly.",
    },
    {
      icon: <Database className="h-8 w-8 text-brandPurple" />,
      title: "Step 2: Off-Chain Storage",
      description: "Compressed data is stored off-chain in a Merkle tree structure, with only the root hash on-chain.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brandPurple" />,
      title: "Step 3: ZK Proofs",
      description: "Zero-knowledge proofs verify data integrity without revealing the actual data, ensuring security.",
    },
    {
      icon: <SquareCheck className="h-8 w-8 text-brandPurple" />,
      title: "Step 4: On-Chain Verification",
      description: "The Solana blockchain verifies the proofs, ensuring data hasn't been tampered with.",
    },
  ];

  return (
    <Card className="bg-inputDark border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">How ZK Compression Works</CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          ZK Compression on Solana uses zero-knowledge proofs and Merkle trees to drastically reduce on-chain storage requirements while maintaining data integrity and security.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-around p-4 bg-cardDark/70 rounded-lg gap-4 border border-slate-600">
          <div className="text-center">
            <p className="font-semibold text-lg text-foreground">Compressed Account</p>
            <p className="text-3xl font-bold text-accent-savings">0.008 KB <span className="text-xs text-muted-foreground">(Example for small accounts)</span></p> {/* Updated example value */}
          </div>
          <ArrowRight className="h-8 w-8 text-muted-foreground hidden sm:block" />
           <p className="font-semibold text-sm text-center text-muted-foreground my-2 sm:my-0">via Merkle Tree + Zero-Knowledge Proofs</p>
          <ArrowRight className="h-8 w-8 text-muted-foreground hidden sm:block transform rotate-90 sm:rotate-0" />
          <div className="text-center">
            <p className="font-semibold text-lg text-foreground">Standard Account</p>
            <p className="text-3xl font-bold text-destructive-cost">~1 KB+ <span className="text-xs text-muted-foreground">(Varies by data)</span></p> {/* Updated example value */}
          </div>
        </div>

        <div className="text-center my-4">
          <Button variant="outline" className="border-brandPurple text-brandPurple hover:bg-brandPurple/10 hover:text-white">
            Play Animation (Concept)
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-cardDark/50 rounded-lg border border-slate-700/50">
              <div className="flex-shrink-0 mt-1">{step.icon}</div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HowItWorksSection;
