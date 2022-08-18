import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BasketComponent } from './components/basket/basket.component'; 
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketGuard } from './guards/basket.guard';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'add', component: AddProductComponent },
  {
    path: 'basket',
    component: BasketComponent,
    canActivate: [BasketGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
