import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  

  post() {
    const httpOptions = {
      headers: new HttpHeaders({ 
      'Content-Type': 'text/xml',
      'Host': 'cferlistmgr.level3.com',
      'soapAction': "http://EventConfQuery.com/getEventConferencesForDate",    
    })
    };
    
      const postedData = '<?xml version="1.0" encoding="utf-8"?>'
      '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'
       '<soap:Body>'
       '<getEventConferencesForDate xmlns="http://EventConfQuery.com/">'
        '<callCenter>"Montreal"</callCenter>'
        '<dtStartDateString_yymmdd>"190512"</dtStartDateString_yymmdd>'
       '</getEventConferencesForDate>'
       '</soap:Body>'
      '</soap:Envelope>'


      return this.http.post('http://cferlistmgr.level3.com/EventConfQuery.asmx', postedData, httpOptions).subscribe(result => {
        console.log(result);
      }, error => console.log('There was an error: '));
  }

}