import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit{
  @Input() items: Movie[] = [];
  @Input() isBanner : boolean = false;
  currentIndex : number = 0;

  readonly imageSizes = IMAGE_SIZES

  constructor() {}

  ngOnInit(): void {
    this.isBanner == false && setInterval(() => {
      this.currentIndex = ++this.currentIndex % this.items.length;    
    },5000)
  }
}
