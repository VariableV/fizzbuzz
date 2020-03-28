import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private login : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event): void{
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.login.auth(username,password).subscribe(r =>{
      if (r["out"] === "Success"){
        this.login.updatelog(true);
        this.router.navigate(['fizzbuzz'])
      }
      else{
        window.alert(r["out"]);
      }
    });
  }
}
