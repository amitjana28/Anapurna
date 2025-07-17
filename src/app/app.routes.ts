import { Routes } from '@angular/router';
import { HomeContent } from './Pages/home-content/home-content';
import { Login } from './Pages/login/login';

export const routes: Routes = [
    {
        path:'',
        title : 'Home',
        component : HomeContent,
    },
    {
        path:'login',
        title : 'Login',
        component : Login,
    },
];
