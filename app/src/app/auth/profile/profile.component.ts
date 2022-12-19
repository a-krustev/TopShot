import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  get user() {
    const { username, email, contestParticipates} = this.authService.user!;
    return {
      username,
      email,
      contestParticipates
    };
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm({ ...this.user });
  }

  createForm(formValue: any) {
    console.log(formValue);
    
    this.form = this.fb.group({      

      username: formValue.username,
      email: formValue.email,
      contestsParticipates: formValue.contestsParticipates
    })

  }
}
