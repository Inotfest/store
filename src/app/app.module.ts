import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './catalog/filter/filter.component';
import { ProductsComponent } from './catalog/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './catalog/products/product/product.component';
import { СategoryComponent } from './catalog/filter/category/category.component';
import { InputPriceComponent } from './catalog/filter/input-price/input-price.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { PriceDirective } from './directives/price.directive';
import { BasketComponent } from './basket/basket.component';
import { SearchComponent } from './catalog/search/search.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ProductsComponent,
    CatalogComponent,
    ProductComponent,
    СategoryComponent,
    InputPriceComponent,
    DialogComponent,
    PriceDirective,
    BasketComponent,
    SearchComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
