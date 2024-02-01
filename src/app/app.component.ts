import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthModule } from '../app/auth/auth.module'
@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelapp';

  getName(name: string) {
    console.log(name);
  }
}
