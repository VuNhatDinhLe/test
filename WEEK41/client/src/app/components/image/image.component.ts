/*
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
*/

import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';
@Component({
selector: 'app-image',
templateUrl: './image.component.html',
styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
images?: Image[];
currentImage: Image = {};
currentIndex = -1;
name = '';
constructor(private imageService: ImageService) { }
ngOnInit(): void {
this.retrieveImages();
}
retrieveImages(): void {
this.imageService.getAll()
.subscribe({
next: (data) => {
this.images = data;
console.log(data);
},
error: (e) => console.error(e)
});
}
refreshList(): void {
this.retrieveImages();
this.currentImage = {};
this.currentIndex = -1;
}
setActiveImage(image: Image, index: number): void {
this.currentImage = image;
this.currentIndex = index;
}
removeAllImages(): void {
this.imageService.deleteAll()
.subscribe({
next: (res) => {
console.log(res);
this.refreshList();
},
error: (e) => console.error(e)
});
}
searchName(): void {
this.currentImage = {};
this.currentIndex = -1;
this.imageService.findByName(this.name)
.subscribe({
next: (data: Image[] | undefined) => {
this.images = data;
console.log(data);
},
error: (e: any) => console.error(e)
});
}
}

