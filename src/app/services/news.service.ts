import {Injectable} from '@angular/core';
import {CarouselItem} from '../interfaces/interfaces';
import * as news from '../static/news.json';

@Injectable()
export class NewsService {

  getNews(): CarouselItem[] {
    return this.convertJsonToList(news);
  }

  convertJsonToList(obj: object): CarouselItem[] {
    return obj as CarouselItem[];
  }
}
