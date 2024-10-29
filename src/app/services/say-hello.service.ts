import { inject, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
@Injectable({ providedIn: 'root' })
export class SayHelloService {
  loggerService = inject(LoggerService);
  constructor() {}
  hello() {
    this.loggerService.log('Hello');
  }
}
