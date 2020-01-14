import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: any;
  password: any;
  statusResponse: any;
  responseInfo: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  singUp() {

    let data = {
      email: this.username,
      password: this.password,
    };


    var url = 'http://devtest.tee.com.co/api/auth/register'

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
        this.statusResponse = data['data']
        console.log(this.statusResponse)
        this.router.navigateByUrl('/');

      }, error => {
        console.log(error);
      });
    this.username = undefined;
    this.password = undefined;
  }

}
