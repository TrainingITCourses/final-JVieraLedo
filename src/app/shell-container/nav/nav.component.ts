import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../..';
import {SwUpdate} from '@angular/service-worker';
import {Botones} from '../../interfaces/buttons';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CargarLanzamientos} from '../../reducers/launches/launches.actions';
import {Location} from '@angular/common';
import {RoutesState} from 'src/app/reducers/routes/routes.reducer';


@Component({
  selector: 'jvl-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  public rutas$: Observable<any>;
  public route: RoutesState;

  @Input() public titulo: string;
  @Input() public version: string;

  constructor(private store: Store<GlobalState>,
              private location: Location,
              private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    console.log('jvl-na ngOnInit()');

    this.rutas$ = this.store.select('route').pipe(
      map(r => {
        if (r.cargada) {
          this.route = r;
          return r;
        }
      })
    );
  }

  onClickFD() {
    if (this.route !== undefined) {
      this.store.dispatch(new CargarLanzamientos([this.route.idEstado, 2]));
    }
  }

  onClickFA() {
    if (this.route !== undefined) {
      this.store.dispatch(new CargarLanzamientos([this.route.idEstado, 1]));
    }
  }

  onClickV() {
    if (this.route.actual === 'launches') {
      this.store.dispatch(new CargarLanzamientos([null, 2]));
    }
    this.location.back();
  }


  onClick() {
    this.checkForUpdate();
  }

  checkForUpdate() {
    console.log('[App] checkForUpdate started');
    this.swUpdate.checkForUpdate()
      .then(() => {
        console.log('[App] checkForUpdate completed');
        this.activateUpdate();
      })
      .catch(err => {
        console.error(err);
      });
  }

  activateUpdate() {
    console.log('[App] activateUpdate started');
    this.swUpdate.activateUpdate()
      .then(() => {
        console.log('[App] activateUpdate completed');
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  }

}
