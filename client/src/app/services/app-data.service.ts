import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private trainerList:Trainer[];
  private customerList:Customer[];
  
  constructor() {
    this.trainerList = [];
    this.customerList = [];
  }

  getTrainerList():Trainer[]{
    return this.trainerList;
  }

  setTrainerList(trainerList:Trainer[]){
    this.trainerList = trainerList;
  }

  getCustomerList():Customer[]{
    return this.customerList;
  }

  setCustomerList(customerList:Customer[]){
    this.customerList = customerList;
  }

  getTrainerAt(index:number):Trainer{
    return this.trainerList[index];
  }
}
