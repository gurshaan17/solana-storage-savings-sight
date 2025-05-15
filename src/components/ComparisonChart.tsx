
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useSolanaCostCalculator } from '@/hooks/useSolanaCostCalculator'; // For types
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js'; // Adjust path as necessary

const fullConfig = resolveConfig(tailwindConfig);

const ComparisonChart: React.FC<ComparisonChartProps> = ({ results }) => {
  if (!results) {
    return null;
  }

  const data = [
    { name: 'Uncompressed', SOL: results.uncompressedCostSol, USD: results.uncompressedCostUsd },
    { name: 'ZK Compressed', SOL: results.compressedCostSol, USD: results.compressedCostUsd },
  ];
  
  // Using Tailwind theme colors resolved at runtime
  // These specific color keys 'destructive.cost', 'brandPurple' are from our tailwind.config.ts
  const uncompressedColor = fullConfig.theme.colors.destructive.cost || "#FF6B6B";
  const compressedColor = fullConfig.theme.colors.brandPurple || "#7F56D9";
  const textColor = fullConfig.theme.colors.foreground || "#F8FAFC";
  const mutedColor = fullConfig.theme.colors.muted.foreground || "#A0AEC0";


  return (
    <Card className="w-full mt-8 bg-cardDark border-slate-700 shadow-xl">
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
                contentStyle={{ backgroundColor: fullConfig.theme.colors.inputDark || '#10141C', border: `1px solid ${fullConfig.theme.colors.border || '#4A5568'}`, borderRadius: '0.5rem' }}
                labelStyle={{ color: textColor }}
                itemStyle={{ color: textColor }}
                formatter={(value: number, name: string, entry) => {
                    const color = entry.payload.name === 'Uncompressed' ? uncompressedColor : compressedColor;
                    return [<span style={{ color }}>{name === 'SOL' ? `${Number(value).toFixed(6)} SOL` : `$${Number(value).toFixed(2)}`}</span>, name];
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
