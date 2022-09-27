import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateContactComponent } from '../create-contact.component';
import { Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListContactComponent } from './list-contact/list-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ListContact2Component } from './list-contact2/list-contact2.component';
import { PrintContactComponent } from './print-contact/print-contact.component';




@NgModule({
  declarations: [
    CreateContactComponent,
    ListContactComponent,
    ListContact2Component,
    PrintContactComponent
  ],
  imports: [

    CommonModule, 
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class ContactModule { }
