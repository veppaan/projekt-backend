import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  starter: string= "";
  main: string= "";
  dessert: string= "";
  name: string="";
  number: string = "";
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

  payText = "Beställ och betala 89kr";

  payButton(){

    this.starter="";
    this.main="";
    this.dessert="";
    this.name="";
    this.number="";
    alert("Tack för din beställning! Du får ett sms inom 10 min att den är färdig att hämtas upp!");
  }

}
