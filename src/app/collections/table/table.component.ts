import { Component, Input } from '@angular/core';
import { NgForOf,NgClass } from "@angular/common";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgForOf, JsonPipe, NgClass],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input('class') classNames = '';

  @Input() data: any[] = [];
  @Input() headers: any[] = [];
}
