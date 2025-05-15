
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, ArrowUp } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Layers className="h-10 w-10 text-accent-savings" />,
      title: "Improved Scalability",
      description: "Support millions of accounts without bloating the blockchain, enabling larger-scale applications.",
    },
    {
      icon: <ArrowUp className="h-10 w-10 text-accent-savings" />,
      title: "Faster Transactions",
      description: "Reduced data size can contribute to faster transaction processing and confirmation times.",
    },
  ];

  return (
    <Card className="bg-inputDark border-slate-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">Key Benefits Beyond Cost Savings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-cardDark/50 rounded-lg space-y-3 border border-slate-700/50">
              <div className="p-3 bg-accent-savings/20 rounded-full">
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-xl text-foreground">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BenefitsSection;
