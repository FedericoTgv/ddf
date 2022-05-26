import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer';
import { ApiService } from 'src/app/services/api.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CustomersModalComponent } from '../customers-modal/customers-modal.component';
import { AppDataService } from 'src/app/services/app-data.service';
import { Constants } from 'src/app/utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-screen',
  templateUrl: './conf-screen.component.html',
  styleUrls: ['./conf-screen.component.css']
})
export class ConfScreenComponent implements OnInit {

 // private trainerList: Trainer[] = [];
  private trainerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private modalService: NgbModal,
    private appDataServcie: AppDataService,
    private router: Router
    ) {
    this.trainerForm = new FormGroup({
      trainersFormArray: this.formBuilder.array([])
    });    
   }

  ngOnInit(): void {
    this.getTrainers();       
  }

  getTrainerForm(){
    return this.trainerForm;
  }

  get trainersFormArray(): FormArray {
    return this.trainerForm.get('trainersFormArray') as FormArray;
  }

  getTrainers(){
    this.apiService.getTrainers().subscribe(response =>{
      console.log(response);
      this.appDataServcie.setTrainerList(response);
      this.initializeTrainerForm();
    },error =>{
      console.log(error);

    });
  }  

  initializeTrainerForm() {
    this.appDataServcie.getTrainerList().forEach(trainer => {
      this.trainersFormArray.push(new FormGroup({
        name: new FormControl(trainer.name),
        score: new FormControl(trainer.score),
        maxPlaces: new FormControl(trainer.maxPlaces)
      }));
    });
  }

  calculateResults(){
    this.getTrainersValuesFromForm();    
    this.apiService.calculateResults(this.appDataServcie.getTrainerList()).subscribe(response =>{
      this.appDataServcie.setTrainerList(response);
      this.router.navigate([Constants.ROUTE_RESULTS]); 

    },error =>{
      console.log(error);

    });
  }

  getTrainersValuesFromForm(){
    this.appDataServcie.getTrainerList().forEach((trainer,index) => {      
      trainer.name = this.trainersFormArray.controls[index].get('name')?.value;        
      trainer.score = parseFloat(this.trainersFormArray.controls[index].get('score')?.value);
      trainer.maxPlaces = parseInt(this.trainersFormArray.controls[index].get('maxPlaces')?.value);      
    });
  }

  showCustomersTable(){
    const modalRef = this.modalService.open(CustomersModalComponent);
    
  }
}
