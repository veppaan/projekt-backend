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
  mainCourse: string= "";
  dessert: string= "";
  firstname: string="";
  lastname: string="";
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

  booking = {
    starter: this.starter,
    mainCourse: this.mainCourse,
    dessert: this.dessert,
    customer: {
      firstname: this.firstname,
      lastname: this.lastname,
      number: this.number
    }
  }

  payButton(){
    console.log(this.booking);
    console.log("klick");
    this.http.post('https://backend-bookings.onrender.com/bookings', this.booking).subscribe({
      next: response => console.log("Yey:", response),
      error: err => console.error("Ånej", err)
    })

    this.booking.starter="";
    this.booking.mainCourse="";
    this.booking.dessert="";
    this.booking.customer.firstname="";
    this.booking.customer.lastname="";
    this.booking.customer.number="";
    alert("Tack för din beställning! Du får ett sms inom 10 min när den är färdig att hämtas upp!");
  }

}
