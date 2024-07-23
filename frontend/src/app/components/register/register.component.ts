import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(
    private authService: AuthenticationService, 
    private router : Router, 
    private formBuilder: FormBuilder
  )
  {

  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name : [null, [Validators.required]],
      username : [null, [Validators.required]],
      email: [null, [
        Validators.required, 
        Validators.email,
        Validators.minLength(6)]],
      password: [null, [
        Validators.required,
        Validators.minLength(6),
        //CustomValidators.passwordContainsNumber
      ]],
      passwordConfirm: [null, [Validators.required]]
    }, {
      //validators : CustomValidators.passwordMatches
    })

    //Another way of creating a form group
    // this.registerForm = new FormGroup({
    //   name: new FormControl(null,[
    //     Validators.required,
    //     Validators.minLength(3)
    //   ]),
    //   username: new FormControl(null,[
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   email : new FormControl(null,[
    //     Validators.required,
    //     Validators.email,
    //     Validators.minLength(6)
    //   ]),
    //   password : new FormControl(null,[
    //     Validators.required,
    //     Validators.minLength(3)
    //   ])
    // })
  }

  onSubmit(){
    if(this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).pipe(
      map(user => this.router.navigate(['login']))
    ).subscribe();
  }

}
