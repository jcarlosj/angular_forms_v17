import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './topics/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path:'**', redirectTo: 'reactive-form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 