import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LaravelApiService} from "../laravel-api.service";

@Component({
  selector: 'app-affichage2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage2.component.html',
  styleUrl: './affichage2.component.css'
})
export class Affichage2Component {
  constructor(public requetes : LaravelApiService) {}
}
