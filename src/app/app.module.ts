// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { AgoraDemoModule } from './pages/agora-demo/agora-demo.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  // BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AgoraDemoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
