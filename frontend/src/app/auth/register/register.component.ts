import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onRegister() {
    if (this.password.length >= 6 && this.password === this.confirmPassword) {
      this.isLoading = true;

      // Simulação de envio de dados
      setTimeout(() => {
        this.isLoading = false;
        console.log('Usuário cadastrado:', {
          nome: this.name,
          email: this.email,
          senha: this.password,
        });

        // Aqui você pode redirecionar ou mostrar mensagem de sucesso
      }, 2000);
    } else {
      console.warn('Erro de validação: senha inválida ou não coincidente');
    }
  }

}
