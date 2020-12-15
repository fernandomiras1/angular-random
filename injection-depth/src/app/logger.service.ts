import { Injectable } from "@angular/core";
import { Logger } from "./logger";

@Injectable({
  providedIn: 'root'
})

export class LoggerService implements Logger {
  prefix = 'root';
  log(msg: any)   { console.log(`${this.prefix}: ${msg}`); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}