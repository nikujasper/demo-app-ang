import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SchoolInspectionService {
  constructor(public httpClient: HttpClient) {}
  getDistrict() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/getDistrict`);
  }
  getBlock(data: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/getBlock`, data);
  }
  getCluster(data: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/getCluster`, data);
  }
  getSchool(data: any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/getSchool`, data);
  }

  submitInspection(data: any) {
    return this.httpClient.post(
      'http://127.0.0.1:8000/api/storeInspection',
      data
    );
  }
}
