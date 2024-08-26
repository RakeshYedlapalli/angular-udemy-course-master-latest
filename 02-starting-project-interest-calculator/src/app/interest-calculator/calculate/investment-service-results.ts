// Use the below code as a help
// e.g., integrate it into a service or component

import { Injectable } from "@angular/core";
import { InvestmentResult } from "./investment-result.model";

// You may need to tweak it, depending on where and how you use it
@Injectable({ providedIn: 'root' })
export class InvestmentService {

  initialInvestment!: number;
  duration!: number;
  expectedReturn!: number;
  annualInvestment!: number;

  
   calculateInvestmentResults(): InvestmentResult[] {
    let investmentResults: InvestmentResult[] = [];
    let initialInvestment = this.initialInvestment;
  
    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = initialInvestment * (this.expectedReturn / 100);
      initialInvestment += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
      initialInvestment - this.annualInvestment * year - this.initialInvestment;
        investmentResults.push({
        year: year,
        interest: interestEarnedInYear,
        initialInvestment: initialInvestment,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }
  
    return investmentResults;
  }
  
}


