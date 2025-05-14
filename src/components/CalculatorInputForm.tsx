
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

interface CalculatorInputFormProps {
  onCalculate: (params: { numAccounts: number; dataSizePerAccountBytes: number }) => void;
}

const CalculatorInputForm: React.FC<CalculatorInputFormProps> = ({ onCalculate }) => {
  const [numAccounts, setNumAccounts] = useState<string>('1000');
  const [dataSize, setDataSize] = useState<string>('256'); // e.g., bytes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedNumAccounts = parseInt(numAccounts, 10);
    const parsedDataSize = parseInt(dataSize, 10);

    if (!isNaN(parsedNumAccounts) && !isNaN(parsedDataSize) && parsedNumAccounts > 0 && parsedDataSize >= 0) {
      onCalculate({ numAccounts: parsedNumAccounts, dataSizePerAccountBytes: parsedDataSize });
    } else {
      // Basic error handling or rely on parent for more sophisticated validation
      console.error("Invalid input values");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-primary-solana">Cost Calculator Inputs</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="numAccounts" className="text-lg">Number of Accounts</Label>
            <Input
              id="numAccounts"
              type="number"
              value={numAccounts}
              onChange={(e) => setNumAccounts(e.target.value)}
              placeholder="e.g., 1000"
              min="1"
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataSize" className="text-lg">Average Data Size per Account (Bytes)</Label>
            <Input
              id="dataSize"
              type="number"
              value={dataSize}
              onChange={(e) => setDataSize(e.target.value)}
              placeholder="e.g., 256"
              min="0"
              required
              className="text-base"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-primary-solana hover:bg-primary-solana/90 text-primary-foreground text-lg py-3">
            Calculate Savings
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CalculatorInputForm;
