import { Component } from '@angular/core';
import { CollectionsRoutingModule } from "../../collections/collections-routing.module";

@Component({
  selector: 'app-divider',
  imports: [CollectionsRoutingModule],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {}
