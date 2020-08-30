import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isActive') isLiked: boolean;
  @Input('likeCount') likeCount: number;

  constructor() {}

  onClick() {
    console.log(this.likeCount);
    this.likeCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
    console.log(this.likeCount);
  }
}
