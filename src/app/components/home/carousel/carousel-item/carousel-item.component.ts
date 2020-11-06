import {Component, Input} from '@angular/core';
import {CarouselItem} from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html'
})
export class CarouselItemComponent {
  @Input()
  carouselItem: CarouselItem;
}
