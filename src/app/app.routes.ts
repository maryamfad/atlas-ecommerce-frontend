import { Routes } from '@angular/router';
import { SignupComponent } from './features/auth/signup/signup.component';
export const routes: Routes = [
    {
        path: 'signup', 
        component: SignupComponent 
      },
      {
        path: '', 
        redirectTo: '/signup', 
        pathMatch: 'full'
      },
      {
        path: '**', // Wildcard route for a 404 page (optional)
        redirectTo: '/signup'
      }
];
