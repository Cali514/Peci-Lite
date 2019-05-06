import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Peci} from '../../models/peci';
import {PeciService} from './peci.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';



@Component({
  selector: 'app-peci-form',
  templateUrl: './peci-form.component.html',
  styleUrls: ['./peci-form.component.css']
})
export class PeciFormComponent implements OnInit {

  peciForm: FormGroup;
  peci: Peci;

//Form State

  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private ps: PeciService) { }

  ngOnInit() {
    this.peciForm = this.fb.group({
      Res_No: ['', Validators.required],
      Location: ['', Validators.required],
      Bridge: ['', Validators.required],
      Custom_Selection: [''],
      Primary: ['', Validators.required],
      Secondary: [''],
      Language: [''],
      Bridge2: [''],
      Req_Field: [''],
      Clearance: [''],
      Comm: [''],
      With: [''],
      Purpose: [''],
      ECD: [''],
      Number_of_Lines: [''],
      Time_Zone: [''],
      Start: [''],
      End_Time: [''],
      Bells_Start: [''],
      Number_Clearance: [''],
      Turned_Away: [''],
      Questions: [''],
      Left_Queue: [''],
      US_800_Dialout: [''],
      CDN_Dialout: [''],
      NA_Dialout: [''],
      International_1: this.fb.array([ this.fb.control('') ]), 
      International_10: [''],     
      Level_Serv: [''],
      Monitor: [''],
      Unused: [''],
      Q_A: [''],
      Notif: [''],
      No_Show: [''],
      Fax_Email: [''],
      PostV: [''],
      CD: [''],
      WAV_MP3: [''],
      Tape: [''],
      Transc: [''],
      Mail_Type: [''],
      Other_Media: [''],
      Roll_Call: [''],
      Announce: [''],
      Event_Call_D: [''],
      Pin_Entry: [''],
      C_Line: [''],
      Comment: [''],
      Op_Comments: [''],
      Chair_Changes: [''],
      Incidents: [''],
      Improve: ['']
  })



  /*export class SelectLocation {
    Location: any[] = [
      {value: 'Montreal-0', viewValue: 'Montreal'},
      {value: 'Billings-1', viewValue: 'Billings'},
      {value: 'Other-2', viewValue: 'Other'}
    ];
*/
  }

  async onSubmit(){
    this.loading = true;
    let formValue = this.peciForm.value;
  //  console.warn(formValue);
   /* formValue = map(formValue =>(International_1 =>{
      if (International_1.length >1) {
        for (let i = 0; i< International_1.length; i++ ){
          International_1[i] =`International${i+1}`
        }
      }
    })) */
    try {
      await this.ps.createPeci(formValue)
      .subscribe(data => console.log('ok'));
      this.success = true
    }catch(err){
      console.log(err);
    }
   
  }

  addInternationalButtonClick(): void {
    <FormArray> this.peciForm.get('International_1').push(this.addInternational())
  }

  addInternational() {
    return this.fb.control('')
  }

 
}