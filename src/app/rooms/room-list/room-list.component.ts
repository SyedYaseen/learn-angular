import { Component } from '@angular/core';
import { RoomServiceService } from '../../services/rooms/room-service.service';
import { rooms } from './rooms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent {
  rooms: rooms[];
  displayedColumns: string[] = [
    'no',
    'type',
    'price',
    'amenities',
    'checkin',
    'rating',
    'edit',
  ];

  /**
   *
   */
  constructor(private roomService: RoomServiceService) {
    this.rooms = roomService.getRooms();
  }
}
