import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userprofile',
  standalone: false,
  
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit {

  user: any;

  constructor() {}

  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      this.user = {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        email: userEmail,
        age: localStorage.getItem('age'),
        contact: localStorage.getItem('contact'),
        gender: localStorage.getItem('gender')
      };
    }
  }
}
