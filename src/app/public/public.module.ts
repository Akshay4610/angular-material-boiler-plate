import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [
    PublicComponent,
    LayoutComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSidenavModule,
    SharedModule
  ],
  exports: [
    PublicComponent,
    LayoutComponent
  ]
})
export class PublicModule { }
