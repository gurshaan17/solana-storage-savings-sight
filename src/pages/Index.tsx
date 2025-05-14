
import CalculatorInputForm from "@/components/CalculatorInputForm";
import CostResultsDisplay from "@/components/CostResultsDisplay";
import ComparisonChart from "@/components/ComparisonChart";
import { useSolanaCostCalculator } from "@/hooks/useSolanaCostCalculator";
import { Leaf } from "lucide-react"; // Using Leaf for ZK/green tech vibe

const Index = () => {
  const { results, calculateCosts, SOL_PRICE_USD } = useSolanaCostCalculator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-50 dark:from-slate-900 dark:to-primary-solana/20 py-8 px-4 flex flex-col items-center">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary-solana text-primary-foreground p-3 rounded-full mb-4 shadow-lg">
          <Leaf size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-primary-solana mb-3 tracking-tight">
          Solana ZK Compression
        </h1>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-solana to-accent-savings mb-6">
          Storage Cost Visualizer
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interactively explore the significant rent savings achieved by using ZK compressed accounts on Solana compared to traditional accounts.
          Enter your parameters below to see the difference.
        </p>
      </header>

      <div className="w-full max-w-5xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <CalculatorInputForm onCalculate={calculateCosts} />
          </div>
          
          {results && (
            <div className="md:col-span-2 space-y-8">
              <CostResultsDisplay results={results} solPriceUsd={SOL_PRICE_USD} />
            </div>
          )}
        </div>
        
        {results && (
          <div className="w-full">
            <ComparisonChart results={results} />
          </div>
        )}
      </div>
      
      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Solana Storage Cost Visualizer. All calculations are estimates.</p>
        <p>Inspired by the potential of ZK technology on Solana.</p>
      </footer>
    </div>
  );
};

export default Index;
