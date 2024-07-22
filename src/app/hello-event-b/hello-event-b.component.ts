import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-event-b',
  standalone: true,
  imports: [],
  templateUrl: './hello-event-b.component.html',
  styleUrl: './hello-event-b.component.css'
})
export class HelloEventBComponent {

    @Input() name:string='';
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();
  }
  