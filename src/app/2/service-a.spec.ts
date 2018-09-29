import { ServiceBMock } from './service-b.mock';
import { ServiceA } from './service-a';
import { ServiceCMock } from './service-c.mock';

describe('ServiceA', () => {
  let serviceBMock: ServiceBMock;
  let serviceCMock: ServiceCMock;
  let serviceA: ServiceA;

  beforeEach(() => {
    serviceBMock = new ServiceBMock();
    serviceCMock = new ServiceCMock();

    serviceA = new ServiceA(<any>serviceBMock);
  });

});
