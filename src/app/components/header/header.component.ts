import {Component} from '@angular/core';
import {GlobalVariable} from '../../global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly navbarTabs = ['sell', 'about', 'detailed-info'];
  readonly background;

  public shopName = GlobalVariable.SHOP_NAME;
  public activeTab = this.navbarTabs[0];
}
