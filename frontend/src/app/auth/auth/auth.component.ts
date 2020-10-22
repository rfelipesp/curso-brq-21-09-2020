import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Usuario } from 'src/app/shared/models/usuario';
import { StorageService } from 'src/app/shared/services/storage.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public email : string;
  public senha : string;
  public authForm : FormGroup;
  private loginUser : Usuario;

  constructor(

    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router,
    private storage : StorageService

    ) {

    this.authForm = this.formBuilder.group( {
      id    : [ '', []],
      email  : [ '', [ Validators.required ] ],
      senha    : [ '', [ Validators.required ] ],

    } );
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.doLogin(this.authForm.value);
  }

  doLogin(auth){
    this.authService.doAuth(auth)
      .subscribe( (success) => {
        console.log(success);

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(success.token);

        let localUser : Usuario = {
          token   : success.token,
          nome    : decodedToken.nome,
          email   : decodedToken.sub,
          id      : decodedToken.id,
          scopes  : decodedToken.scopes
        }

        this.loginUser = localUser;

        this.storage.setLocalUser(localUser);
        this.authService.sendMessage(true);
        this.router.navigate(['home']);

      }
      )
  }

  public isErrorField(fieldName){
    return ( this.authForm.get( fieldName ).valid == false && this.authForm.get( fieldName ).touched == true );
  }

}
