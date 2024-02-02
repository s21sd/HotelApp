import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AuthModule } from '../app/auth/auth.module'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, AuthModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelapp';

  getName(name: string) {
    console.log(name);
  }
  count = 0;
  Increase(type: string) {
    if (type === 'add') {
      this.count++;
    }
    else if (type === 'minus') {
      this.count--;
    }
  }

  show = true
  showDiv() {
    this.show = !this.show
  }
}
