import { Injectable } from '@angular/core';
import { phone } from '../interfaces/phone';
import PouchDB from 'pouchdb';
@Injectable({
  providedIn: 'root',
})
export class PouchService {
  db: any;
  remoteDB: any;
  constructor() {
    this.db = new PouchDB('phones');
    this.remoteDB = new PouchDB('http://admin:admin@localhost:5984/myremotedb');
  }

  insertRec(data: phone) {
    this.db.post(data);
  }

  insertDummyRec() {
    this.db.post({ name: 'iphone' });
  }

  syncDbs() {
    this.db.sync(this.remoteDB);
  }
}
