import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {GlobalState} from '../..';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CargarLanzamiento} from '../../reducers/launch/launch.actions';
import {ActivatedRoute} from '@angular/router';
import {CargarRuta} from 'src/app/reducers/routes/routes.actions';

@Component({
  selector: 'jvl-launch',
  templateUrl: './launch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanzamientoComponent implements OnInit {
  public lanzamiento$: Observable<any>;
  private idLanzamiento: number;
  private launch: any;

  constructor(private store: Store<GlobalState>,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Lanzamiento_ngOnInit');
    this.cargaObservables();
    this.cargaDatos();
  }

  private cargaDatos() {
    this.idLanzamiento = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(new CargarLanzamiento([this.idLanzamiento]));
  }

  private cargaObservables() {
    const _this = this;
    this.lanzamiento$ = this.store.select('launch').pipe(
      map(Lan => {
        if (Lan.cargado) {
          // Ya se que no es la solución más idónea (con más tiempo buscaría otra), pero si no se me quedaba bloqueado
          if (_this.launch === undefined) {
            this.store.dispatch(new CargarRuta(['launch: ' + Lan.launch[0].name, true, false, 'launch']));
          } else if (_this.launch.id !== Lan.launch[0].id) {
            this.store.dispatch(new CargarRuta(['launch: ' + Lan.launch[0].name, true, false, 'launch']));
          }
          _this.launch = Lan.launch[0];
          return Lan.launch[0];
        }
      })
    );
  }
}
