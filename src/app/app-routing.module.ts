import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineListComponent } from './wine/wine-list/wine-list.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';

const routes: Routes = [
  {path: 'wines', component: WineListComponent}, 
  {path: 'wines/add', component: EditWineComponent},
  {path: 'wines/:id', component: EditWineComponent},
  {path: '', redirectTo: '/wines', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
