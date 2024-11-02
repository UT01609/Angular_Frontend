import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../Models/user';
import { Task } from '../Models/task';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: user[], ...args: string[]): user[] {
    let searchUser=args[0];

    return value.filter(n=>n.name.toLowerCase().includes(searchUser.toLowerCase()) || n.email.toLowerCase().includes(searchUser.toLowerCase()))
  }

}
