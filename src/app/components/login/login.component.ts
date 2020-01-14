import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : any;
  password: any;
  tkn : any;
  constructor(
    private http : HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){

    let data = {
      email: this.username,
      password: this.password,
    };


    var url = 'http://devtest.tee.com.co/api/auth/login'

    console.log(JSON.stringify(data))


    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(url, JSON.stringify(data), httpOptions)
      .subscribe(data => {
        this.tkn = data['token']
        console.log(this.tkn)
        localStorage.setItem('tkn', this.tkn)
        this.router.navigateByUrl('/rooms-available');

      }, error => {
        console.log(error);
      });
    this.username = undefined;
    this.password = undefined;
    
  }

  singUp(){
    this.router.navigateByUrl('/register');
  }

}
