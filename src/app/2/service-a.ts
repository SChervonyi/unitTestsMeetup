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


Zone.current.fork({ name: 'new' }).run(() => {
  setTimeout(() => {
    console.log(Zone.current.name) // new
  }, 100)
  
  Zone.current.fork({ name: 'anotherOne' }).run(() => {
    setTimeout(() => {
      console.log(Zone.current.name) // anotherOne
    }, 50)
  })
})