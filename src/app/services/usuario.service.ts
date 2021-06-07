import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');



    return this.http.get('https://reqres.in/api/user/Aaaa', {
      params,
    }).pipe(
      map((resp: any) => resp.data),
    );
  }


}
