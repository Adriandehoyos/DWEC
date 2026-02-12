import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  isToken: boolean;

  constructor() {
      this.isToken = true;
  }

    ngOnInit(): void{
    if (localStorage.getItem('token')){
      this.router.navigate(['/dashboard/ninjas']);
    }
  }


      //get user
  async getUser(loginForm: NgForm){
    const loginUser: Auth = loginForm.value as Auth;

    //Hay que hacer la petición de login
        try {
            let response = await this.authService.login(loginUser);
            console.log(response);
            if (response.token) {
                localStorage.setItem("token", response.token);
                this.router.navigate(['/dashboard/ninjas']);
                loginForm.reset();
            }

        } catch (error) {
            alert("Credenciales incorrectos");
            loginForm.reset();
        }
  }
}
