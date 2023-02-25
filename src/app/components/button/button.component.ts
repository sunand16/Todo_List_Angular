import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

//import { TasksComponent } from '../tasks/tasks/tasks.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  //providers:[TasksComponent]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 

  @Output() taskAdded = new EventEmitter<string>();
  
  addNewTask =()=>{
    this.taskAdded.emit('');
     
     }


}
