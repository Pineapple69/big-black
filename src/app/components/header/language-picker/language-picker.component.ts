import {Component} from '@angular/core';
import {TranslateService} from '../../../services/translate.service';
import {MatSelectChange} from '@angular/material/select';
import {Locale} from '../../../enums/locale.enum';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html'
})
export class LanguagePickerComponent {
  readonly languages = ['English', 'Polski'];
  public selectedLanguage = 1;

  constructor(public translateService: TranslateService) {}

  public languageChanged(newLanguage: MatSelectChange): void {
    this.translateService.setCurrentLocale(newLanguage.value as Locale);
  }
}
