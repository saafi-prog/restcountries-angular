import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PagesAccueilComponent } from './pages/pages-accueil/pages-accueil.component';
import { PageNotFoundComponent } from  './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PagesAccueilComponent},
  { path: 'table',component: PageTableComponent},
  { path:'cards',component: PageCardsComponent},
  
  //Wild Card Route for 404 reques
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
