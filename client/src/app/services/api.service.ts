import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Constants } from '../utils/constants';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private trainersURL: string = Constants.BASE_URL + Constants.TRAINERS;
  private customersURL: string = Constants.BASE_URL + Constants.CUSTOMERS;

  constructor(
    private http: HttpClient,
  ) { }

  public getTrainers(): Observable<any> {
    return this.http.get(this.trainersURL);
  }

  public calculateResults(trainers:Array<Trainer>): Observable<any> {
    return this.http.post(this.trainersURL,trainers);
  }

  public getCustomers(): Observable<any> {
    return this.http.get(this.customersURL);
  }
}
