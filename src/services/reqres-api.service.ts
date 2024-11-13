import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {
  private body(data: any){
    return JSON.stringify(data);
  }

  private header(){
    return{
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  private url(endpoint: string){
    return `http://192.168.100.78/api/${endpoint}`
  }

  constructor(private http:HttpClient){}

  public login(user: string, password: string){
    return this.http.post<any>(
      this.url('user/login/'), 
      this.body({
        email: user, 
        password
      }), 
      this.header()
    )
  }
}
