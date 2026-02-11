import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  isToken: boolean;

  constructor() {
      this.isToken = true;
  }

    ngOnInit(): void{
    if (localStorage.getItem('token')){
      this.router.navigate(['/landing']);
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
                //localStorage.setItem("rol", response.roles);

                this.router.navigate(['/dashboard/heroes']);
                loginForm.reset();
            }

        } catch (error) {
            alert("Credenciales incorrectos");
            loginForm.reset();
        }
  }


}
