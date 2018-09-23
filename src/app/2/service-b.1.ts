import { Observable } from 'rxjs';
import { ServiceB } from './service-b';

export class ServiceA {

    constructor(private serviceB: ServiceB) {
    }

    public method(): string {
      return this.serviceB.method();
    }

}
