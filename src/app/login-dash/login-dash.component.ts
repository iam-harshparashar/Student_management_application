import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-dash',
  templateUrl: './login-dash.component.html',
  styleUrls: ['./login-dash.component.css']
})
export class LoginDashComponent implements OnInit {

  constructor(private connect:ConnectService, private router: Router) { }
loginData:any;
userName:string="";
password:string="";
  ngOnInit(): void {
    this.getLoginData();
  }

  private getLoginData(){
    this.connect.getLoginData().subscribe(res=>{
      this.loginData=res;
    })}
    onSubmit(){
      console.log("It works");
      console.log(this.loginData)
      for(var i=0; i<this.loginData.length; i++){
        if(this.userName==this.loginData[i].username && this.password==this.loginData[i].password)
        {
          console.log("It also works")
          
          this.router.navigate(['/teacher-dashboard'])
        }
        else
        {
          console.log("Not Works");
          
        }
      }
     
    }
}
