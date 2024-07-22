import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-hello-input',
  standalone: true,
  imports: [],
  templateUrl: './hello-input.component.html',
  styleUrl: './hello-input.component.css'
})
export class HelloInputComponent {
  @Input() name:string='';
}
