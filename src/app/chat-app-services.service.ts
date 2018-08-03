import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ChatAppServicesService {
tokenId
  constructor(private _http:HttpClient) { }

  addUserUrl(data) {
    return this._http.post('http://localhost:4000/signUp', data);
  }
  authorizationUserUrl(data) {
  console.log(data);
     return this._http.post('http://localhost:4000/login',data);
}
  getUserListsByIdUrl(token) {
    console.log(this.tokenId)
  return this._http.get('http://localhost:4000/userList', {
    headers : {
      'Authorization' : 'JWT '+token.token.toString()
    }
  });
}

}








