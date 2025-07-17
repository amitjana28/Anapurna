import { Routes } from '@angular/router';
import { DonerLogin } from './Pages/doner-login/doner-login';
import { ReceiverLogin } from './Pages/receiver-login/receiver-login';
import { Login } from './Pages/login/login';
import { App } from './app';
import { HomeContent } from './Pages/home-content/home-content';

export const routes: Routes = [
    {
        path:'',
        title : 'Home',
        component : HomeContent,
    },
    {
        path:'login-as-doner',
        title : 'Doner Login',
        component : DonerLogin,
    },
    {
        path:'login-as-reciever',
        title : 'Receiver Login',
        component : ReceiverLogin,
    },
    {
        path: 'login',
        title : 'Login',
        component : Login,
    }
];
