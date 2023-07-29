import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsListByCategoryComponent } from './components/products-list-by-category/products-list-by-category.component';
import { BakeryCategoryComponent } from './components/products-list-by-category/category-bakery.component';
import { HotFoodCategoryComponent } from './components/products-list-by-category/category-hot-food.component';
import { ColdFoodCategoryComponent } from './components/products-list-by-category/category-cold-food.component';
import { CoffeLatteCategoryComponent } from './components/products-list-by-category/category-coffe-latte.component';
import { BeverageCategoryComponent } from './components/products-list-by-category/category-beverage.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ContactComponent,
    ProductsListComponent,
    ProductsListByCategoryComponent,
    BakeryCategoryComponent,
    HotFoodCategoryComponent,
    ColdFoodCategoryComponent,
    CoffeLatteCategoryComponent,
    BeverageCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
