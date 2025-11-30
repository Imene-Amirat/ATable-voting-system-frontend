import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private cd: ChangeDetectorRef) {}

  errorMessage = '';
  successMessage = '';

  roles = ['USER', 'OWNER', 'ADMIN'] as const;
  selectedRole: typeof this.roles[number] = 'USER';

  signupForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/), // majuscule + chiffre
      ],
    ],
    confirm: ['', Validators.required],

    acceptTerms: [false, Validators.requiredTrue],
  });

  selectRole(role: 'USER' | 'OWNER' | 'ADMIN') {
    this.selectedRole = role;
  }

  passwordsMatch(): boolean {
    return (
      this.signupForm.get('password')?.value === this.signupForm.get('confirm')?.value
    );
  }
  
  signup() {
    console.log('Signup attempt');
    this.errorMessage = '';
    this.successMessage = '';

    if (this.signupForm.invalid || !this.passwordsMatch()) {
      console.log('Invalid form');
      this.signupForm.markAllAsTouched();
      console.log(this.signupForm.value);

      if (!this.passwordsMatch()) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.';
      }
      return;
    }

    const payload = {
      username: this.signupForm.value.username!,
      email: this.signupForm.value.email!,
      password: this.signupForm.value.password!,
      confirmPassword: this.signupForm.value.confirm!,
      role: this.selectedRole,
    };

    this.authService.signup(payload).subscribe({
      next: (res) => {
        console.log('Signup success', res);
        this.successMessage = 'Compte créé avec succès. Redirection...';
        this.cd.detectChanges();
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      },
      error: (err) => {
        this.errorMessage =
          err.error?.message ?? 'Erreur serveur, veuillez réessayer.';
      },
    });
  }

}
