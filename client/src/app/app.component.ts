import { Component, OnInit } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';
import { SimpleSmoothScrollOption } from 'ng2-simple-smooth-scroll';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppComponent implements OnInit{
  title = 'Estudio Jurídico';
  public   isCollapsed = false;
  constructor(private smooth: SimpleSmoothScrollService) { }
 
  ngOnInit() {
    this.smooth.smoothScrollToAnchor();
  }
  
  goTop(){
    this.smooth.smoothScrollToTop({ duration: 1000, easing: 'linear' });
  }
}
