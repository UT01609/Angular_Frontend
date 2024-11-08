import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../UserService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  userId: number = 0;
  registerForm: FormGroup;
message: any;
 

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {


    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['',[Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      role: [, [Validators.required]],
      agree:[false,[Validators.required]]
    });
  }


  ngOnInit(): void {

   


  }

  onSubmit() {
    let user = this.registerForm.value;

   


  }

  close() {

  }


}

