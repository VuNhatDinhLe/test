import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{ path: '', redirectTo: 'products', pathMatch: 'full' },
{ path: 'products', component: ProductsListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
