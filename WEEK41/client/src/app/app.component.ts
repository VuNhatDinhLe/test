import { Component } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  myImage!: Observable<any>;

  base64code : any;

  onChange = ($event : Event) => {

    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    console.log(file)

    this.convertToBase64(file)
  }

  convertToBase64(file : File){

    const observable = new Observable((subscriber : Subscriber<any>) => {
      
      this.readFile(file,subscriber)
    })

    observable.subscribe((d) => {

      console.log(d)
      this.myImage = d
      this.base64code = d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    
    const filereader = new FileReader();

    filereader.readAsDataURL(file)

    filereader.onload = () => {

      subscriber.next(filereader.result);

      subscriber.complete()
    }

    filereader.onerror = () => {

      subscriber.error()

      subscriber.complete()
  }

}
}
