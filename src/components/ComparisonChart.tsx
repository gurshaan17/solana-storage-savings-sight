
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
// The import below was commented out as 'useSolanaCostCalculator' is not directly used for types here, 
// and we are defining the expected structure for 'results' explicitly.
// import { useSolanaCostCalculator } from '@/hooks/useSolanaCostCalculator'; // For types
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js'; // Adjust path as necessary

const fullConfig = resolveConfig(tailwindConfig);

// Define the structure for the calculation results
interface CalculationResults {
  uncompressedCostSol: number;
  uncompressedCostUsd: number;
  compressedCostSol: number;
  compressedCostUsd: number;
}

// Define the props for the ComparisonChart component
interface ComparisonChartProps {
  results: CalculationResults | null;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ results }) => {
  if (!results) {
    return null;
  }

  const data = [
    { name: 'Uncompressed', SOL: results.uncompressedCostSol, USD: results.uncompressedCostUsd },
    { name: 'ZK Compressed', SOL: results.compressedCostSol, USD: results.compressedCostUsd },
  ];
  
  // Using Tailwind theme colors resolved at runtime
  const uncompressedColor = (fullConfig.theme.colors as any).destructive.cost || "#FF6B6B";
  const compressedColor = (fullConfig.theme.colors as any).brandPurple || "#7F56D9";
  const textColor = (fullConfig.theme.colors as any).foreground || "#F8FAFC";
  const mutedColor = (fullConfig.theme.colors as any).muted.foreground || "#A0AEC0";
  const inputDarkColor = (fullConfig.theme.colors as any).inputDark || '#10141C';
  const borderColor = (fullConfig.theme.colors as any).border || '#4A5568';


  return (
    <Card className="w-full mt-8 bg-transparent border-slate-700 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Cost Comparison (SOL)</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={data} margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={mutedColor} />
              <XAxis dataKey="name" stroke={mutedColor} tick={{ fill: mutedColor }} />
              <YAxis 
                stroke={mutedColor}
                tick={{ fill: mutedColor }}
                label={{ value: 'Cost in SOL', angle: -90, position: 'insideLeft', offset: -10, style: { textAnchor: 'middle', fill: mutedColor } }}
                tickFormatter={(value) => value.toExponential(2)}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: inputDarkColor, border: `1px solid ${borderColor}`, borderRadius: '0.5rem' }}
                labelStyle={{ color: textColor }}
                itemStyle={{ color: textColor }}
                formatter={(value: number, name: string, entry) => {
                    // The 'entry' parameter provides access to the full data point for this tooltip item
                    // We use entry.payload.name to determine if it's 'Uncompressed' or 'ZK Compressed'
                    const BarColor = entry.payload.name === 'Uncompressed' ? uncompressedColor : compressedColor;
                    // Ensure value is treated as a number before calling toFixed
                    const numericValue = Number(value);
                    return [<span style={{ color: BarColor }}>{name === 'SOL' ? `${numericValue.toFixed(6)} SOL` : `$${numericValue.toFixed(2)}`}</span>, name];
                }}
              />
              <Legend wrapperStyle={{ color: mutedColor }} />
              <Bar dataKey="SOL" name="Cost in SOL">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? uncompressedColor : compressedColor} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonChart;
