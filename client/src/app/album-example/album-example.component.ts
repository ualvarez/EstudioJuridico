import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-example',
  templateUrl: './album-example.component.html',
  styleUrls: ['./album-example.component.css']
})
export class AlbumExampleComponent implements OnInit {
  public  isCollapsed: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
