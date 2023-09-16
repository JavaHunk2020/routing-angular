import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string ="";
  password: string ="";
  message="";
  //spring this is called constrcutor injection
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  authUser() {
        if(this.username==='jack' && this.password=='jill'){
          this.router.navigate(['/dogs']);
        }else {
            this.message="Sorry username and password not correct!"; 
        }
  }

}
