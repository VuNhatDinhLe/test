import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage.service';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';



@Component({
  selector: 'app-category-bakery',
  templateUrl: './category-bakery.component.html',
  styleUrls: ['./category-bakery.component.css']
})
export class BakeryCategoryComponent implements OnInit {

  products?: Product[];
  categories: Category[] = []
  currentProduct: Product = {};
  currentCategory : Category = {};

  currentIndex = -1;
  name = '';
  category : any;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.productService.findByCategory("Bakery")
    .subscribe({
      next: (data: Product[] | undefined) => {
        this.products = data;
        console.log(data);
      },
      error: (e: any) => console.error(e)
    });  

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      //this.username = user.username;
    }
  }

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