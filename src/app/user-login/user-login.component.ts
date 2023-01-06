import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {LoginuserService} from "../loginuser.service";
import {UserAuthService} from "../services/user-auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User = new User();
  constructor(private  loginuserservice: LoginuserService,private  userAuthService:UserAuthService , private router: Router) { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe((response:any)=>{
     this.userAuthService.setRoles(response.user.role);
     this.userAuthService.setToken(response.jwtToken);
     const role= response.user.role[0];
     if(role === 'admin'){
        this.router.navigate(['/admin']);
     }else {
       this.router.navigate(['/home']);
     }
    },(error) => {
      console.log(error);
    });
  }
}
