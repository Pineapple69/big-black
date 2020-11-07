import {Injectable} from '@angular/core';
import {CarouselItem} from '../interfaces/interfaces';
import * as news from '../../assets/news.json';

@Injectable()
export class NewsService {

  getNews(): CarouselItem[] {
    return this.convertJsonToList(news);
  }

  convertJsonToList(obj: object): CarouselItem[] {
    const carouselItemList: CarouselItem[] = [];
    // @ts-ignore
    const objElementList = obj.default;
    for (const carouselItem in objElementList) {
      carouselItemList.push(objElementList[carouselItem] as CarouselItem);
    }
    return carouselItemList;
  }
}
