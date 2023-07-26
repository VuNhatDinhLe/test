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
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
@Component({
selector: 'app-contact',
templateUrl: './contact.component.html',
styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts?: Contact[];
currentContact: Contact = {};
currentIndex = -1;
name = '';
constructor(private contactService: ContactService) { }
ngOnInit(): void {
this.retrieveContacts();
}
retrieveContacts(): void {
this.contactService.getAll()
.subscribe({
next: (data) => {
this.contacts = data;
console.log(data);
},
error: (e) => console.error(e)
});
}
refreshList(): void {
this.retrieveContacts();
this.currentContact = {};
this.currentIndex = -1;
}
setActiveContact(contact: Contact, index: number): void {
this.currentContact = contact;
this.currentIndex = index;
}
removeAllContacts(): void {
this.contactService.deleteAll()
.subscribe({
next: (res) => {
console.log(res);
this.refreshList();
},
error: (e) => console.error(e)
});
}
searchName(): void {
this.currentContact = {};
this.currentIndex = -1;
this.contactService.findByName(this.name)
.subscribe({
next: (data: Contact[] | undefined) => {
this.contacts = data;
console.log(data);
},
error: (e: any) => console.error(e)
});
}
}

