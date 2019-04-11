import { Component, OnInit } from '@angular/core';
import {Peci} from '../../models/peci';
import {PeciService} from './peci.service'
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
      Res_No: [''],
      Location: [''],
      Bridge: [''],
      Custom_Selection: [''],
      Primary: [''],
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
      International_1: [''],
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
    const formValue = this.peciForm.value;
  //  console.warn(formValue);

    try{
      await this.ps.createPeci(formValue)
      .subscribe(data => console.log('ok'));
      this.success = true
    }catch(err){
      console.log(err);
    }
   
  }

  /*addInternationalButtonClick(): void {
    <FormArray> this.peciForm.get('International_1').push(this.addInternational())
  }

  addInternational(): FormGroup{
    return this.fb.group({International_1: [''] })
  }*/
}
