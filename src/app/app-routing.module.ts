import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', loadChildren:() => import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule)}, //LoadChildren = para navegacion mas fluida
  {path:'**', component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
