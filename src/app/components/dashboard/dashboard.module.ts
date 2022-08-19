import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplaysComponent } from './displays/displays.component';
import { AddDisplayComponent } from './displays/add-display/add-display.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    DisplaysComponent,
    AddDisplayComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
