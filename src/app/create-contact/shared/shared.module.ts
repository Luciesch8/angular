import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { HttpService } from './service/http.service';
import { PromiseService } from './service/promise.service';




@NgModule({
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,

  ],
  providers : [
    HttpService,
    PromiseService
  ]
})


export class SharedModule{


}
