import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BasketGuard } from './guards/basket.guard';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [BasketGuard],
  },
  { path: '**', component: CatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
