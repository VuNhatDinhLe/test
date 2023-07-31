import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  title = 'client';
  products?: Product[];
  categories: Category[] = [];
  currentProduct: Product = {};
  currentCategory: Category = {};
  currentIndex = -1;
  name = '';
  category = '';
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private storageService: StorageService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
 
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
 
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
 
      this.username = user.username;
    }
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

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
