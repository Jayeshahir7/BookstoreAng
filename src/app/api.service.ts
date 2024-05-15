import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private __http:HttpClient) { }
  apiUrl = "http://localhost:1000/bs";
  
  getAll(){
    return this.__http.get(this.apiUrl);
  }

  getbyid(id:any){
    return this.__http.get(this.apiUrl+'/'+id);
  }

  delete(id:any){
    return this.__http.delete(this.apiUrl+'/'+id);
  }
  insert(form:any){
    return this.__http.post(this.apiUrl,form);
  }
  update(id:any,form:any){
    return this.__http.put(this.apiUrl+'/'+id,form);
  }
}
