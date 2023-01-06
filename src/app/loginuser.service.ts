import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8082";
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private  httpClient: HttpClient) {}
  loginUser(user: User){
    console.log(user);
    console.log("Form is submitted");
    return this.httpClient.post("http://localhost:8082/api/v1/auth/authenticate",user);
  }
}
