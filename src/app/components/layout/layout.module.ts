import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaxLengthPipe } from 'src/app/pipe/maxlength.pipe';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", component: MainhomeComponent},
  
];

@NgModule({
  declarations: [
    HomeComponent,
    MainhomeComponent,MaxLengthPipe
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FontAwesomeModule,
  ]
})
export class LayoutModule { }
