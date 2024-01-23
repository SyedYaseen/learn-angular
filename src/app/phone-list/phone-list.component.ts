import { Component } from '@angular/core';
import { PhoneService } from '../phone.service';
import { phone } from '../interfaces/phone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss',
  providers: [PhoneService],
})
export class PhoneListComponent {
  /**
   *
   */
  phonesList: phone[] = [] as phone[];
  constructor(private phonesvc: PhoneService) {}

  ngOnInit() {
    this.getPhones();
  }
  getPhones() {
    this.phonesvc.getPhonesList().subscribe((data: any) => {
      this.phonesList = data?.products as phone[];
      this.phonesvc.saveToDb();
    });
  }
}
