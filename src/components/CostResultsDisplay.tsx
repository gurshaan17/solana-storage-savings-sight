
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
    <Card className="w-full bg-transparent backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/60">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Estimated Costs & Savings</CardTitle>
        <p className="text-sm text-muted-foreground">(Based on SOL @ ${solPriceUsd})</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">Uncompressed Accounts</h3>
          <div className="bg-destructive-cost/80 rounded-2xl p-4 sm:p-6 shadow-lg border border-destructive-cost/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 items-center text-center sm:text-left">
              <p className="text-md"><strong className="text-red-200 font-medium">Cost (SOL):</strong> <span className="text-white font-semibold">{formatSol(results.uncompressedCostSol)}</span></p>
              <p className="text-md"><strong className="text-red-200 font-medium">Cost (USD):</strong> <span className="text-white font-semibold">{formatUsd(results.uncompressedCostUsd)}</span></p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">ZK Compressed Accounts</h3>
           <div className="bg-brandPurple/80 rounded-2xl p-4 sm:p-6 shadow-lg border border-brandPurple/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 items-center text-center sm:text-left">
              <p className="text-md"><strong className="text-purple-200 font-medium">Cost (SOL):</strong> <span className="text-white font-semibold">{formatSol(results.compressedCostSol)}</span></p>
              <p className="text-md"><strong className="text-purple-200 font-medium">Cost (USD):</strong> <span className="text-white font-semibold">{formatUsd(results.compressedCostUsd)}</span></p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted-foreground">Total Savings</h3>
          <div className="bg-accent-savings/80 rounded-2xl p-4 sm:p-6 shadow-lg border border-accent-savings/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 items-center text-center sm:text-left">
              <p className="text-md"><strong className="text-green-200 font-medium">Savings (SOL):</strong> <span className="text-white font-semibold">{formatSol(results.savingsSol)}</span></p>
              <p className="text-md"><strong className="text-green-200 font-medium">Savings (USD):</strong> <span className="text-white font-semibold">{formatUsd(results.savingsUsd)}</span></p>
              <p className="text-xl font-bold text-white sm:text-right">~{results.savingsPercentage.toFixed(2)}% Saved</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostResultsDisplay;
