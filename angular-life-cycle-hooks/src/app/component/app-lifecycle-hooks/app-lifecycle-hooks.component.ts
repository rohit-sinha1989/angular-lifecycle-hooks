import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-app-lifecycle-hooks',
  templateUrl: './app-lifecycle-hooks.component.html',
  styleUrls: ['./app-lifecycle-hooks.component.scss']
})


export class AppLifecycleHooksComponent {
  @Input() message:string | undefined;
  constructor() {
  }
}
