import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home/home.component';
import { HeaderComponent } from './homePage/header/header.component';
import { FooterComponent } from './homePage/footer/footer.component';
import { FilterComponent } from './homePage/filter/filter.component';
import { ProductsComponent } from './homePage/products/products.component';
import { MainComponent } from './homePage/main/main.component';
import { PaginationComponent } from './homePage/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    ProductsComponent,
    MainComponent,
    PaginationComponent,
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
