import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponent = [MatDialogModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
