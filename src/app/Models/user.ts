import { Address } from "./address"
import { Task } from "./task"

export interface user{
    id:number,
    name:string,
    email:string,
    password:string,
    phone:string
    address?:Address
    task:Task[];
}

export interface UserRegister{
  fullName:string,
  email:string,
  password : string,
  role : number,
  agree :boolean
}