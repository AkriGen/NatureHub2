import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-bookmark',
  standalone: false,
  
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent implements OnInit{
  bookmarks: any[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }
  // Remove card from bookmarks
  removeBookmark(card: { image: string, title: string, shortDescription: string,longDescription: string,benefits:string,PreperationMethod:string,UsageInstructions:string  }): void {
    this.bookmarkService.removeBookmark(card);
    this.bookmarks = this.bookmarkService.getBookmarks();  // Re-fetch the bookmarks after removal
  }

}
