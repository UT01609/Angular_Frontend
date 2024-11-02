import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../UserService/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

userForm:FormGroup
isEditMode = false;
userId: number;
addressId=0;


constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private route:ActivatedRoute){
  const id = this.route.snapshot.paramMap.get("id");
  this.userId = Number(id);

  this.userForm = this.fb.group({
    name: ['', [Validators.required]],
    email: [''],
    password: [''],
    phone: ['', [Validators.required]],
    address: this.fb.group({
      addressLine1: ['', [Validators.required]],
      addressLine2: [''],
      city: ['']
    })
  })

  if (id) {
    this.isEditMode = true;
  } else {
    this.isEditMode = false;
  }
}

ngOnInit(): void {
  if (this.isEditMode == true) {
    this.userService.getById(this.userId).subscribe(data => {

      this.userForm.patchValue({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        
      })
    }, error => {
      alert("User is not found");
    });
  }
}

onSubmit() {
  let user = this.userForm.value;

  if (this.isEditMode == true) {
    user.id = this.userId;
    this.userService.updateUser(user).subscribe(data => {
      alert("User is updated successfully");
      this.router.navigate(["/user-list"]);
    });
  } else {
    this.userService.addUser(user).subscribe(data => {
      alert("User is created successfully");
      this.router.navigate(["/user-list"]);
    });
  }


}

}
