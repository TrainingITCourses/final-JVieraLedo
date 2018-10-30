import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'jvl-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Práctica final - JoseViLe';
}
