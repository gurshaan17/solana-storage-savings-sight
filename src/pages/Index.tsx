import CalculatorInputForm from "@/components/CalculatorInputForm";
import CostResultsDisplay from "@/components/CostResultsDisplay";
import ComparisonChart from "@/components/ComparisonChart";
import { useSolanaCostCalculator } from "@/hooks/useSolanaCostCalculator";
import { Leaf } from "lucide-react"; // Using Leaf for ZK/green tech vibe
import EducationSection from "@/components/education/EducationSection";

const Index = () => {
  const { results, calculateCosts, SOL_PRICE_USD } = useSolanaCostCalculator();

  return (
    <div 
      className="min-h-screen bg-background text-foreground py-8 px-4 flex flex-col items-center selection:bg-primary-solana/30 selection:text-white bg-[url('/Container.png')] bg-cover bg-center bg-fixed"
    >
      <header className="text-center mt-24 mb-12 max-w-4xl  backdrop-blur-sm p-6 rounded-lg shadow-xl">
         <p className="text-sm font-medium mb-4 inline-block bg-black/40 text-[#D6BCFA] px-6 py-2 rounded-full shadow-md border border-slate-600">Innovative Cost Calculator</p>
        <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-3 tracking-tight">
          <span
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FFECE0 70%, #6A82FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Solana ZK Compression
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #FFFFFF 0%, #FFECE0 70%, #6A82FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Storage Cost Visualizer
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Interactively explore the significant rent savings achieved by using ZK compressed accounts on Solana compared to traditional accounts.
          Enter your parameters below to see the difference.
        </p>
      </header>

      <div className="w-full max-w-5xl space-y-12 pt-28">
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
      
      <footer className="mt-20 text-center text-sm text-muted-foreground/80 backdrop-blur-sm p-4 rounded-lg shadow-xl">
        <p>&copy; {new Date().getFullYear()} Solana Storage Cost Visualizer. All calculations are estimates.</p>
        <p>Inspired by the potential of ZK technology on Solana.</p>
      </footer>
    </div>
  );
};

export default Index;
