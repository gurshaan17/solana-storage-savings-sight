
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSolanaCostCalculator } from '@/hooks/useSolanaCostCalculator'; 

interface CostResultsDisplayProps {
  results: ReturnType<typeof useSolanaCostCalculator>['results'];
  solPriceUsd: number;
}

const CostResultsDisplay: React.FC<CostResultsDisplayProps> = ({ results, solPriceUsd }) => {
  if (!results) {
    return null;
  }

  const formatSol = (amount: number) => amount.toFixed(6) + " SOL";
  const formatUsd = (amount: number) => "$" + amount.toFixed(2) + " USD";

  return (
    <Card className="w-full bg-cardDark border-slate-700 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Estimated Costs & Savings</CardTitle>
        <p className="text-sm text-muted-foreground">(Based on SOL @ ${solPriceUsd})</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">Uncompressed Accounts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive-cost">
            <p className="text-md"><strong className="text-destructive-cost font-medium">Cost (SOL):</strong> <span className="text-foreground">{formatSol(results.uncompressedCostSol)}</span></p>
            <p className="text-md"><strong className="text-destructive-cost font-medium">Cost (USD):</strong> <span className="text-foreground">{formatUsd(results.uncompressedCostUsd)}</span></p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">ZK Compressed Accounts</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-brandPurple/10 rounded-lg border border-brandPurple">
            <p className="text-md"><strong className="text-brandPurple font-medium">Cost (SOL):</strong> <span className="text-foreground">{formatSol(results.compressedCostSol)}</span></p>
            <p className="text-md"><strong className="text-brandPurple font-medium">Cost (USD):</strong> <span className="text-foreground">{formatUsd(results.compressedCostUsd)}</span></p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">Total Savings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-accent-savings/10 rounded-lg border border-accent-savings">
            <p className="text-md"><strong className="text-accent-savings font-medium">Savings (SOL):</strong> <span className="text-foreground">{formatSol(results.savingsSol)}</span></p>
            <p className="text-md"><strong className="text-accent-savings font-medium">Savings (USD):</strong> <span className="text-foreground">{formatUsd(results.savingsUsd)}</span></p>
            <p className="text-xl font-bold text-accent-savings">~{results.savingsPercentage.toFixed(2)}% Saved</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostResultsDisplay;
