import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../Models/task';
import { user } from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: any) {
    throw new Error('Method not implemented.');
  }

  constructor( private http:HttpClient) {}
    apiURL='http://localhost:5051/api/Users'


    getUser(){
      return this.http.get<user[]>(this.apiURL)
    }

    addUser(user:user){
      return this.http.post<user[]>(this.apiURL,user)
    }

    deleteUser(userId:number){
      return this.http.delete<user[]>(this.apiURL+'/'+userId)
    }

    updateUser(user:user){
      return this.http.put<user[]>(this.apiURL+'/'+user.id,user)
    }

    getById(userId:number){
      return this.http.get<user>(this.apiURL+'/'+userId)
    }

   
}
