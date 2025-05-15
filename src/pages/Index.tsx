
import CalculatorInputForm from "@/components/CalculatorInputForm";
import CostResultsDisplay from "@/components/CostResultsDisplay";
import ComparisonChart from "@/components/ComparisonChart";
import { useSolanaCostCalculator } from "@/hooks/useSolanaCostCalculator";
import { Leaf } from "lucide-react"; // Using Leaf for ZK/green tech vibe
import EducationSection from "@/components/education/EducationSection";

const Index = () => {
  const { results, calculateCosts, SOL_PRICE_USD } = useSolanaCostCalculator();

  // Assuming 'dark' class is applied to html or body tag elsewhere for dark mode
  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 flex flex-col items-center selection:bg-primary-solana/30 selection:text-white">
      <header className="text-center mb-12 max-w-4xl">
        <div className="inline-flex items-center justify-center bg-cardDark text-primary-foreground p-2.5 rounded-full mb-3 shadow-lg ring-1 ring-primary-solana/50">
          <Leaf size={36} className="text-primary-solana" />
        </div>
         <p className="text-sm text-primary-solana font-medium mb-2">Innovative Cost Calculator</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-3 tracking-tight">
          Solana ZK <span className="text-brandPurple">Compression</span>
          <br />
          Storage Cost <span className="text-brandPurple">Visualizer</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Interactively explore the significant rent savings achieved by using ZK compressed accounts on Solana compared to traditional accounts.
          Enter your parameters below to see the difference.
        </p>
      </header>

      <div className="w-full max-w-5xl space-y-12">
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

        <EducationSection />
      </div>
      
      <footer className="mt-20 text-center text-sm text-muted-foreground/80">
        <p>&copy; {new Date().getFullYear()} Solana Storage Cost Visualizer. All calculations are estimates.</p>
        <p>Inspired by the potential of ZK technology on Solana.</p>
      </footer>
    </div>
  );
};

export default Index;
