import {Component} from '@angular/core';
import {GlobalVariable} from '../../../global';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html'
})
export class BasicInfoComponent {
  public telephoneNumberA = GlobalVariable.TELEPHONE_NUMBER_A;
  public telephoneNumberB = GlobalVariable.TELEPHONE_NUMBER_B;
  public mail = GlobalVariable.MAIL;
}
