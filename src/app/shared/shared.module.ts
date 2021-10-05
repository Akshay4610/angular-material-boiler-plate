import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
