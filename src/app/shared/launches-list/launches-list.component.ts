import {ChangeDetectionStrategy, Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Launch} from '../../interfaces/launch';
import {Router} from '@angular/router';

@Component({
  selector: 'jvl-launches-list',
  templateUrl: './launches-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListComponent implements OnInit {
  @Input() public launches: any[];
  @Input() public estadoSel: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('Launches-List_ngOnInit');
  }

  onLanzamientoSeleccionado(lan: Launch) {
    this.router.navigate(['/launch', lan.id]);
  }
}
