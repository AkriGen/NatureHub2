import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginForm: FormGroup;
  loginEmail: string = '';
  loginPassword: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  

  onLogin() {
    const storedEmail = localStorage.getItem('userEmail');
    const inputEmail = this.loginEmail.toLowerCase();  // Convert input email to lowercase
  
    if (storedEmail?.toLowerCase() === inputEmail) {
      alert('Login successful!');
      // Redirect to profile or dashboard page
      this.router.navigate(['/profile']);
    } else {
      alert('No such user exists or incorrect email!');
    }
  }
  
  }

