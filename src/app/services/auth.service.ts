import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root' //id del injectable
})
export class AuthService {

  //Variables de solo lectura, son constantes
  //HttpHeaders
  readonly BASE_URL = environment.apiUrl;
  readonly headers = new HttpHeaders(environment.headers);

  constructor(public http: HttpClient) { }

  registerEmployee(registerParams: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.BASE_URL}/employees`, registerParams, {
      headers: this.headers
    });
  }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.BASE_URL}/employees`, {
      headers: this.headers
    });
  }

  
}
