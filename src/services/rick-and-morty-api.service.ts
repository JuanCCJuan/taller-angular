import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../app/models/RickAndMorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyAPIService {
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
    return `https://rickandmortyapi.com/api/${endpoint}`;
  }

  public CharacterService(): Observable<Character>{
    return this.http.get<any>(
      this.url('character'), 
      this.header());
  }

  constructor(private http: HttpClient) { }
}
