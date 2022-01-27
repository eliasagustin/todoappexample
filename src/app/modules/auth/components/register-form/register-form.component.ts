import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { AuthTestService } from '@modules/auth/services/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  
  constructor( private authService: AuthTestService ) {

   }

  ngOnInit(): void {

    this.registerForm = new FormGroup(
      {
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators:this.authService.uniqueEmailValidator(),
        updateOn: 'blur'
      }),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      aboutMe: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  testLoaded(): void {
    const mockData = {
      email: 'eliasagustin@gmail.com',
      name: 'Agustin',
      lastName: 'Elias',
      phone: '3415 149386',
      aboutMe: 'sigo estudiando Angular'
    }

    this.registerForm.setValue(mockData)
  }
  testUploaded(): void{
    const mockData = {
      email: 'tu@vieja.com'
    }
    this.registerForm.patchValue(mockData)
  }
}

function passwordMatchValidator(g: AbstractControl | FormGroup): any {
  return g.get('password')?.value === g.get('passwordConfirm')?.value?null:{'mismatch':true};
}