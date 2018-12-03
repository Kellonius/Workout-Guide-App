import { Component } from '@angular/core';
import { NavbarComponent } from './Shared Component/Navbar/navbar.component'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workout-Guide-App';
  
  constructor(private RouterModule: Router){ }
}
