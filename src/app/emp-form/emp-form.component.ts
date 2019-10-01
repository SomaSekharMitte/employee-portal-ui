import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Employee } from '../model/employee.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeCreation } from '../model/employee-creation.model';
import { Location } from '@angular/common';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';
import { EmpListComponent } from '../emp-list/emp-list.component';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css'],
  providers: [AppService, EmpListComponent]
})
export class EmpFormComponent implements OnInit {
  [x: string]: any;

  constructor(private empListComp: EmpListComponent, public appService: AppService, private location: Location, private dialog: MatDialog) { }
  public empForm: FormGroup;

  employee = new Employee();

  ngOnInit() {
    this.empForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(1)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      department: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.empForm.controls[controlName].hasError(errorName);
  }

  public createEmployee = (empFormValue) => {
    if (this.empForm.valid) {
      this.executeEmployeeCreation(empFormValue);
    }
  }

  private executeEmployeeCreation = (empFormValue) => {
    let employee: EmployeeCreation = {
      _id: empFormValue._id,
      firstName: empFormValue.firstName,
      lastName: empFormValue.lastName,
      gender: empFormValue.gender,
      department: empFormValue.department,
      dateOfBirth: empFormValue.dateOfBirth,
    }

    this.appService.addEmployee(employee)
      .subscribe(res => {
          console.log('Employee created successfully');
          const dialogRef = this.dialog.open(SuccessDialogComponent, {
            width: '350px',
            data: 'Employee Id:' + res
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.empListComp.ngOnInit();
          });
      },
        (error => {
          console.log('Something went wrong..!!', error);
          const dialogRef = this.dialog.open(SuccessDialogComponent, {
            width: '350px',
            data: 'Employee Id:'
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.empListComp.ngOnInit();
          });
        })
      )
  }

  employeeCreateStatus = "";
  firstName = '';
  lastName = '';
  gender = '';
  dateOfBirth = '';
  department = '';

  onAddEmployeeClick(event: Event) {
    if (this.firstName != '' && this.lastName != null) {
      this.employeeCreateStatus = 'Employee "' + this.lastName + ', ' + this.firstName + '" created successfully..!';
      setTimeout(() => {
        this.employeeCreateStatus = '';
      }, 4000);
    }
  }
}
