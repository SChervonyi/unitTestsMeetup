import { ServiceBMock } from './service-b.mock';
import { ServiceA } from './service-a';

describe('ServiceA', () => {
  let serviceBMock: ServiceBMock;
  let serviceA: ServiceA;

  beforeEach(() => {
    serviceBMock = new ServiceBMock();

    serviceA = new ServiceA(<any>serviceBMock);
  });

});
