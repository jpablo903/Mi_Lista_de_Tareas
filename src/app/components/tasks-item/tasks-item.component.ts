import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksItemComponent {
  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> =new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> =new EventEmitter()

  faTimes = faTimes;

  constructor() { }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }


}
