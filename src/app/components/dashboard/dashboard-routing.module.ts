import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DisplaysComponent } from './displays/displays.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path:'', component: InicioComponent},
    {path:'displays', component: DisplaysComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
