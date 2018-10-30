import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {ApiService} from '../../services/api.service';
import {of} from 'rxjs';
import {
  LanzamientoActionTypes,
  LanzamientoCargado,
  CargarLanzamiento,
  LanzamientoNoCargado
} from './launch.actions';

@Injectable()
export class LanzamientoEffects {
  @Effect()
  public Carga$ = this.actions$
    .ofType(LanzamientoActionTypes.CargarLanzamiento)
    .pipe(
      mergeMap((action: CargarLanzamiento) =>
        this.apiService
          .getLaunch$(action.payload)
          .pipe(map(lanFiltrado => new LanzamientoCargado(lanFiltrado)),
            catchError(err => of(new LanzamientoNoCargado('El launch no han podido cargarse')))
          ))
    );


  constructor(private actions$: Actions, private apiService: ApiService) {
  }
}
