import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {
taskTodo:string=" ";
taskDate:Date=new Date();
allTask:Task[]=[];
createTask():void
{
 let task:Task=
 {
   id: 'id1',
   task: this.taskTodo,
   date: this.taskDate
 }
 this.allTask.push(task);
 console.log(this.allTask.length);
 this.taskTodo=" ";
}
}

interface Task{
  id:string;
  task:string;
  date:Date;
}
