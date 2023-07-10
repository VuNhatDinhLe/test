import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit{

  products : Observable<Product[]> | undefined

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    console.log("inside ng");
    this.reloadData();
  }

  reloadData(){

    this.products = this.productService.getAll();
  }
}
