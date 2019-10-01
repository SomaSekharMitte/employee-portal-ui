import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Url } from "./constants";
import { Employee } from './model/employee.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { EmployeeCreation } from './model/employee-creation.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(Url.baseUrl + '/list');
  }

  addEmployee(emp: EmployeeCreation): Observable<any> {
    return this.http.post(Url.createEmpUrl, {firstName: emp.firstName, lastName: emp.lastName, gender: emp.gender, 
      dateOfBirth: emp.dateOfBirth, department: emp.department});
  }
}
