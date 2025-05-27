import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homePic: string = "images/dog2.webp"

  center: google.maps.LatLngLiteral = { lat: 59.331250, lng: 18.071417 }
  marker: google.maps.LatLngLiteral = { lat: 59.331250, lng: 18.071417 };
}
