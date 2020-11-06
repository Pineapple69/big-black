import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {CarouselItem} from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public news: CarouselItem[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }
}
