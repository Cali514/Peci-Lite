import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { PeciFormComponent } from './peci-form/peci-form.component';
import { PeciViewComponent } from './peci-form/peciView-component';
import {PeciService} from './peci-form/peci.service';
import { MatButtonModule, MatInputModule,MatCardModule, MatRadioModule,  MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeciFormComponent, PeciViewComponent],
  imports: [
    CommonModule,
    HttpClientModule, HttpClientXsrfModule,
    MatButtonModule, MatInputModule,MatCardModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule,
    FlexLayoutModule, FormsModule, ReactiveFormsModule
  ],
  exports: [PeciFormComponent, PeciViewComponent]
})
export class PeciFormModule { }
