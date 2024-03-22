import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService) { }

  login() {
    event?.preventDefault();
    this.errorMessage = ''; // Clear any previous errors
    this.authService.login(this.email, this.password)
      .subscribe(
        (data) => {
          // Handle successful login (redirect to a secured page)
          console.log("Login successful:", data);
          // window.location.href = ""; 
        },
        (error) => {
          this.errorMessage = 'Invalid email or password.'; // Example error message
          console.error("Login error:", error);
        }
      );
  }
  
  
}
