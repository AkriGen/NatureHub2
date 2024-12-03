import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('[A-Z]+'), // At least one uppercase letter
        Validators.pattern('[a-z]+'), // At least one lowercase letter
        Validators.pattern('[0-9]+') // At least one number
      ]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      // Extract form values
      const userData = this.signupForm.value;

      // Call signup service
      this.authService.signup(userData).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          this.router.navigate(['/login']);  // Navigate to login page after successful signup
        },
        (error) => {
          console.error('Signup failed:', error);
          // Handle error appropriately (e.g., show a message to the user)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}

