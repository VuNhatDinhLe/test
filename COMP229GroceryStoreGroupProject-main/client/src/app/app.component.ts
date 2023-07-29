import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  currentCategory: Category ={};
  currentIndex = -1;
  name = '';
  category = '';


  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

    ngOnInit(): void {
      
      this.categoryService.getAll().subscribe(categories => {
        this.categories = categories;
      });
    }

    
  setActiveCategory(category: any, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
    this.productService.findByCategory(this.currentCategory)
    .subscribe({
      next: (data: Product[] | undefined) => {
        this.products = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });
    this.router.navigate(['/category']);

  }
    searchCategory(): void {
      this.currentProduct = {};
      this.currentIndex = -1;
  
      this.productService.findByCategory(this.category)
        .subscribe({
          next: (data: Product[] | undefined) => {
            this.products = data;
            console.log(data);
          },
          error: (e: any) => console.error(e)
        });
    }
}
