import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';

@Component({
  selector: 'app-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.css']
})
export class CarouselExampleComponent implements OnInit {

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {
    this.smooth.smoothScrollToAnchor();
  }

  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }
}
