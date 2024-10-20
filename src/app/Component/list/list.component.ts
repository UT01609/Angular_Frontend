import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../Models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  task:Task[]=[]

  constructor(private taskService:TaskService, private router:Router){}

  ngOnInit(): void {
    this.loadTask();
  }

  deleteTask(taskId:number){
    return this.taskService.deleteTask(taskId).subscribe(d=>{
      alert("Task Delete Successfully...")
      this.loadTask();      
    })
  }

  loadTask(){
    this.taskService.getTask().subscribe(d=>
      this.task=d)
  }
}
