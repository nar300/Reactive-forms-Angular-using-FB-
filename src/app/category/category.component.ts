import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


 userform;

  constructor(private fb:FormBuilder) {

    this.userform = fb.group({
      name:['',Validators.required],
      email:['',Validators.email]
      
    })

   }


  ngOnInit() {

    
  }

  get name(){
    return this.userform.get('name')
  }
 get email(){
   return this.userform.get('email')
 }
}
