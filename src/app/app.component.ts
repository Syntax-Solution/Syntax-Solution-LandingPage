import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { BodySectionComponent } from "./components/body-section/body-section.component";
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,BodySectionComponent,ProductSectionComponent,AboutSectionComponent,AppFooterComponent]
})
export class AppComponent {
  title = 'syntaxproject';
}