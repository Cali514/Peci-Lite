import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Peci} from '../../models/peci';
import {Observable} from 'rxjs/';
import {catchError, map, tap, pluck} from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'X-CSRF-Token, Content-Type'
    
  }  
  ),
  json: true
}



@Injectable({
  providedIn: 'root'
})


export class PeciService {

  peci: Peci;



  private url: any = 'http://4.72.36.16:3001/api/peci' ;



  constructor(private http: HttpClient ) { }

  

  public createPeci(formValue: Peci): Observable<Peci>{
    var nums =formValue.International_1
   //var data = object.assign(formValue, iterNum(nums))
  var data = JSON.stringify(formValue);
   console.log(data);
   
    return this.http.post<Peci>(`${this.url}`, data, httpOptions )
      .pipe()
     }

    /* iterNum(n, formValue) {
       for(let i=0; i<n.length; i++){

        var result =Object.assign({}, formValue, formValue.International_ + n+1:n.value  )
         
       }
     }*/
}
