import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
