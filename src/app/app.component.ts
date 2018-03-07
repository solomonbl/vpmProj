import { Component } from '@angular/core';
import { QuestionnaireComponent } from './questionaire.component';
import { TimeRange } from './timerange.component';
import { CheckboxGroup } from './checkbox.group.component';
@Component({
  selector: 'app-root',
   template:` <questionaire></questionaire>`, 
 /*    templateUrl: './app.component.html',  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
