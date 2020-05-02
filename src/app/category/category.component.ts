import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


 userform:FormGroup;

  constructor(private fb:FormBuilder) {

    
    

   }


  ngOnInit() {
    this.userform = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNumber: [null, Validators.required],
      address:this.fb.group({
        house:['',Validators.required],
        street:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]
      })
    });
    
  }

  get name(){
    return this.userform.get('name')
  }
 get email(){
   return this.userform.get('email')
 }
 get phoneNumber(){
   return this.userform.get('phoneNumber')
 }
 get address(){
  return this.userform.get('address')
 }
get house(){
  return this.address.get('house')
}

get street(){
  return this.address.get('street');
}

get state (){
  return this.address.get('state')
}

get country(){
  return this.address.get('country')
}

}
