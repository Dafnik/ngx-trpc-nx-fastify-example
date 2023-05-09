import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {injectTRPCClient} from './trpc';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {tap} from 'rxjs';

@Component({
  standalone: true,
  selector: 'poweruptime-root',
  imports: [RouterOutlet, AsyncPipe, JsonPipe, NgIf, NgForOf],
  template: `
    <router-outlet />
    <div *ngIf="hello$ | async as hello">
      <article *ngFor="let m of hello">
        <h4>{{ m.name }}</h4>
      </article>
    </div>
  `,
})
export class AppComponent {
  hello$ = injectTRPCClient()
    .example.hello2.query()
    .pipe(tap((monitors) => console.log(monitors)));
}
