
import { Observable, empty } from 'rxjs';

export class UserServiceMock {
    public property: any;
    public promiseProperty = Promise.resolve();
    public observableProperty = empty();
   
    public method = () => {};
    public promiseMethod = () => Promise.resolve();
    public observableMethod = () => empty();
  }