import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

 
  uri = 'http://localhost:8080';

  toDoDate : string = '2020-01-24';
  
  constructor(private http: HttpClient, private router: Router) { }

  addToDo(description, status, priority, dueDate, dueTime, id) {
    const obj = {
      description,
      priority,
      status,
      dueDate,
      dueTime
    };
    console.log('check object before posting ');
    console.log(obj);
    this.http.post(`${this.uri}/todos/${id}`, obj)
        .subscribe(res => {console.log('Done')
        this.router.navigateByUrl('todos/view');
      
      });
  }

  getAllTodos(){
    return this.http.get(`${this.uri}/todos/`);
  }

  getDailyTodos(userId){
    return this.http.get(`${this.uri}/daily/postDailies/${userId}/${this.toDoDate}`);
  }

  getTodos(userId) {
    return this.http.get(`${this.uri}/todos/${userId}`);

  }

  editToDo(id) {
      return this.http.get(`${this.uri}/todoId/${id}`);
  }

  updateToDo(description, priority, status, dueDate, dueTime, id) {
    const obj = {
      description,
      priority,
      status,
      dueDate,
      dueTime 
    };

    console.log(`${this.uri}/${Number(id)}`);

    this.http.put(`${this.uri}/todos/${Number(id)}`, obj)
      .subscribe(res => {
        console.log('Done')
      this.router.navigateByUrl('todos/view');
    });

  }


  deleteTodo(id) {
    return this.http.delete(`${this.uri}/todos/${id}`);
  }

}
