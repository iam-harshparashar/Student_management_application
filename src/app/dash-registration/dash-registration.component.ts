import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-registration',
  templateUrl: './dash-registration.component.html',
  styleUrls: ['./dash-registration.component.css']
})
export class DashRegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoTeacher(){
    this.router.navigate(['/register'])
  }
  gotoStudent(){
    this.router.navigate(['/search-result'])
  }

  
}
