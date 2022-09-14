import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() img: string = 'https://picsum.photos/1440/1440';

  constructor() {}

  ngOnInit(): void {}
}
