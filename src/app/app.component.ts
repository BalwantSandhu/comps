import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
//import { ElementsModule } from './elements/elements.module';
//import { CollectionsModule } from './collections/collections.module';
//import { ElementsHomeComponent } from "./elements/elements-home/elements-home.component";
//import { CollectionsHomeComponent } from "./collections/collections-home/collections-home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comps';
}
