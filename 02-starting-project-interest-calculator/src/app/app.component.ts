import { Component } from '@angular/core';
import { CalculateComponent } from './interest-calculator/calculate/calculate.component';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { InvestmentResult } from './interest-calculator/calculate/investment-result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CalculateComponent, InvestmentResultComponent]
})
export class AppComponent {

   investmentResults: InvestmentResult[] = [];

  hello(event:InvestmentResult[]) {
    console.log("I have been called from app component", event); 
    this.investmentResults = event;
  }
}
