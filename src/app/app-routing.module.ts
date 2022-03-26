import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: "header", component: HeaderComponent  },
  // { path: "hello", component: HeaderComponent, data: { routeName: "Hello2" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

// routes.forEach((eachRoute) => {
//   RouteNames.routeNamesObject[eachRoute.data.routeName] = eachRoute.path;    // now all route paths are added to this prop
// })
//  const routeNames = RouteNames;
