import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { Fruta } from '../../models/test';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  frutas : Fruta[] = [
    {nombre: 'Cereza', imagen: '/images/cherry.jpg', descripcion: 'La cereza es el fruto pequeño y redondo del cerezo, de color rojo o negro brillante, con un sabor dulce o ligeramente ácido. Es una fruta carnosa con una única semilla en su interior, que se consume fresca o se usa en la preparación de postres, jugos, mermeladas y otros productos alimenticios.'}, 
    {nombre: 'Piña', imagen: '/images/pinapple.jpg', descripcion: 'La piña es una fruta tropical con una cáscara dura y rugosa de color marrón y verde, coronada por hojas largas y espinosas. Su pulpa es amarilla, jugosa y dulce, con un sabor refrescante y ácido.'}, 
    {nombre: 'Manzana', imagen: '/images/apple.jpg', descripcion: 'La manzana es una fruta redonda que proviene del árbol llamado manzano. Es una de las frutas más populares y consumidas en todo el mundo. Las manzanas pueden tener diferentes colores, como rojo, verde o amarillo, y varían en sabor desde dulce hasta ligeramente ácido.'}, 
    {nombre: 'Naranja', imagen: '/images/orange.jpg', descripcion: 'La naranja es una fruta cítrica que proviene del árbol llamado naranjo. Tiene una piel gruesa y rugosa de color naranja, y su pulpa es jugosa y dulce con un toque ácido. Existen diferentes variedades de naranjas, como las de mesa o las de jugo, y pueden tener semillas o ser sin semillas. '}, 
  ];
}