import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { CharactersComponent } from './views/characters/characters.component';
import { ComingSoonComponent } from './views/characters/coming-soon/coming-soon.component';
import { InazumaComponent } from './views/characters/inazuma/inazuma.component';
import { LiyueComponent } from './views/characters/liyue/liyue.component';
import { MondstadtComponent } from './views/characters/mondstadt/mondstadt.component';
import { CurrentEventsComponent } from './views/current-events/current-events.component';
import { NewsComponent } from './views/current-events/news/news.component';
import { MainPageDownloadComponent } from './views/main-page-download/main-page-download.component';
import { MainPageHomeComponent } from './views/main-page-home/main-page-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-page-home', pathMatch: 'full' },
  { path: 'main-page-home', component: MainPageHomeComponent },
  { path: 'main-page-download', component: MainPageDownloadComponent },
  {
    path: 'current-events', component: CurrentEventsComponent, children: [
      { path: 'news', component: NewsComponent }
    ]
  },
  {
    path: 'characters', component: CharactersComponent, children: [
      { path: 'mondstadt', component: MondstadtComponent },
      { path: 'liyue', component: LiyueComponent },
      { path: 'inazuma', component: InazumaComponent },
      { path: 'coming-soon', component: ComingSoonComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
