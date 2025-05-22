import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  starters: any = [];
  mainCourses: any = [];
  desserts: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://backend-projekt-api-jxss.onrender.com/api/starters").subscribe(data => {
      this.starters = data;
    });
    this.http.get("https://backend-projekt-api-jxss.onrender.com/api/main-courses").subscribe(data => {
      this.mainCourses = data;
    });
    this.http.get("https://backend-projekt-api-jxss.onrender.com/api/desserts").subscribe(data => {
      this.desserts = data;
    });
  }

}
