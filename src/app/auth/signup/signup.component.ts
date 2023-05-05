import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string ='';
  lastName: string ='';
  email: string ='';
  password: string ='';
  passwordConfirm: string ='';

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
  }

  signUpWithEmail() {
    let user = {
      email: this.email, 
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }; 
    this.auth.emailSignUp(user)
      .subscribe(
        (data) => {
          this.auth.getMenusCall();
          localStorage.setItem('token', data.token);
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          this.afterSignIn();
        },
        err => console.log(err)
      );
  }

  register() {
    this.signUpWithEmail();
  }

  private afterSignIn() {
    this.router.navigate(['/auth/sigin']);
  }
}
