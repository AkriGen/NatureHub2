import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private bookmarkKey = 'bookmarkedCards';
  constructor() { }
   // Get all bookmarked cards from local storage
   getBookmarks(): any[] {
    const bookmarks = localStorage.getItem(this.bookmarkKey);
    return bookmarks ? JSON.parse(bookmarks) : [];
  }

  // Add a new card to the bookmarks
  addBookmark(card: { image: string, title: string, shortDescription: string,longDescription: string,benefits:string,PreperationMethod:string,UsageInstructions:string  }): void {
    const bookmarks = this.getBookmarks();
    bookmarks.push(card);
    localStorage.setItem(this.bookmarkKey, JSON.stringify(bookmarks));
  }
  removeBookmark(card: { image: string, title: string, shortDescription: string,longDescription: string,benefits:string,PreperationMethod:string,UsageInstructions:string }): void {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(b => b.image !== card.image || b.title !== card.title);  // Assuming uniqueness based on image and title
    localStorage.setItem(this.bookmarkKey, JSON.stringify(bookmarks));
  }
}
