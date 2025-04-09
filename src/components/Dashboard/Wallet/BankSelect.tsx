"use client";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { banks } from "./banks"; // Adjust the import path as necessary
  

interface BankSelectProps {
  onSelect: (bankName: string) => void;
  setVerified: (verified: boolean) => void;
}

export const BankSelect: React.FC<BankSelectProps> = ({ onSelect, setVerified }) => {
  
  return (
    <div className="space-y-2">
      <Select onValueChange={(e)=> {
        onSelect(e); 
        setVerified(false); 
      }}>
        <SelectTrigger>
          <SelectValue placeholder="Select your bank" />
        </SelectTrigger>
        <SelectContent>
          {banks.map((bank) => (
            <SelectItem key={bank.code} value={bank.code}>
              {bank.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
