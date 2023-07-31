import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-products-list-by-category',
  templateUrl: './products-list-by-category.component.html',
  styleUrls: ['./products-list-by-category.component.css']
})
export class ProductsListByCategoryComponent implements OnInit {

  products?: Product[];
  categories: Category[] = []
  currentProduct: Product = {};
  currentCategory : Category = {};

  currentIndex = -1;
  name = '';
  category : any;


  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.findByCategory(this.category)
    .subscribe({
      next: (data: Product[] | undefined) => {
        this.products = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

 

  refreshList(): void {
    this.retrieveProducts();
    this.currentProduct = {};
    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  
    this.router.navigate(['/products/'+this.currentProduct.id]);

  }
  setActiveCategory(category: any, index: number): void {
    this.currentCategory = category;
    this.currentIndex = index;
  
    this.productService.findByCategory(this.category)
    .subscribe({
      next: (data: Product[] | undefined) => {
        this.products = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });
  }
  removeAllProducts(): void {
    this.productService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentProduct = {};
    this.currentIndex = -1;

    this.productService.findByName(this.name)
      .subscribe({
        next: (data: Product[] | undefined) => {
          this.products = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
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

