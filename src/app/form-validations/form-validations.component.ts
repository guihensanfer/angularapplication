import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent {
  reativeForm!:FormGroup;

  ngOnInit(){
    this.reativeForm = new FormGroup({
      email:new FormControl(null, [Validators.required,Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.maxLength(8)])
    });
  }

  onSubmit(){
    console.log(this.reativeForm)
  }
  onChange(){

  }
}
