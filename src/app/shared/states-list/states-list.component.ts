import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Estado} from 'src/app/interfaces/state';
import {Router} from '@angular/router';

@Component({
  selector: 'jvl-states-list',
  templateUrl: './states-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatesListComponent implements OnInit {
  @Input() public states: any[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('states-List_ngOnInit');
  }

  onEstadoSeleccionado(est: Estado) {
    this.router.navigate(['/launches', est.id]);
  }
}
