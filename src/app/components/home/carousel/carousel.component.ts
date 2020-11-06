import {Component, Input} from '@angular/core';
import {CarouselItem} from '../../../interfaces/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  @Input()
  carouselItems: CarouselItem[];
}
