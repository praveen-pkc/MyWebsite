import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWebsite';
name="praveen kumar k p"



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  autoplay:true,
  dots: true,
  items:4,
  autoplaySpeed:1000,
  navSpeed: 1000,
  dotsSpeed:1000,
  lazyLoad:false,
  navText: ['', ''],
  dotsData:true,
  
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    576:{
      items:2
    },
    600:{
      items: 2

    },
    700: {
      items: 3
    },
    992: {
      items: 3
    },
    1024:{
      items:4
    }
  },
  nav: true
}
}
