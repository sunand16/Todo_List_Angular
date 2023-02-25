import { Component, Input, OnInit, Output } from '@angular/core';
//import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  taskList =[];
  
  
  
  @Input() description:string;
   taskStatus:boolean=true;
   Status:string;
  
  addNewTask =(event: string)=>{
    if(this.taskStatus==true){
    this.Status='Active' ;
    }
    this.taskList.push({
      description:this.description,
      Status:this.Status})
    
  }
  removeTask=(idx)=> {
    this.taskList.splice(idx,1);
    
  }
  
}
