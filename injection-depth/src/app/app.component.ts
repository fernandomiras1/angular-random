import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: LoggerService,
    // useClass: Cuando angular cree una instancia de este servicios de registrador, usara la Instancia de ExperimentalLoggerService
    // crea una nueva instancia de la clase cuando usamos useClass.
    // useExisting: Si exite una intancia utiliza esa, no crea una nueva intancia
    // useValue: Sirve para instanciar un Objeto. 
    // useFactor: Se usa cuando dependemos de parametors externos como inyecion token.
    useClass: ExperimentalLoggerService
  }]
})
export class AppComponent {
  public myName:string = 'Enrique';
  public titleStyles:{};

  /**
   * 
   *  @Optional(): Evita que si no tiene instancia no se rompa mi applicacion. Si la instancia en nula no se rompe la app.
      @Self(): Intenta resolver la dependencia solo en su propio inyector. ( si agregamos self en otro  modulo o componente, no es la misma intancia.)
      Por eso si no esta en el componente tira un error. Ahora si lo agregaregamos el provider del componente funciona correctamente.
      @SkipSelf(): hace lo contrario. Simplemente mantiene el inyector donde se declaro y depende de los resultados a partir de su padre. 
      Se usa para que omita el inyector actual y comience a resolver las dependencias de padres 
      Host: El elemento principal debe sder la ultima parada
   */

  constructor(private logger: LoggerService,
              private experimentalLogger: ExperimentalLoggerService){
    if (this.logger) {
      this.logger.prefix = 'App Component';
      this.logger.log('construtor init');
    } 
   console.log('is instance the same', this.logger === this.experimentalLogger);
  }
  
  updateNameClasses(name:string){
    return {
      'error': name.length <= 3,
      'warning': name.length >3 && name.length <=6,
      'success': name.length > 6,
      'bold': name.length > 8
    }
  }
}
