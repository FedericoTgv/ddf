import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.css']
})
export class TrainerCardComponent implements OnInit {

  private trainer!:Trainer;
  @Input () public trainerIndex!:any;

  constructor(
    private appDataService:AppDataService
  ) {
    
   }

  ngOnInit(): void {
    
    this.trainer = this.appDataService.getTrainerAt(this.trainerIndex);
    this.trainerIndex = parseInt(this.trainerIndex)+1;
    
  }

  getTrainer(){
    return this.trainer;
  }
  
}
