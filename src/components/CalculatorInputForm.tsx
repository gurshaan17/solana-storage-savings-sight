
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalculatorInputFormProps {
  onCalculate: (params: {
    numAccounts: number;
    dataSizePerAccountBytes: number;
    duration: number;
    durationUnit: 'months' | 'years';
  }) => void;
}

const CalculatorInputForm: React.FC<CalculatorInputFormProps> = ({ onCalculate }) => {
  const [numAccounts, setNumAccounts] = useState<string>('1000');
  const [dataSize, setDataSize] = useState<string>('256');
  const [duration, setDuration] = useState<string>('1');
  const [durationUnit, setDurationUnit] = useState<'months' | 'years'>('years');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedNumAccounts = parseInt(numAccounts, 10);
    const parsedDataSize = parseInt(dataSize, 10);
    const parsedDuration = parseInt(duration, 10);

    if (!isNaN(parsedNumAccounts) && !isNaN(parsedDataSize) && !isNaN(parsedDuration) && parsedNumAccounts > 0 && parsedDataSize >= 0 && parsedDuration > 0) {
      onCalculate({
        numAccounts: parsedNumAccounts,
        dataSizePerAccountBytes: parsedDataSize,
        duration: parsedDuration,
        durationUnit: durationUnit,
      });
    } else {
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-lg">Duration</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 1"
                min="1"
                required
                className="text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="durationUnit" className="text-lg">Unit</Label>
              <Select value={durationUnit} onValueChange={(value: 'months' | 'years') => setDurationUnit(value)}>
                <SelectTrigger id="durationUnit" className="text-base">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
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

