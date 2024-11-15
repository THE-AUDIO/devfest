import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, computed, input, signal, viewChild } from '@angular/core';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { WINDOW } from './window-token';
import { NgxThreeGlobeComponent } from '@omnedia/ngx-three-globe';
import { isPlatformBrowser } from '@angular/common';
import { SceneGraph } from './SceneGraph';
import { NgtCanvas, extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgxThreeGlobeComponent, NgxBorderBeamComponent, NgtCanvas ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit , OnInit{
  protected sceneGraph = SceneGraph
  title = 'devFest';
  isBrowser!: boolean;
  
  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {this.isBrowser = isPlatformBrowser(this.platformId);}
  ngOnInit(): void {
    // this.init3D();
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      // Arrêtez l'exécution si `window` n'est pas défini (exécution côté serveur)
      return;
    }
}
}