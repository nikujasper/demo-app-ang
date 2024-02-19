import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LinkMasterResponse {
  // id: number;
  linkName: string;
  slugName: string;
  className: string;
  serialNo: number;
  publishStatus: number;
  linkType: string;
  microServiceName: string;
  controllerName: string;
  createdOn: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API = environment.api;
  constructor(public httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    }),
  };

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  // validateLogin(inputData: any) {
  //   var email = inputData.email;
  //   var password = inputData.password;

  //   return this.httpClient.get(`http://127.0.0.1:8000/api/user`);
  // }

  login(param: any) {
    // console.log(param);
    return this.httpClient.post(this.API + `/user`, param);
  }
  linkMaster() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/user`);
  }
}
