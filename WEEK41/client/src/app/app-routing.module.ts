import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ImageComponent } from './components/image/image.component';


const routes: Routes = [{ path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductsListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'add', component: AddProductComponent },
{ path: 'image', component: ImageComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
