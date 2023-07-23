import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageService } from 'src/app/services/image.service';
@Component({
selector: 'app-image-details',
templateUrl: './image-details.component.html',
styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
@Input() viewMode = false;
@Input() currentImage: Image = {
name: '',
description: '',

};
message = '';
constructor(
private imageService: ImageService,
private route: ActivatedRoute,
private router: Router) { }
ngOnInit(): void {
if (!this.viewMode) {
this.message = '';
this.getProduct(this.route.snapshot.params["id"]);
}
}
getProduct(id: string): void {
this.imageService.get(id)
.subscribe({
next: (data) => {
this.currentImage = data;
console.log(data);
},
error: (e) => console.error(e)
});
}


updatePublished(status: boolean): void {
const data = {
name: this.currentImage.name,
description: this.currentImage.description,
published: status
};
this.message = '';
this.imageService.update(this.currentImage.id, data)
.subscribe({
next: (res) => {
console.log(res);
this.message = res.message ? res.message : 'The status was updated successfully!';
},
error: (e) => console.error(e)
});
}
updateProduct(): void {
this.message = '';
this.imageService.update(this.currentImage.id, this.currentImage)
.subscribe({
next: (res) => {
console.log(res);
this.message = res.message ? res.message : 'This product was updated successfully!';
},
error: (e) => console.error(e)
});
}
deleteProduct(): void {
this.imageService.delete(this.currentImage.id)
.subscribe({
next: (res) => {
console.log(res);
this.router.navigate(['/products']);
},
error: (e) => console.error(e)
});
}
}