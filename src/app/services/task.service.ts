import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, title: 'Task 1', completed: false},
    {id: 2, title: 'Task 2', completed: false},
    {id: 3, title: 'Task 3', completed: false}
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number): Task | null {
    return this.tasks.find((task) => task.id === id) || null;
  }

  addTask(task: Partial<Task>) {
    if (!task.title) {
      throw new Error('Task title is required');
    }

    const newTask: Task = {
      id: this.tasks.length + 1,
      title: task.title,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  updateTask(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...updatedTask, id };
    }
  }
}
