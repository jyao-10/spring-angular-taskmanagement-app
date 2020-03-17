import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService }  from '../todoservice.service';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {

  form: FormGroup;
  todo: any = {};

  constructor(private route: ActivatedRoute, private router:Router, private todoService: TodoserviceService, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoService.editToDo(params.id).subscribe(res => {
        this.todo = res;
      });
    });
  }

  createForm(){
    this.form = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      dueTime: ['', Validators.required]
    });
  }

  updateTodo(description, status, priority, dueDate, dueTime){
    this.route.params.subscribe(params => {
      this.todoService.updateToDo(description, priority, status, dueDate, dueTime, parseInt(params.id, 10));
     
    });

    
  }

}
