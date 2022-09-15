import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from '../create-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';


const routes: Routes = [{
  path : "create",
  component : CreateContactComponent
},
{
  path : "",
  component : ListContactComponent
}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
