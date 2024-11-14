import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend } from 'angular-three';
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

extend({ Mesh, BoxGeometry, MeshBasicMaterial });

@Component({
  standalone: true,
  template: `
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-basic-material color="hotpink" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience implements AfterViewInit {
  @ViewChild('mesh', { static: true }) meshRef!: ElementRef<Mesh>;

  ngAfterViewInit() {
    const mesh = this.meshRef.nativeElement;
    const animate = (time: number) => {
      mesh.rotation.x += 0.01; // Rotation lente autour de l'axe X
      mesh.rotation.y += 0.01; // Rotation lente autour de l'axe Y
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}
