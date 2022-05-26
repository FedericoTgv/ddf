import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfScreenComponent } from './components/conf-screen/conf-screen.component';
import { ResultScreenComponent } from './components/result-screen/result-screen.component';

const routes: Routes = [
  { path: '', component: ConfScreenComponent},
  { path: 'results', component: ResultScreenComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
