import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { HttpService } from './service/http.service';
import { PromiseService } from './service/promise.service';
import { ModelComponent } from './model/model.component';
import { ModelContact } from './model/model-contact';
import { BoldPipe } from './pipe/bold.pipe';




@NgModule({
  declarations: [
    TableComponent,
    ModelComponent,
    BoldPipe
  ],
  exports: [
    TableComponent,
    BoldPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,

  ],
  providers : [
    HttpService,
    PromiseService,
    ModelContact
  ]
})


export class SharedModule{


}
