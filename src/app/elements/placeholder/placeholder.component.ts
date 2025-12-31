import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";
import { TimesDirective } from "../times.directive";

@Component({
  selector: 'app-placeholder',
  imports: [NgIf, TimesDirective],
  standalone: true,
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css'
})
export class PlaceholderComponent {
  @Input() header = true;
  @Input() lines = 3;

}
