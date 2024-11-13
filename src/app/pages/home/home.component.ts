import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReqresApiService } from '../../../services/reqres-api.service';

@Component({
  standalone: true,
  selector: 'ui-home',
  imports: [FormsModule],
  styleUrl: './home.component.css', 
  templateUrl: './home.component.html',
})

export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(private apiReqres:ReqresApiService){}

  login(user: string, password: string){
    console.log(`${user} - ${password}`);

    this.apiReqres.login(user, password).subscribe(
      res => {
        console.log('Login success !');
        console.log(res.token);
      }, 
      err => {
        console.log(err.error.error);
      }
    )
  }
}
