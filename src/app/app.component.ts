import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import * as THREE from 'three';
import { WINDOW } from './window-token';
import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgxThreeGlobeComponent, NgxBorderBeamComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements AfterViewInit {
  title = 'devFest';
  isBrowser!: boolean;
  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {this.isBrowser = isPlatformBrowser(this.platformId);}

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      // Arrêtez l'exécution si `window` n'est pas défini (exécution côté serveur)
      return;
    }
}
}