import { Component, OnInit, ɵChangeDetectorStatus } from '@angular/core';
import { Todo } from '../todo';
import { TodoserviceService }  from '../todoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-admin-list',
  templateUrl: './view-admin-list.component.html',
  styleUrls: ['./view-admin-list.component.css']
})
export class ViewAdminListComponent implements OnInit {

  todos: any[];

  constructor(private todoService: TodoserviceService, private router: Router) { }

  ngOnInit() {
    this.todoService.getAllTodos().subscribe((data:any) => {
      console.log(data);
      this.todos = data;
    });
  }


  deleteTodo(id){
    console.log('delete todo with id = ' + id);
    this.todoService.deleteTodo(id).subscribe(res =>{
      console.log('delete res= ' + res);

      this.todoService.getAllTodos().subscribe((data:any) => {
        console.log(data);
        this.todos = data;
      });
    });
  }

}
