import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { TableComponent } from './wine/table/table.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    EditWineComponent,
    PaginationComponent,
    TableComponent,
    WineListComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
