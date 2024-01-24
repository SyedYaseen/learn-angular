import { Injectable } from '@angular/core';
import { phone } from '../interfaces/phone';
import PouchDB from 'pouchdb';
import CryptoPouch from 'crypto-pouch';
PouchDB.plugin(CryptoPouch);
@Injectable({
  providedIn: 'root',
})
export class PouchService {
  db: any;
  remoteDB: any;
  constructor() {
    this.db = new PouchDB('phones7');
    this.db.crypto('this');
    this.remoteDB = new PouchDB(
      'http://admin:admin@localhost:5984/myremotedb7'
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
