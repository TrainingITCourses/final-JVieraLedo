import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {UpdateAvailableEvent} from '@angular/service-worker/src/low_level';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'jvl-shell-container',
  templateUrl: './shell-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellContainerComponent implements OnInit {
  @Input() public titulo: string;
  @Input() public notificado: boolean;

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    console.log('Shell_ngOnInit');
    this.observeVersions();
  }


  private observeVersions() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        const msg = 'Existe una nueva versión, ¿desea instalarla?';
        if (confirm(msg)) {
          window.location.reload();
        }
      });
    }
  }
}
