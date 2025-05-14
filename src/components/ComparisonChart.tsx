
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useSolanaCostCalculator } from '@/hooks/useSolanaCostCalculator'; // For types
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComparisonChartProps {
  results: ReturnType<typeof useSolanaCostCalculator>['results'];
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ results }) => {
  if (!results) {
    return null;
  }

  const data = [
    { name: 'Uncompressed', SOL: results.uncompressedCostSol, USD: results.uncompressedCostUsd },
    { name: 'ZK Compressed', SOL: results.compressedCostSol, USD: results.compressedCostUsd },
  ];
  
  // Using Tailwind theme colors. Resolve these to actual hex values for Recharts.
  // For simplicity, hardcoding approximations. In a real app, you'd get these from CSS vars or a theme context.
  const uncompressedColor = "#ea384c"; // approx destructive.cost
  const compressedColor = "#33C3F0"; // approx accent.savings
  // const solanaBlue = "#14F195"; // approx secondary.solana

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <CardTitle className="text-2xl text-primary-solana">Cost Comparison (SOL)</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={data} margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name"  />
              <YAxis 
                label={{ value: 'Cost in SOL', angle: -90, position: 'insideLeft', offset: -10, style: { textAnchor: 'middle' } }}
                tickFormatter={(value) => value.toExponential(2)}
              />
              <Tooltip formatter={(value: number, name: string) => [name === 'SOL' ? `${value.toFixed(6)} SOL` : `$${value.toFixed(2)}`, name]} />
              <Legend />
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
