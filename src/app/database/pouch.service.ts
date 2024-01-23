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
    this.db = new PouchDB('phones6');
    this.remoteDB = new PouchDB(
      'http://admin:admin@localhost:5984/myremotedb6'
    );
  }

  insertRec(data: phone) {
    this.db.post(data);
  }
  syncDbs() {
    console.log('saving to db');

    this.db.sync(this.remoteDB, {
      live: true,
    });
  }
}
