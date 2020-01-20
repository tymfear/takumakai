import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatTableModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})

export class AngularMaterialModule {}
