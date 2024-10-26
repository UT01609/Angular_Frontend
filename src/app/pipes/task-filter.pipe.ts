import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Models/task';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task[] {
    let searchTask=args[0];

    return value.filter(a=>a.title.toLowerCase().includes(searchTask.toLowerCase())||
  a.description.toLowerCase().includes(searchTask.toLowerCase()))
  }

}
