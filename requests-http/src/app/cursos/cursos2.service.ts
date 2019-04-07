import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cursos`);
  }

  loadByID(id) {
    return null;
  }
}
