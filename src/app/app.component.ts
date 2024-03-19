import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NewCampaignComponent } from "./components/new-campaign/new-campaign.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, HeaderMenuComponent, FooterComponent, HeroComponent, LoginComponent, SignupComponent, NewCampaignComponent]
})
export class AppComponent {
  title = 'client';
}
