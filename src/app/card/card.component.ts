// import { Component, Input } from '@angular/core';
// import { BookmarkService } from '../bookmark.service';

// @Component({
//   selector: 'app-card',
//   standalone: false,
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.css'
// })
// export class CardComponent {

//   cards = [
    
//     { image: 'https://via.placeholder.com/150', title: 'Card 1', description: 'This is card 1 description' },
//     { image: 'https://via.placeholder.com/150', title: 'Card 2', description: 'This is card 2 description' },
//     { image: 'https://via.placeholder.com/150', title: 'Card 3', description: 'This is card 3 description' },
//     { image: 'https://via.placeholder.com/150', title: 'Card 4', description: 'This is card 4 description' }
//   ];

//   constructor(private bookmarkService: BookmarkService) {}

//   // Save card to bookmarks
//   bookmarkCard(card: { image: string, title: string, description: string }): void {
//     this.bookmarkService.addBookmark(card);
//     alert('Card Bookmarked!');
//   }
// }
