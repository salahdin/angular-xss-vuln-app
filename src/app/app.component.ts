import { Component } from '@angular/core';
import { XssTestComponent } from './xss-test/xss-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    XssTestComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app';
}
