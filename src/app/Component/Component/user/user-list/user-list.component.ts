import { Component, OnInit } from '@angular/core';
import { user } from '../../../../Models/user';
import { UserService } from '../../../UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {


  constructor(private userservice:UserService, private router:Router){}

  user:user[]=[]
  searchUser: string='';

  ngOnInit(): void {
    this.loadUser();
  }


  deleteUser(taskId:number){
    if(confirm("If you want delete user...")){
      this.userservice.deleteUser(taskId).subscribe(d=>{
        alert("User Delete Successfully...");
        this.loadUser();
      })
    }

  }

  loadUser(){
    this.userservice.getUser().subscribe(u=>this.user=u)
  }

  onEdit(userId: number) {
    this.router.navigate(['/edit-user', userId])
  }

}
