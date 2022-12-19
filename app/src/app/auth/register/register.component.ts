import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  @ViewChild(
    // 'form',
    NgForm,
    { static: true }
  )
  form!: ElementRef<HTMLInputElement>;
  // @ViewChild('files', { static: true }) files!: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  registerHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    
    const {
      username,
      email,
      password, 
      rePassword,
    } = form.value;
    
    this.authService
      .register(username!, email!, password!, rePassword!)
      .subscribe((user) => {
        this.router.navigate(['/']);
      });

    const returnUrl =
      this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
}