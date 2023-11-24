import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaravelApiService} from "../laravel-api.service";


@Component({
  selector: 'app-affichage1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage1.component.html',
  styleUrl: './affichage1.component.css'
})
export class Affichage1Component {
constructor(public requetes : LaravelApiService) {}
}
