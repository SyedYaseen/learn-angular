import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PouchService } from './database/pouch.service';
import { phone } from './interfaces/phone';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  constructor(private http: HttpClient, private db: PouchService) {}
  getPhonesList() {
    return this.http.get('https://dummyjson.com/products');
  }
}
