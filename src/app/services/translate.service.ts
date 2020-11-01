import {Injectable} from '@angular/core';
import {Locale} from '../enums/locale.enum';
import * as staticTranslations from '../static/translations.json';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translations: Map<string, Map<Locale, string>>;
  private currentLocale: Locale;

  constructor() {
    this.setCurrentLocale(Locale.pl_PL);
    this.loadTranslations();
  }

  public setCurrentLocale(locale: Locale): void {
    this.currentLocale = locale;
  }

  public translate(key: string): string {
    return this.translations.get(key).get(this.currentLocale);
  }

  private loadTranslations(): void {
    // @ts-ignore
    this.translations = this.convertJsonToMap((staticTranslations as object).default);
  }

  private convertJsonToMap(obj: object): Map<string, Map<Locale, string>> {
    const translationMap = new Map<string, Map<Locale, string>>();
    for (const translationKey of Object.keys(obj)) {
      const localeMap = new Map<Locale, string>();
      for (const localeKey of Object.keys(obj[translationKey])) {
        localeMap.set(Locale[localeKey], obj[translationKey][localeKey]);
      }
      translationMap.set(translationKey, localeMap);
    }
    return translationMap;
  }
}
