import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { Task } from '../components/Task';
import { TASKS } from '../components/mock-tasks';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return of(JSON.parse(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify(TASKS));
      return of(TASKS);
    }
  }

  deleteTask(task: Task): Observable<Task> {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = tasks.filter((t: Task) => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return of(task);
    } catch (error) {
      return throwError(() => new Error('Error deleting task'));
    }
  }

  updateTaskReminder(task: Task): Observable<Task> {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = tasks.map((t: Task) => t.id === task.id ? task : t);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return of(task);
    } catch (error) {
      return throwError(() => new Error('Error updating task'));
    }
  }

  addTask(task: Task): Observable<Task> {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const newTask = { ...task, id: Date.now() };
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return of(newTask);
    } catch (error) {
      return throwError(() => new Error('Error adding task'));
    }
  }
}
