import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-score-summary',
  templateUrl: './score-summary.component.html',
  styleUrls: ['./score-summary.component.css']
})
export class ScoreSummaryComponent implements OnInit {

  
  constructor(
    private appDataService: AppDataService
  ) { }

  ngOnInit(): void {
  }

  getTotalSatisfaction(){
      let totalSatisfaction:number = 0;
      this.appDataService.getTrainerList().forEach(trainer =>{
          trainer.customers.forEach(customer=>{
            totalSatisfaction += customer.satisfaction;
          }); 
      });
      return totalSatisfaction.toFixed(2);;
  }
}
