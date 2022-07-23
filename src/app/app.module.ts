import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './homePage/header/header.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { ContentComponent } from './homePage/content/content.component';
import { FilterComponent } from './homePage/filter/filter.component';
import { ProductsComponent } from './homePage/products/products.component';
import { ProductComponent } from './homePage/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FilterComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
