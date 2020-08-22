import { Component } from '@angular/core';
import {Patient} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PatientManagement';
  patientObj :Patient = new Patient();
 
  
  Add(){
    debugger;
    alert(this.patientObj.id);
  }
}
