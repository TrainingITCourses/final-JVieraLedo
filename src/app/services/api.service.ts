import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {of, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {GlobalState} from '..';
import {ModoOrden} from '../interfaces/orderMode';

@Injectable()
export class ApiService {
  constructor(private httpC: HttpClient, private store: Store<GlobalState>) {
  }

  public getStatusTypes$ = (): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchstatus.json')
      .pipe(map((res: any) => res.types))


  public getStateTypes$(valor): Observable<any> {
    if (valor !== null) {
      return this.httpC.get('../../assets/launchstatus.json').pipe(
        map((res: any) =>
          res.types
            .filter(est => {
              return (est.id === Number(valor));
            })
            .map(estado => {
              return estado;
            })
        )
      );
    } else {
      return of([]);
    }
  }

  public getFilterLaunches(valor, orden: ModoOrden): Observable<any> {
    if (valor !== null) {
      return this.httpC.get('../../assets/launchlibrary.json').pipe(
        map((res: any) =>
          res.launches
            .filter(lan => {
              return this.filtraEstados(lan, Number(valor));
            })
            .map(launch => {
              return launch;
            })
            .sort(this.ordenar(orden))
        )
      );
    } else {
      return this.httpC.get('../../assets/launchlibrary.json').pipe(map((res: any) => res.launches));
    }
  }

  public getLaunch$ = (valor): Observable<any[]> =>
    this.httpC
      .get('../../assets/launchlibrary.json')
      .pipe(map((res: any) => res.launches
        .filter(lan => {
          return lan.id === Number(valor);
        })
        .map(launch => {
          return launch;
        })
      ))

  private filtraEstados(launch: any, valor: number): boolean {
    return (launch.status === valor);
  }

  private ordenar(orden: ModoOrden) {
    const tipo: number = orden === ModoOrden.ascendente ? 1 : -1;
    return function (a: any, b: any) {
      if (a.isostart < b.isostart) {
        return -1 * tipo;
      }
      if (a.isostart > b.isostart) {
        return 1 * tipo;
      }
      return 0;
    };
  }
}
