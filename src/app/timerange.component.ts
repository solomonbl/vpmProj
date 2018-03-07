import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector : 'ff-timerange',
  styles : [` 
    div[fxLayoutAlign] { padding:10px; padding-left: 25px; padding-top:15px;}
  `],
  template : `
    <div fxLayout="row wrap" fxLayoutAlign="start center" fxLayoutGap="10px">
      <mat-form-field>
        <input matInput [matDatepicker]="picker1" placeholder="{{label}} From" [id]="start.key" >
        <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
        <mat-datepicker #picker1></mat-datepicker>
      </mat-form-field>

      <mat-form-field>
        <input matInput [matDatepicker]="picker2" placeholder="{{label}} To" [id]="end.key" >
        <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
        <mat-datepicker #picker2></mat-datepicker>
      </mat-form-field>

    </div>
  `
})
export class TimeRange {
  @Input() label : string;
  @Input() start : any;
  @Input() end   : any;
}
