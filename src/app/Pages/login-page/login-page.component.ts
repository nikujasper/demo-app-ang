import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  utype!: string;
  email: any;
  password: any;
  num1!: number;
  num2!: number;
  userAnswer!: number;
  operation!: string;

  isLoading: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
    this.operation = this.getRandomOperation();
  }

  getRandomOperation(): string {
    const operations = ['+', '*']; // Add more operations as needed
    return operations[Math.floor(Math.random() * operations.length)];
  }

  calculateResult() {
    let result: number;
    switch (this.operation) {
      case '+':
        result = this.num1 + this.num2;
        break;
      case '*':
        result = this.num1 * this.num2;
        break;
      default:
        result = NaN;
    }
    return result;
  }

  submit(event: any): void {
    this.isLoading = true;
    const inputData = {
      // utype: this.utype,
      email: this.email,
      password: this.password,
      userAnswer: this.userAnswer,
      operation: this.operation,
    };

    event.target.innerText = 'Logging in...';

    this.loginService.login(inputData).subscribe((res: any) => {
      sessionStorage.setItem('access_token', res?.accessToken);
      this.isLoading = false;
      event.target.innerText = 'Login';

      if (res?.msg == 'Incorrect Password') {
        alert(res?.msg);
      }
      if (res?.msg == 'User not found') {
        alert(res?.msg);
      }
      if (
        res?.msg == 'Login success' &&
        this.userAnswer == this.calculateResult()
      ) {
        this.router.navigateByUrl('/dashboard');
      }
      if (this.userAnswer != this.calculateResult()) {
        alert('Invalid Captcha..!!');
      }
    });
  }
}
