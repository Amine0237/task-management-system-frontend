import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Application wide Module
 */
@NgModule({
  imports: [
    AlertComponent, 
    AlertErrorComponent, 
    AutoCompleteModule, 
    ReactiveFormsModule, 
    FormsModule, 
    ButtonModule, 

  ],

  exports: [
    CommonModule, 
    NgbModule, 
    FontAwesomeModule, 
    AlertComponent, 
    AlertErrorComponent, 
    ButtonModule, 
    AutoCompleteModule, 
    FormsModule, 
    ReactiveFormsModule,

  ],
})
export default class SharedModule {}
