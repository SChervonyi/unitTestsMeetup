import { Observable } from "rxjs";

export class ServiceB {

    public property: any = { hello: 'Hello' };
    public promiseProperty: Promise<number>;
    public observableProperty = Observable.create(function(observer) {
        observer.next('Hello');
        observer.next('World');
      });

    public method(): string {
        return Math.random().toString(36).substring(7);
    }

    public updateUserAddress(address: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });
    }
    public observableMethod(): Observable<string> {
        return Observable.create(function(observer) {
            observer.next('Hello');
            observer.next('World');
          });
    }

}