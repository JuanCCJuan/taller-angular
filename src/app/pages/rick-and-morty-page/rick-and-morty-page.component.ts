import { Component } from '@angular/core';
import { RickAndMortyAPIService } from '../../../services/rick-and-morty-api.service';

@Component({
  selector: 'app-rick-and-morty-page',
  standalone: true,
  imports: [],
  templateUrl: './rick-and-morty-page.component.html',
  styleUrl: './rick-and-morty-page.component.css'
})
export class RickAndMortyPageComponent {
  constructor(private apirickMorty: RickAndMortyAPIService){}

  getcharacter(){
    this.apirickMorty.CharacterService().subscribe(
      res => (
        console.log(res)
      ), 
      err => (
        alert(err)
      )
    )
  }
}
