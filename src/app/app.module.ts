import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatSlideToggleModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import { QuestionnaireComponent } from './questionaire.component';
import { TimeRange } from './timerange.component';
import { CheckboxGroup } from './checkbox.group.component';

@NgModule({
  exports: [
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    ObserversModule,
    PlatformModule
  ],
  declarations: [
    AppComponent,QuestionnaireComponent, TimeRange, CheckboxGroup
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
