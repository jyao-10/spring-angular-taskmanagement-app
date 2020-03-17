import { Component, OnInit } from '@angular/core';
import { TodoserviceService }  from '../todoservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms'; 

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  form : FormGroup;
  userId : number;
  constructor(private fb: FormBuilder, private todoService: TodoserviceService, private router: Router) { 
    this.createForm();
  }

  ngOnInit() {
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

  onSubmit(description, status, priority, dueDate, dueTime){
    this.todoService.addToDo(description, status, priority, dueDate, dueTime, this.userId);
  }

  changeUser(id){
    this.userId  = id;
    console.log(this.userId);
  }

}
