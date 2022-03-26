import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**', 
    loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}


