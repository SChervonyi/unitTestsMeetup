import { ServiceC } from './service-c';
import { Observable } from 'rxjs';
import { ServiceB } from './service-b';

export class ServiceA {

  constructor(private serviceB: ServiceB) {
    }

  public method(serviceC: ServiceC): string {
      const result = serviceC.method();
    return this.serviceB.method(result);
    }

}
