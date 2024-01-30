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
    this.db = new PouchDB('phones9');
    // this.db.crypto('this');
    this.remoteDB = new PouchDB(
      'http://admin:admin@localhost:5984/myremotedb9'
    );
  }

  insertRec(data: phone) {
    this.db.post(data);
  }
  syncDbs() {
    console.log('saving to db');

    this.db
      .sync(this.remoteDB, {
        live: true,
      })
      .on('paused', () => console.log('sync paused'))
      .on('active', () => console.log('active now'));
  }

  getDocs() {
    return this.db.allDocs();
  }
}
