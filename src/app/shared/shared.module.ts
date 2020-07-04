import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormsModule } from "./forms/shared-forms.module";

const sharedComponents = [];
const sharedModules = [SharedFormsModule];
const sharedPipes = [];
const sharedDirectives = [];

@NgModule({
  declarations: [
    ...sharedComponents,
    ...sharedPipes,
    ...sharedDirectives
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents,
    ...sharedPipes,
    ...sharedDirectives
  ]
})
export class SharedModule {
}
