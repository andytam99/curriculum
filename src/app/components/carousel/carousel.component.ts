import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input
} from '@angular/core';
import { CarSlide } from 'src/app/interfaces/carousel';
import { Experiencias } from 'src/app/mocks/experiencias';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
import { NavigationOptions } from 'swiper/types';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../../../../node_modules/swiper/swiper.scss',
    '../../../../node_modules/swiper/modules/navigation/navigation.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  @Input() slides: CarSlide[] = Experiencias;

  navigation: NavigationOptions = {
    enabled: true,
  };

  constructor() {}
  ngOnInit(): void {}
}
