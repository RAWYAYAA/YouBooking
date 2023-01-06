import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {PropriaitaireComponent} from "./propriaitaire/propriaitaire.component";
import {UserLoginComponent} from "./user-login/user-login.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'client',component:ClientComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'propriaitaire',component:PropriaitaireComponent},
  {path:'login',component:UserLoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
