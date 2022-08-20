import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

const MaterialComponent = [
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
