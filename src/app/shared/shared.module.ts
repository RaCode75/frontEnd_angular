import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CardvComponent } from './cardv/cardv.component';
import { CardhComponent } from './cardh/cardh.component';
import { ToolsComponent } from './tools/tools.component';



@NgModule({
  declarations: [
    FooterComponent,
    CardvComponent,
    CardhComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    CardvComponent,
    CardhComponent,
    ToolsComponent
  ]
})
export class SharedModule { }
