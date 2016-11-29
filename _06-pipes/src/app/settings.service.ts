import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale(){
    return  'pt-BR';
  }

}
