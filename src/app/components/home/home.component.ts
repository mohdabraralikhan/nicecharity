import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [HeroComponent, FooterComponent]
})
export class HomeComponent {

}
