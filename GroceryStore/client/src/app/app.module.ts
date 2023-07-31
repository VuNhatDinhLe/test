import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsListByCategoryComponent } from './components/products-list-by-category/products-list-by-category.component';
import { BakeryCategoryComponent } from './components/products-list-by-category/category-bakery.component';
import { HotFoodCategoryComponent } from './components/products-list-by-category/category-hot-food.component';
import { ColdFoodCategoryComponent } from './components/products-list-by-category/category-cold-food.component';
import { CoffeLatteCategoryComponent } from './components/products-list-by-category/category-coffe-latte.component';
import { BeverageCategoryComponent } from './components/products-list-by-category/category-beverage.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ContactComponent,
    ProductsListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
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
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
