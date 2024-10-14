import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  mostrar: boolean = false;
  @Input() imagen! : string;
  @Input() nombre! : string;
  @Input() descripcion! : string;

  handleClick = () => {
    this.mostrar = !this.mostrar;
  }
}
