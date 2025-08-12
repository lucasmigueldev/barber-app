import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.password.length === 6) {
      this.isLoading = true;

      // Simulação de login
      setTimeout(() => {
        this.isLoading = false;
        console.log('Login realizado com:', this.email, this.password);
        // Aqui você pode redirecionar ou mostrar mensagem de sucesso
      }, 2000);
    }
  }

}
