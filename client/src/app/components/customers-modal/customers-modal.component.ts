import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/models/customer';
import { AppDataService } from 'src/app/services/app-data.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customers-modal',
  templateUrl: './customers-modal.component.html',
  styleUrls: ['./customers-modal.component.css']
})
export class CustomersModalComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activeModal: NgbActiveModal,
    private appDataService: AppDataService
  ) {}

  ngOnInit(): void {    
    this.apiService.getCustomers().subscribe(response =>{
      this.appDataService.setCustomerList(response);
      console.log(this.appDataService.getCustomerList());
    },error =>{
      console.log(error);
    });
  }

  getCustomerList(){
    return this.appDataService.getCustomerList();
  }
  closeModal(){
    this.activeModal.close('');
  }
}
