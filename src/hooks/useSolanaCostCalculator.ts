
import { useState, useCallback } from 'react';

const SOL_PRICE_USD = 150; // Placeholder USD price for 1 SOL
const UNCOMPRESSED_BASE_ACCOUNT_SIZE_BYTES = 128; // Base size for any Solana account
const COST_PER_BYTE_PER_YEAR_SOL = 0.00000348; // Approximate cost, simplified
const ZK_COMPRESSED_ACCOUNT_FLAT_COST_SOL_PER_YEAR = 0.00001; // Highly simplified flat cost for a compressed account per year

interface CostParams {
  numAccounts: number;
  dataSizePerAccountBytes: number;
  duration: number;
  durationUnit: 'months' | 'years';
}

interface CostResult {
  uncompressedCostSol: number;
  uncompressedCostUsd: number;
  compressedCostSol: number;
  compressedCostUsd: number;
  savingsSol: number;
  savingsUsd: number;
  savingsPercentage: number;
}

export function useSolanaCostCalculator() {
  const [results, setResults] = useState<CostResult | null>(null);

  const calculateCosts = useCallback(({ numAccounts, dataSizePerAccountBytes, duration, durationUnit }: CostParams) => {
    if (numAccounts <= 0 || dataSizePerAccountBytes < 0 || duration <= 0) {
      setResults(null);
      return;
    }

    let effectiveYears = duration;
    if (durationUnit === 'months') {
      effectiveYears = duration / 12;
    }

    // Uncompressed cost calculation
    const totalBytesUncompressed = (UNCOMPRESSED_BASE_ACCOUNT_SIZE_BYTES + dataSizePerAccountBytes) * numAccounts;
    const uncompressedCostSolAnnual = totalBytesUncompressed * COST_PER_BYTE_PER_YEAR_SOL;
    const uncompressedCostSol = uncompressedCostSolAnnual * effectiveYears;
    const uncompressedCostUsd = uncompressedCostSol * SOL_PRICE_USD;

    // Compressed cost calculation (simplified)
    const compressedCostSolAnnual = numAccounts * ZK_COMPRESSED_ACCOUNT_FLAT_COST_SOL_PER_YEAR;
    const compressedCostSol = compressedCostSolAnnual * effectiveYears;
    const compressedCostUsd = compressedCostSol * SOL_PRICE_USD;
    
    const savingsSol = uncompressedCostSol - compressedCostSol;
    const savingsUsd = uncompressedCostUsd - compressedCostUsd;
    const savingsPercentage = uncompressedCostSol > 0 ? (savingsSol / uncompressedCostSol) * 100 : 0;

    setResults({
      uncompressedCostSol,
      uncompressedCostUsd,
      compressedCostSol,
      compressedCostUsd,
      savingsSol: Math.max(0, savingsSol),
      savingsUsd: Math.max(0, savingsUsd),
      savingsPercentage: Math.max(0, Math.min(100, savingsPercentage)),
    });
  }, []);

  return { results, calculateCosts, SOL_PRICE_USD };
}

