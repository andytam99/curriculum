import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  Input,
  AfterViewInit,
} from '@angular/core';
import { CarSlide } from 'src/app/interfaces/carousel';
import { Experiencias } from 'src/app/mocks/experiencias';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { NavigationOptions } from 'swiper/types';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
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
