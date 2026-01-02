import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";
import { DividerComponent } from "../../shared/divider/divider.component";
import { NgClass } from "@angular/common";
import { BiographyComponent } from "../biography/biography.component";
import { ModsRoutingModule } from "../../mods/mods-routing.module";
import { TabsComponent } from "../tabs/tabs.component";


@Component({
  selector: 'app-collections-home',
  imports: [TableComponent, DividerComponent, NgClass, BiographyComponent, ModsRoutingModule, TabsComponent],
  standalone: true,
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer', employeed: true},
    { name: 'Jill', age: 26, job: 'Engineer', employeed: false},
    { name: 'Elyse', age: 25, job: 'Engineer', employeed: true}
  ];
  headers = [
    {key:'employeed',label:'Has a Job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];
}
