import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import IUser from '../../models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private authService = inject(AuthService);
  inSubmission = false
  showAlert = false
  alertMsg = 'Please await! Your account is being created!'
  alertColor = 'blue'
  private passwordValidators: ValidatorFn[] = [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<Number | null>(null, [Validators.required, Validators.min(18), Validators.max(60)]),
    password: new FormControl('', this.passwordValidators),
    confirmPassword: new FormControl('', [...this.passwordValidators]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)])
  })

  async register() {
    console.log(this.registerForm.value)
    this.showAlert = true;
    this.alertMsg = 'Please await! Your account is being created!'
    this.alertColor = 'blue'

    this.inSubmission = true
    try {

      await this.authService.createUser(this.registerForm.value as IUser);

    } catch (e) {
      console.error(e);
      this.alertMsg = 'An unexpected error occurred. Pleas try again later!';
      this.alertColor = 'red';
      this.inSubmission = false
      return;
    }

    this.alertMsg = 'Success! your account has been created.'
    this.alertColor = 'green'
  }
}
