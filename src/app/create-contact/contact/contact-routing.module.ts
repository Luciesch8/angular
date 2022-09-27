import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from '../create-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { ListContact2Component } from './list-contact2/list-contact2.component';
import { PrintContactComponent } from './print-contact/print-contact.component';


const routes: Routes = [{
  path : "create",
  component : CreateContactComponent
},
{
  path : "",
  component : ListContactComponent
},
{
  path : "contact2",
  component : ListContact2Component
},
{
  path : "fiche/:idRef",
  component : PrintContactComponent
}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
