import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';
import { phone } from '../interfaces/phone';
import { CommonModule } from '@angular/common';
import { PouchService } from '../database/pouch.service';
@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss',
  providers: [PhoneService],
})
export class PhoneListComponent {
  phonesList: phone[] = [] as phone[];
  phoneListFromDB: any;
  testDate = Date.now();
  constructor(private phonesvc: PhoneService, private db: PouchService) {}

  getPhones() {
    this.phonesvc.getPhonesList().subscribe((data: any) => {
      this.phonesList = data?.products as phone[];
      this.phonesList.forEach((phone: phone) => {
        this.db.insertRec(phone);
      });
    });

    this.db.getDocs().then((data: any) => console.log(data));
    // this.db.getDocs().subscribe((data: any) => {
    //   this.phoneListFromDB = data;
    //   console.log(this.phoneListFromDB);
    // });
  }

  syncDb() {
    this.db.syncDbs();
  }
}
