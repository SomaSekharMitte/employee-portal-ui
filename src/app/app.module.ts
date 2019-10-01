import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule, MatButtonModule, MatNativeDateModule, MatCardContent, MatCardModule, MatIconModule, MatIcon } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatFormFieldModule} from '@angular/material/form-field';
import 'hammerjs';
import { EmpFormComponent } from './emp-form/emp-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpFormComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents: [SuccessDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
