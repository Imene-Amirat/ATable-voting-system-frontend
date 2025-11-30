import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  errorMessage = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9]*$/)]
    ]
  });

  login(){
    console.log('Login attempt');
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      console.log('Invalid form');
      this.loginForm.markAllAsTouched(); 
      return;
    }

    this.errorMessage = ''

    const email = this.loginForm.get('email')?.value || '';
    const password = this.loginForm.get('password')?.value || '';

    this.authService.login(email, password).subscribe({
      next: (res) => {
        this.errorMessage = '';
        console.log('Login success');

        const role = res.role;
        if (role === 'USER') this.router.navigate(['/user']);
        if (role === 'OWNER') this.router.navigate(['/owner']);
        if (role === 'ADMIN') this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.errorMessage = err.error.message || 'Identifiants incorrects';
        } else {
          this.errorMessage = 'Erreur serveur, réessayez plus tard.';
        }
      }
    });
  }

}
