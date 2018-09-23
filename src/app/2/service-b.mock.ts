
import { Observable, empty } from 'rxjs';

export class ServiceBMock {
    public property: any;
    public promiseProperty = Promise.resolve();
    public observableProperty = empty();
   
    public method = () => {};
    public promiseMethod = () => Promise.resolve();
    public observableMethod = () => empty();
  }