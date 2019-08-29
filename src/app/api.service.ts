import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  insertData(data){
    return this.http.post("http://casestudylibrary.herokuapp.com/read",data);
  }


  getData(){
    return this.http.get("http://casestudylibrary.herokuapp.com/bookall");
  }
  
  insertauthordata(data)
  {
    return this.http.post("http://casestudylibrary.herokuapp.com/read1",data);
  }

  viewauthor()
  {
    return this.http.get("http://casestudylibrary.herokuapp.com/authorall");
  }
}
