import {Component} from '@angular/core';
import {UsuarioService} from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptores-app';

  constructor(private usuariosService: UsuarioService) {

    this.usuariosService.obtenerUsuarios().subscribe(resp => {
      console.log(resp);
    },error => {
      console.log('error en el app component ');
    });
  }
}
