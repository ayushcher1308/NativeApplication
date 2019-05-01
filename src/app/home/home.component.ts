import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TeamService } from '../Services/team.service';
import { Router } from '@angular/router';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { StorageService } from '../Services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'NativeProject';
  LoginForm: FormGroup;
  isBusy:boolean = false;
  constructor(private formBuilder: FormBuilder,
    public teamService: TeamService,
    public router:Router,
    private setLocalStorage:StorageService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      emailid: ['saral@jungleworks.com',[Validators.required, Validators.email]],
      password:['123456',[Validators.required, Validators.minLength(6)]]
  });
  }

  LoginUser() {
    
      let data = {email: this.LoginForm.get('emailid').value, password: this.LoginForm.get('password').value};
      console.log(data);
      this.isBusy = true;
      this.teamService.login(data).subscribe(response => {
        // console.log(response);
        if(response && response.status==200){
          
          console.log("alright");
         
          // if(isAndroid){require( "nativescript-localstorage" );}
          // require( "nativescript-localstorage" );
          this.setLocalStorage.setValue(response.body.access_token);
          // localStorage.setItem('accessToken',response.body.access_token);
          this.isBusy = false;
          this.router.navigate(['teams']);

        }
        else
        {
          this.isBusy = false;
          alert("Invalid Credentials");
        }

        
      });
  }
  //isBusy = false;


}
