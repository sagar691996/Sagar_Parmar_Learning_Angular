import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sagar_Parmar_Learning_Angular';
  welcomeMsg = 'Welcome to my first project of Angular';
  commentTxt = 'Here I will create some cool projects';
}
