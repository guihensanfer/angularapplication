import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "About page";
  vs = ["test1","test2", "test3","test4"];
  myValue: string = "B";
  @ViewChild("Button1") button! : ElementRef;

  onclick_button1(){
    console.log('teste clicou');
    
    this.button.nativeElement.textContent = 'teste';
  }

  onkeyUp(event:KeyboardEvent){
    console.log('keyup has been press');
    console.log(event);
  }

  onkeyUpEnter(){
    console.log('you are press enter key');
  }  
}
