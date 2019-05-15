import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: string;

  constructor(private http: HttpClient) { }

  checkUser() {
    return this.http.get('http://ccawebprod.corp.global.level3.com/api/employeedata').
          subscribe((res) => {
            console.log(res)
          })
  }
}
