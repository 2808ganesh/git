import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnquiryForm } from '../model/enquiry-form';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }


  saveData(enquiry: EnquiryForm)
  {

    return this.http.post('http://localhost:8767/health/saveE',enquiry)

  }


}
