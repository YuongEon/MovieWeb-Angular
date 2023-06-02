import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData : Movie | null = null;

  readonly imageSizes = IMAGE_SIZES;


}
