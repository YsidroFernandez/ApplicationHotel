import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rooms-available',
  templateUrl: './rooms-available.component.html',
  styleUrls: ['./rooms-available.component.css']
})
export class RoomsAvailableComponent implements OnInit {

  type : any;
  userToken = localStorage.getItem('tkn');
  available: any;
  dateIn : any;
  dateOut : any;
  response : any;
  reservation : any;
  reservations = [];
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userToken,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin',
        'Access-Control-Expose-Headers' : 'Content-Length,Content-Range'
      }
    )
  };

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    
  }

  selectRoom(id){
    console.log("SElcciono la " + this.type)
    var url = 'http://devtest.tee.com.co/api/room/availability?type=' + this.type
    this.http.get(url, this.httpOptions)
      .toPromise()
      .then(result => {
        this.available = result['availability']
        console.log(this.available)
      
      }),err => {
       console.log(err.message);
      }



  }

  reserved(){

    let data = {
      type: this.type,
      checkin: this.dateIn,
      checkout: this.dateOut
    };


    var url = 'http://devtest.tee.com.co/api/room/reservation'

    console.log(JSON.stringify(data))

    this.http.post(url, JSON.stringify(data), this.httpOptions)
      .subscribe(data => {
        this.response = data['type']
        this.reservation = data['id']
        this.reservations.push(this.reservation)
        
        console.log(this.reservations)

      }, error => {
        console.log(error);
      });
    this.type = undefined;
    this.dateIn = undefined;
    this.dateOut = undefined;
    this.available = undefined
    
  }
}
