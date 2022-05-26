import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { ConfScreenComponent } from '../conf-screen/conf-screen.component';
@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.css']
})
export class ResultScreenComponent implements OnInit {
  active = 1;
  constructor(
    private appDataService: AppDataService
  ) { }

  ngOnInit(): void {
  }

  getTrainerList(){
    return this.appDataService.getTrainerList();
  }
  
}
