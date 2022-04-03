import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule)
  },
 
  {
    path: 'user', 
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'view', 
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule)
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


