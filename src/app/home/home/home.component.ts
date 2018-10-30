import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {GlobalState} from '../..';
import {CargarEstados} from '../../reducers/states/states.actions';
import {CargarRuta} from '../../reducers/routes/routes.actions';
import {CargarLanzamientos} from 'src/app/reducers/launches/launches.actions';


@Component({
  selector: 'jvl-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public estados$: Observable<any>;
  private subscripcionEstados: any;
  private subscripcionLanzamientos: any;

  constructor(private store: Store<GlobalState>) {
  }

  ngOnInit() {
    this.cargaObservables();
    this.cargaDatos();
  }

  private cargaDatos() {
    this.store.dispatch(new CargarEstados());
    this.store.dispatch(new CargarLanzamientos([null, 2]));
    this.store.dispatch(new CargarRuta(['', false, false, 0, 'states']));
  }

  private cargaObservables() {
    this.subscripcionEstados = this.store.select('states').subscribe(est => {
      this.estados$ = this.store
        .select('states')
        .pipe(
          map(est2 => {
            if (est2.cargados) {
              this.subscripcionEstados.unsubscribe();
              return est2.states;
            }
          })
        );
    });

    const _this = this;
    _this.subscripcionLanzamientos = this.store.select('launches').subscribe(lan => {
      if (lan.cargados) {
        if (lan.launches.length > 0) {
          if (_this.subscripcionLanzamientos) {
            _this.subscripcionLanzamientos.unsubscribe();
            return this.store.dispatch(
              new CargarRuta(
                ['Estados de lanzamientos : Número de lanzamientos cargados ' + lan.launches.length, false, false, 0, 'states']));
          }
        }
      }
    });
  }


  ngOnDestroy() {
    this.subscripcionLanzamientos.unsubscribe();
    this.subscripcionEstados.unsubscribe();
  }
}
