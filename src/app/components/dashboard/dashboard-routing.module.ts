import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddDisplayComponent } from './displays/add-display/add-display.component';
import { DisplaysComponent } from './displays/displays.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path:'', component: InicioComponent},
    {path:'displays', component: DisplaysComponent},
    {path:'add-display', component: AddDisplayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
