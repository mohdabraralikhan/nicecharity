import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewCampaignComponent } from './components/new-campaign/new-campaign.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'start-campaign',component:NewCampaignComponent},
    {path:'signup',component:SignupComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'campaigns',component:CampaignsComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'admin',component:AdminComponent},
    {path: '**', component:PageNotFoundComponent}
   
];
