import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHomeComponent } from './views/main-page-home/main-page-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'main-page-home', pathMatch: 'full'},
  {path: 'main-page-home', component: MainPageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
