import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from './investment-service-results';
import { InvestmentResult } from './investment-result.model';

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {

  constructor(public investmentService: InvestmentService) {
    
  }

  @Output() calculate = new EventEmitter<InvestmentResult[]>();

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;



  onSubmit() {
    this.investmentService.initialInvestment = this.initialInvestment;
    this.investmentService.annualInvestment = this.annualInvestment;
    this.investmentService.expectedReturn = this.expectedReturn;
    this.investmentService.duration = this.duration;
    // console.log("Initial Investment: " + this.initialInvestment);
    // console.log("Initial Investment: " + this.annualInvestment);

    // console.log("Initial Investment: " + this.expectedReturn);

    // console.log("Initial Investment: " + this.duration);
   let result =  this.investmentService.calculateInvestmentResults();

   console.log("Result is ->", result);

   this.calculate.emit(result);
    
  }

}
