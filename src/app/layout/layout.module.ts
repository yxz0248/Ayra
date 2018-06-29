import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { SiderComponent } from './components/sider/sider.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatLayoutModule,
    MatSidenavModule,
    MatMenuModule
  ],
  exports: [LayoutComponent],
  declarations: [SiderComponent, HeaderComponent, LayoutComponent]
})
export class LayoutModule { }
