import { NgModule } from '@angular/core';
import { UnisysAngularFormGroupComponent } from './unisys-angular-form-group.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [UnisysAngularFormGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [UnisysAngularFormGroupComponent]
})
export class UnisysAngularFormGroupModule { }
