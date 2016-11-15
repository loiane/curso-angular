import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(msg: string){
    console.log(msg);
  }

}
