import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  apiURL='http://localhost:5051/api/TaskItems'

  getTask(){
    return this.http.get<Task[]>(this.apiURL)
  }
  addTask(task:Task){
    return this.http.post(this.apiURL,task)
  }

  deleteTask(taskId:number){
    return this.http.delete(this.apiURL+'/'+taskId)
  }

  GetById(taskId:number){
    return this.http.get<Task>(this.apiURL+'/'+taskId)
  }
  update(task:Task){
    return this.http.put(this.apiURL+'/'+task.id,task)
  }
  
  getById(taskId:number){
    return this.http.get(this.apiURL+'/'+taskId)
  }

}
