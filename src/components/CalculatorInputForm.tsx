
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
      // Consider adding user-facing error feedback here, e.g., using a toast
    }
  };

  return (
    <Card className="w-full max-w-md bg-transparent backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/60">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">Cost Calculator Inputs</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="numAccounts" className="text-sm font-medium text-muted-foreground px-1">Number of Accounts</Label>
            <Input
              id="numAccounts"
              type="number"
              value={numAccounts}
              onChange={(e) => setNumAccounts(e.target.value)}
              placeholder="e.g., 1000"
              min="1"
              required
              className="bg-inputDark border-slate-600/80 text-foreground placeholder:text-muted-foreground/70 focus:ring-brandPurple rounded-full py-3 px-4 h-auto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dataSize" className="text-sm font-medium text-muted-foreground px-1">Average Data Size per Account (Bytes)</Label>
            <Input
              id="dataSize"
              type="number"
              value={dataSize}
              onChange={(e) => setDataSize(e.target.value)}
              placeholder="e.g., 256"
              min="0"
              required
              className="bg-inputDark border-slate-600/80 text-foreground placeholder:text-muted-foreground/70 focus:ring-brandPurple rounded-full py-3 px-4 h-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-medium text-muted-foreground px-1">Duration</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 1"
                min="1"
                required
                className="bg-inputDark border-slate-600/80 text-foreground placeholder:text-muted-foreground/70 focus:ring-brandPurple rounded-full py-3 px-4 h-auto"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="durationUnit" className="text-sm font-medium text-muted-foreground px-1">Unit</Label>
              <Select value={durationUnit} onValueChange={(value: 'months' | 'years') => setDurationUnit(value)}>
                <SelectTrigger id="durationUnit" className="bg-inputDark border-slate-600/80 text-foreground focus:ring-brandPurple rounded-full py-3 px-4 h-auto">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent className="bg-cardDark border-slate-600 text-foreground">
                  <SelectItem value="months" className="hover:bg-slate-700 focus:bg-slate-700">Months</SelectItem>
                  <SelectItem value="years" className="hover:bg-slate-700 focus:bg-slate-700">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-brandPurple hover:bg-brandPurple/90 text-white text-lg py-3 transition-all duration-150 ease-in-out ring-2 ring-transparent hover:ring-brandPurple/50 focus:ring-brandPurple rounded-full h-auto"
          >
            Calculate Savings
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CalculatorInputForm;
