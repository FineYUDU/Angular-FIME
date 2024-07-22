import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HelloEventBComponent } from './hello-event-b/hello-event-b.component';
import { HelloInputComponent } from './hello-input/hello-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HelloComponent,
    HelloEventBComponent,
    HelloInputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miTerceraApp';

  onSayHello(message:any) {
    console.log(message);
  }
}
