import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { AgoraDemoComponent } from './components/agora-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [AgoraDemoComponent],
  declarations: [AgoraDemoComponent]
})
export class AgoraDemoModule { }
