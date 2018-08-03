import { Component, OnInit } from '@angular/core';
import {ChatAppServicesService} from '../chat-app-services.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  token;
  userData = {
  firstName: 'prabin',
  lastName: 'shrestha',
  username: 'prabin321',
  password: 'prabin321',
  email: 'prabinshresthanis111@gmail.com',
  gender: 'male',
  photo: 'userPhoto',
  birthDate: 'date',
  active: 'always'
}
  
  constructor(private  chatappservice:ChatAppServicesService) { }

  ngOnInit() {
  }

  userAuthorization(userData){
    this.chatappservice.authorizationUserUrl(userData).subscribe((res)=>{
      console.log('user access',res)
        this.token = res;
    },(err)=>{
      console.log("vayana garako",err);
    });
  }
  signUp() {
    this.chatappservice.addUserUrl(this.userData).subscribe((res) => {
      console.log("la gayo data",res);
    }, (err) => {
      console.log("error aayo signUP ma",err);
    })
  }

  listDataById(){
    this.chatappservice.getUserListsByIdUrl(this.token).subscribe((res)=>{
      console.log("vayo vayo" ,res)
    },(err)=>{
      console.log(" la data aayana ",err)
    })
  }
}
