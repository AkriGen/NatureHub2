import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() navigate = new EventEmitter<string>();

  onNavigate(section: string): void {
    this.navigate.emit(section);
  }
}
