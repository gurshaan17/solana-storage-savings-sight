
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';

const DeveloperResourcesSection: React.FC = () => {
  // Placeholder links - replace with actual resource URLs
  const resources = [
    { name: "Solana Docs: State Compression", url: "#" },
    { name: "Bubblegum: Compressed NFTs Standard", url: "#" },
    { name: "Understanding Merkle Trees", url: "#" },
    { name: "Introduction to Zero-Knowledge Proofs", url: "#" },
  ];

  return (
    <Card className="bg-card/80">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-secondary-solana">Developer Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          Explore these resources to learn more about implementing ZK compression and related technologies on Solana.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <Button
              key={index}
              variant="outline"
              asChild
              className="justify-start text-left h-auto py-3 border-primary-solana text-primary-solana hover:bg-primary-solana/10"
            >
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-4 w-4" />
                {resource.name}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeveloperResourcesSection;
