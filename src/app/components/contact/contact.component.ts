import {Component} from '@angular/core';
import {GlobalVariable} from '../../global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  public telephoneNumberA = GlobalVariable.TELEPHONE_NUMBER_A;
  public telephoneNumberB = GlobalVariable.TELEPHONE_NUMBER_B;
  public mail = GlobalVariable.MAIL;
  public fbLink = GlobalVariable.FB_LINK;
  public streetAddr = GlobalVariable.STREET;
  public city = GlobalVariable.CITY
}
