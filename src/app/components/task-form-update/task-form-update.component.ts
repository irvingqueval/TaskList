import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-update.component.html',
  styleUrl: './task-form-update.component.css'
})
export class TaskFormUpdateComponent {
  private taskId = 0;
  private actualTask: Task | null = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  taskForm = new FormGroup({
    title: new FormControl(''),
  });

  ngOnInit() {
    this.actualTask = this.taskService.getTaskById(
      Number(this.route.snapshot.paramMap.get('id')),
    );
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.actualTask) {
      this.taskForm.patchValue({
        title: this.actualTask.title,
      });
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task = this.taskForm.value;

      this.taskService.updateTask(this.taskId, task as Task);
      this.router.navigate(['/']);
    }
  }
}
