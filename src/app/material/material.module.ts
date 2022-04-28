import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
   

  ]
})
export class MaterialModule { }
