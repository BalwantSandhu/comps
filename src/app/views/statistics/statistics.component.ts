import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-statistics',
  imports: [NgForOf],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  @Input() data: any = [];
}
