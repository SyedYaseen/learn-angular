import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhoneListComponent, RoomListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-angular';
}
