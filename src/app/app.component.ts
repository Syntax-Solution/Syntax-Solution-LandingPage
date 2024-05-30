import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { BodySectionComponent } from "./components/body-section/body-section.component";
import { ProductSectionComponent } from './components/product-section/product-section.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,BodySectionComponent,ProductSectionComponent]
})
export class AppComponent {
  title = 'syntaxproject';
}