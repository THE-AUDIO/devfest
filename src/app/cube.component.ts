import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube',
  standalone: true,
  template: `
    <ngt-mesh #mesh>
      <ngt-box-geometry />
    </ngt-mesh>
  `,
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Cube {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor() {
    injectBeforeRender(({ delta }) => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += delta;
      mesh.rotation.y += delta;
    });
  }
}