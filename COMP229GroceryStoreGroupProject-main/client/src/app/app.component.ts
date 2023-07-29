import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  products?: Product[];
  categories: Category[] = [];
  currentProduct: Product = {};
  currentIndex = -1;
  name = '';
  category = '';


  constructor(private productService: ProductService,
    private categoryService: CategoryService) { }

    ngOnInit(): void {
      
      this.categoryService.getAll().subscribe(categories => {
        this.categories = categories;
      });
    }

    
  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }
    searchCategory(): void {
      this.currentProduct = {};
      this.currentIndex = -1;
  
      this.productService.findByCategory("Bakery")
        .subscribe({
          next: (data: Product[] | undefined) => {
            this.products = data;
            console.log(data);
          },
          error: (e: any) => console.error(e)
        });
    }
}
