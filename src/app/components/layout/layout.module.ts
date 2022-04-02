import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './mainhome/mainhome.component';


const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", component: MainhomeComponent},
  
];

@NgModule({
  declarations: [
    HomeComponent,
    MainhomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }
