import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {EstadosActionTypes, CargarEstados, EstadosCargados, EstadosNoCargados} from './states.actions';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {ApiService} from '../../services/api.service';
import {of} from 'rxjs';


@Injectable()
export class EstadosEffects {

  @Effect()
  public Carga$ = this.actions$
    .ofType(EstadosActionTypes.CargarEstados)
    .pipe(
      mergeMap((action: CargarEstados) =>
        this.apiService
          .getStatusTypes$()
          .pipe(map(states => new EstadosCargados(states)),
            catchError(err => of(new EstadosNoCargados('Los states no han podido cargarse')))
          ))
    );

  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
