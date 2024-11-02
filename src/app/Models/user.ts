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