import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-banner-items',
  templateUrl: './banner-items.component.html',
  styleUrls: ['./banner-items.component.scss']
})
export class BannerItemsComponent{
  @Input() items : Movie[] = []
  @Input() title: string = ''
}
