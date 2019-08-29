import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import{ Routes,RouterModule} from '@angular/router';
import { VewbooksComponent } from './vewbooks/vewbooks.component';
import  {HttpClientModule}from '@angular/common/http';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { ViewauthorComponent } from './viewauthor/viewauthor.component';

const appRoutes:Routes=[
  
  {path:'addbook',component:AddbooksComponent},
  {path:'view',component: VewbooksComponent},
  {path:'addauthor',component: AddauthorComponent},
  {path:'viewauthor',component: ViewauthorComponent}
 
]





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbooksComponent,
    VewbooksComponent,
    AddauthorComponent,
    ViewauthorComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent ]
})
export class AppModule { }
