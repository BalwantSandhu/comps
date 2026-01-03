import { Component } from '@angular/core';
import { DividerComponent } from "../../shared/divider/divider.component";
import { ModalComponent } from "../modal/modal.component";
import { NgIf } from "@angular/common";
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-mods-home',
  imports: [DividerComponent, ModalComponent, NgIf, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    {title:'Why is the sky blue?', content:"The sky is blue because of how Earth's atmosphere scatters sunlight, a process called Rayleigh scattering, where shorter blue light waves are scattered more than longer red waves, filling the sky with blue light; our eyes are more sensitive to blue than violet, even though violet scatters more, making the sky appear blue"},
    {title:'Why is sky red at sunset', content:"Sunsets are red because sunlight travels through more of Earth's atmosphere at sunrise/sunset, scattering away shorter blue wavelengths, leaving longer red and orange light to reach our eyes; this effect is intensified by more dust, pollution, or water droplets, which scatter even more blue light, creating vibrant reds."},
    {title:'Why is fire yellow?', content:"Fire is yellow primarily because of glowing soot particles (unburnt carbon) produced during incomplete combustion, like in candles or wood fires, which radiate yellow-hot light, but the presence of sodium or other elements can also add yellow, while blue flames indicate hotter, more efficient burning with sufficient oxygen. The yellow color comes from these tiny carbon specks heating up and glowing, similar to an old light bulb filament, rather than direct atomic emission. "}
  ];

  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
