import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs'
import { UIStateService } from 'src/app/service/ui-state.service';
import { Task } from '../Task'
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    const selectedDate = new Date(control.value);
    const now = new Date();
    return selectedDate > now ? null : { pastDate: true };
  };
}


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  taskForm: FormGroup;
  showAddTask: boolean = false;
  subscription?: Subscription;
  errorMessage: string = "";

  constructor(
    private uiService: UIStateService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S.*$/)]],
      day: ['', [Validators.required, Validators.pattern(/^\S.*$/), futureDateValidator()]],
      reminder: [false]
    });

    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSubmit() {
    this.errorMessage = "";
    if (this.taskForm.valid) {
      const taskValue = this.taskForm.value;
      const formattedTask = { ...taskValue, day: this.formatDate(taskValue.day) };
      this.onAddTask.emit(formattedTask);
      this.taskForm.reset();
    } else {
      this.errorMessage = "Por favor, complete todos los campos requeridos correctamente.";
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${month} ${day} a las ${hours}:${minutes}`;
  }


}
