import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfScreenComponent } from './components/conf-screen/conf-screen.component';
import { ResultScreenComponent } from './components/result-screen/result-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersModalComponent } from './components/customers-modal/customers-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { ScoreSummaryComponent } from './components/score-summary/score-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfScreenComponent,
    ResultScreenComponent,
    CustomersModalComponent,
    TrainerCardComponent,
    ScoreSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
