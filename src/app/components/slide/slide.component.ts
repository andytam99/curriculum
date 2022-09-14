import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() reverse: boolean = false;
  @Input() img: string = 'https://picsum.photos/800/800';
  @Input() title: string = 'Lorem Ipsum';
  @Input() body: string[] = ['Dolor'];

  constructor() {}

  ngOnInit(): void {}
}
