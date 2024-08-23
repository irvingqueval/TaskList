import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/task';




@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  constructor(private taskService: TaskService) {}

  taskForm = new FormGroup({
    title: new FormControl(''),
  });

  onSubmit() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;
      this.taskService.addTask(task as Task);
      this.taskForm.reset();
    }
  }
}
