import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { YulissaComponent } from './components/yulissa/yulissa.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, YulissaComponent],
  template: `
  <app-yulissa></app-yulissa>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
