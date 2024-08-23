import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  task: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.task = this.taskService.getTasks();
  }
}
