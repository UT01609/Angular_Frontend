import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  taskId:number
  taskForm: FormGroup; 

  constructor(private route:ActivatedRoute, private fb:FormBuilder, private taskService:TaskService , private router:Router){
    const id = this.route.snapshot.paramMap.get("id")
    this.taskId=Number(id);

    this.taskForm=this.fb.group({
        id:[''],
        title:['',[Validators.required]],
        description:[''],
        dueDate:[''],
        priority:['',[Validators.required]]
      
    })

  }
  ngOnInit(): void {
    this.taskService.GetById(this.taskId).subscribe(data=>{
      console.log(data)

      let dueDate = new Date(data.dueDate).toISOString().slice(0, 10);

      this.taskForm.patchValue({
          id:data.id,
          title:data.title,
          description:data.description,
          dueDate:dueDate,
          priority:data.priority

      })

    })
  }

  onSubmit(){

    const task=this.taskForm.value;
                                        
    this.taskService.update(task).subscribe(data=>{
      alert("Task Update SuccessFully")
      this.router.navigate(['/']);
    })
  }

}
