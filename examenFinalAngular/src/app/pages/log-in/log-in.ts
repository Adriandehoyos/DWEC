import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-log-in',
  imports: [RouterLink, FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {

  private userService = inject(UserService);
  private router = inject(Router);

      isToken: boolean;

    constructor() {
        this.isToken = true;
    }

      ngOnInit(): void{
    if (localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }

    //get user
  async getUser(loginForm: NgForm){
    const loginUser: User = loginForm.value as User;

    //Hay que hacer la petición de login
        try {
            let response = await this.userService.login(loginUser);
            console.log(response);
            if (response.token) {
                localStorage.setItem("token", response.token);

                this.router.navigate(['/dashboard/heros']);
                loginForm.reset();
            }

        } catch (error) {
            alert("Credenciales incorrectos");
            loginForm.reset();
        }
  }



}
