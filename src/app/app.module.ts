import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { FilterComponent } from './catalog/filter/filter.component';
import { ProductsComponent } from './catalog/products/products.component';
import { PaginationComponent } from './catalog/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './catalog/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ProductsComponent,
    PaginationComponent,
    CatalogComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
