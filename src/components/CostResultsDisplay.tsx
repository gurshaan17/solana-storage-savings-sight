
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSolanaCostCalculator } from '@/hooks/useSolanaCostCalculator'; // For types, not direct usage here

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-primary-solana">Estimated Costs & Savings</CardTitle>
        <p className="text-sm text-muted-foreground">(Based on SOL @ ${solPriceUsd})</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-secondary-solana">Uncompressed Accounts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive-cost">
            <p className="text-lg"><strong className="text-destructive-cost">Cost (SOL):</strong> {formatSol(results.uncompressedCostSol)}</p>
            <p className="text-lg"><strong className="text-destructive-cost">Cost (USD):</strong> {formatUsd(results.uncompressedCostUsd)}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-secondary-solana">ZK Compressed Accounts</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-accent-savings/10 rounded-lg border border-accent-savings">
            <p className="text-lg"><strong className="text-accent-savings">Cost (SOL):</strong> {formatSol(results.compressedCostSol)}</p>
            <p className="text-lg"><strong className="text-accent-savings">Cost (USD):</strong> {formatUsd(results.compressedCostUsd)}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-primary-solana">Total Savings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500">
            <p className="text-lg"><strong className="text-green-600">Savings (SOL):</strong> {formatSol(results.savingsSol)}</p>
            <p className="text-lg"><strong className="text-green-600">Savings (USD):</strong> {formatUsd(results.savingsUsd)}</p>
            <p className="text-2xl font-bold text-green-600">~{results.savingsPercentage.toFixed(2)}% Saved</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostResultsDisplay;
