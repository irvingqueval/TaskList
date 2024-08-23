import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'add', component: TaskFormComponent},
  {path: 'update/:id', loadComponent: () => import('./components/task-form-update/task-form-update.component').then((m) => m.TaskFormUpdateComponent )},
];
