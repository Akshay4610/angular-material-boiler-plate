import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    PublicComponent,
    LayoutComponent,
    ListCardsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSidenavModule,
    SharedModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    PublicComponent,
    LayoutComponent
  ]
})
export class PublicModule { }
