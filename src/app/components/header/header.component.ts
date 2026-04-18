import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIStateService } from 'src/app/service/ui-state.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'Mi lista de Tareas';
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UIStateService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string){
    return this.router.url === route
  }

}
