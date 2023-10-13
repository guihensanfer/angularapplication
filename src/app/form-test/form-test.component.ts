import { Component } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {
  title:string = "";
  details:string = "";
  imageURL:string = "";
  linkURL: string = "";
  changeBackground: boolean = false;
}
