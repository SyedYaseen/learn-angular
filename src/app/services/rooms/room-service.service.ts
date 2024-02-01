import { Injectable } from '@angular/core';
import { rooms } from '../../rooms/room-list/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomServiceService {
  constructor() {}

  getRooms(): rooms[] {
    return [
      {
        no: 1,
        type: 'Deluxe Room',
        price: 500,
        amenities: 'AirCon, Wifi, Tv',
        checkin: Date.now(),
        rating: 4.5,
      },
      {
        no: 2,
        type: 'Single Room',
        price: 400,
        amenities: 'AirCon, Wifi, Tv',
        checkin: Date.now(),
        rating: 4.5,
      },
      {
        no: 3,
        type: 'DSuite',
        price: 11500,
        amenities: 'AirCon, Wifi, Tv, Sauna',
        checkin: Date.now(),
        rating: 4.5,
      },
    ];
  }
}
