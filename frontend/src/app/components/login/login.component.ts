import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthenticationService){

  }

  ngOnInit():void{

  }

  login(){
    this.authService.login('ahmed@test','12345').subscribe(data => console.log('Success'));
  }
}
