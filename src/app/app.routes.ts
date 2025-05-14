import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'booking', component: BookingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '404', component: NotFoundComponent},
    { path: '**', component: NotFoundComponent}
];
