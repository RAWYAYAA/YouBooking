import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "../services/user-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  userAuthService: UserAuthService) { }

  ngOnInit(): void {
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
}
