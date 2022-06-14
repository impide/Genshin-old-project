import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentEventsComponent } from './views/current-events/current-events.component';
import { MainPageHomeComponent } from './views/main-page-home/main-page-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'main-page-home', pathMatch: 'full'},
  {path: 'main-page-home', component: MainPageHomeComponent},
  {path: 'current-events', component: CurrentEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
