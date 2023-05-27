import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent, pathMatch: 'full'}
    ]
  },


  /*      This is example for Lazy loading Routing Modules      */
  /*{
    path: 'example/',
    loadChildren: () => import('example.module').then(m => m.exampleModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
