import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tweet = {
    title: 'Here is the tile ..',
    likeCount: 10,
    isLiked: false,
  };
}
