import {Component, Input, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'checkbox-label-with-link',
  template: `
    <label for="checkbox?.id">
      <span (click)="triggerToggle()">
        <ng-content select="[prefix]"></ng-content>
      </span>
      <ng-content></ng-content>
      <span (click)="triggerToggle()">
      <ng-content select="[suffix]"></ng-content>
      </span>
    </label>`,
  styles: [
    `:host {
      user-select: none;
    }`
  ]
})
export class CheckboxLabelWithLink {
  @Input() checkbox?: MatCheckbox;

  triggerToggle() {
    this.checkbox?.toggle();
    this.checkbox?.ripple.launch(0, 0);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CheckboxLabelWithLink
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
