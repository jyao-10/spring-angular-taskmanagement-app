import { Component, OnInit, ɵChangeDetectorStatus } from '@angular/core';
import { Todo } from '../todo';
import { TodoserviceService }  from '../todoservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-to-do-list',
  templateUrl: './view-to-do-list.component.html',
  styleUrls: ['./view-to-do-list.component.css']
})
export class ViewToDoListComponent implements OnInit {

  todos: any[];
  userId: number = 1;
  constructor(private todoService: TodoserviceService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.todoService.getTodos(this.userId).subscribe((data:any) => {
      console.log(data);
      this.todos = data;
    });
  }

  changeUser(id){
    console.log("ID is " + id);
    this.userId = id;
    this.todoService.getTodos(id).subscribe((data:any) => {
      console.log(data);
      this.todos = data;
    });
  }

  userForm = this.fb.group({
    id : ['']
  })

  deleteTodo(id){
    console.log('delete todo with id = ' + id);
    this.todoService.deleteTodo(id).subscribe(res =>{
      console.log('delete res= ' + res);

      this.todoService.getTodos(this.userId).subscribe((data:any) => {
        console.log(data);
        this.todos = data;
      });
    });
  }

  populateTodos(){
    this.todoService.getDailyTodos(this.userId).subscribe((data:any) => {
      console.log(data);
      this.todos = data;
    });
  }
}
