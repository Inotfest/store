import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductsComponent } from './components/products/products.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductComponent } from './components/product/product.component';
import { СategoryComponent } from './components/category/category.component';
import { InputPriceComponent } from './components/input-price/input-price.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BasketComponent } from './components/basket/basket.component';
import { SearchComponent } from './components/search/search.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PriceDirective } from './directives/price.directive';
import { PaginatonComponent } from './components/paginaton/paginaton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

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
    PaginatonComponent,
    CheckboxComponent,
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
