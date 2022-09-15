import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './create-contact/accueil/accueil.component';
import { ContactModule } from './create-contact/contact/contact.module';
import { CreateContactComponent } from './create-contact/create-contact.component';
//import { ProductAlertsComponent } from './product-alerts/product-alerts.component';


const routes: Routes = [{
  path : "contact",
  loadChildren : () => import('./create-contact/contact/contact.module').then(m => ContactModule),
},
{
  path : "",
  component : AccueilComponent,
}

]; 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
