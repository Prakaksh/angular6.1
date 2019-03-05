import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder) {

   }
    

  ngOnInit() {
    this.profileForm = this.fb.group({
        firstName: ['',Validators.required]
        ,lastName:['',Validators.required]
        ,email:['',Validators.required,Validators.email]
        ,password:''
        ,confirmPassword:''
        ,phone:''
        ,country:''
        ,state:''
        ,city:''

    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  profileOnSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }
    console.log(this.profileForm.value);
  }
  
}
