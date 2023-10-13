import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-table',
  templateUrl: './fetch-table.component.html',
  styleUrls: ['./fetch-table.component.css']
})
export class FetchTableComponent {
  name:string = "";
  email:string = "";
  description:string = "";
  userArray:Array<any> = [];

  onClick(){    
    this.userArray.push({
      "name":this.name,
      "email":this.email,
      "description":this.description
    });
    console.log(this.userArray);
  }

  onDelete(index:number){
    this.userArray.splice(index,1);
  }
}