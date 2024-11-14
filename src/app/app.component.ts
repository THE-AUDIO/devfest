import { Experience } from './experience/experience.component';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, Inject } from '@angular/core';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: `./app.component.html`,
    styleUrl: './app.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
    sceneGraph = Experience;
    title = 'devFest';
}