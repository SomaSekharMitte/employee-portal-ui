import { Component } from '@angular/core';
import { AppService } from '../app.service';
import {DataSource} from '@angular/cdk/collections';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './emp-list.component.html',
    styleUrls: ['./emp-list.component.css'],
    providers: [AppService]
})
export class EmpListComponent {
    serverId = 10;
    serverStatus = 'offline';
    employeeSource = new EmployeeSource(this.appService);

    displayedColumns = ['firstName', 'lastName', 'gender', 'dateOfBirth', 'department', 'delete'];
    
    getServerStatus () {
        return this.serverStatus;
    }

    data: any = []
  employee = {
    FirstName: '',
    LastName: '',
    Gender: '',
    DataOfBirth: '',
    Department: ''
  }

  constructor(public appService: AppService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit () {
  }
}

export class EmployeeSource extends DataSource<any> {
    constructor(private appService: AppService) {
      super();
    }
    connect(): Observable<Employee[]> {
      return this.appService.getEmployees();
    }
    disconnect() {}
  }
