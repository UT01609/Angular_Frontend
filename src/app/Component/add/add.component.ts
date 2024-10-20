import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  taskForm:FormGroup;


  constructor(private fBuilder:FormBuilder,private taskservice:TaskService, private router:Router){
      this.taskForm=this.fBuilder.group({
        title:['',[Validators.required]],
        description:[''],
        dueDate:[''],
        priority:['',[Validators.required]]
      })
  }

  createTask(){
    const task=this.taskForm.value;
    return this.taskservice.addTask(task).subscribe(data=>{
      alert("Task Create Successfully....")
      this.router.navigate(['/'])
    })
  }


}
