import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsListByCategoryComponent } from './components/products-list-by-category/products-list-by-category.component';

import { ColdFoodCategoryComponent} from './components/products-list-by-category/category-cold-food.component';
import { HotFoodCategoryComponent} from './components/products-list-by-category/category-hot-food.component';
import { BakeryCategoryComponent} from './components/products-list-by-category/category-bakery.component';
import { CoffeLatteCategoryComponent} from './components/products-list-by-category/category-coffe-latte.component';
import { BeverageCategoryComponent} from './components/products-list-by-category/category-beverage.component';


const routes: Routes = [{ path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductsListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'category', component: ProductsListByCategoryComponent },
{ path: 'coldfoodcategory', component: ColdFoodCategoryComponent },
{ path: 'hotfoodcategory', component: HotFoodCategoryComponent },
{ path: 'bakerycategory', component: BakeryCategoryComponent },
{ path: 'coffelattecategory', component: CoffeLatteCategoryComponent },
{ path: 'beveragecategory', component: BeverageCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
