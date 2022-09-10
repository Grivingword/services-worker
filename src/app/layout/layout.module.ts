import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedNgModule } from "../shared-ng.module";
import { AppConfigModule } from "./config/config.module";
import { TopbarComponent } from "./topbar/topbar.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { SidebarComponent } from "./sidebar/sidebar.component";



@NgModule({
  declarations: [
    MenuItemComponent,
    TopbarComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    AppConfigModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
