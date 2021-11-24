import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
export const appRoutes:Routes = [
    { path:'Login', component:LoginComponent },
    
    { path : '', redirectTo: '/Login', pathMatch : 'full'},
    { path:'welcome', component:WelcomeComponent },]