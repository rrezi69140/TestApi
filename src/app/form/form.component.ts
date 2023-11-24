import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl} from "@angular/forms";
import {LaravelApiService} from "../laravel-api.service";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  delay: FormControl = new FormControl( '');
  user: FormControl = new FormControl( '');

  constructor (public laravel_api: LaravelApiService) {}

  apiRequest(){
    this.laravel_api.envoieRequete(
      this.user.value,
      this.delay.value
    );
  }

}






