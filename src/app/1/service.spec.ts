import { Service } from './service';

describe('Service', () => {
    let service: Service;

    beforeEach(() => {
        service = new Service();
    });

    describe('addFive', () => {
        test('Should return 12', () => {
            const myNumber = 7;

            const result = service.addFive(myNumber);

            const expectedResult = 12;
            expect(result).toEqual(expectedResult);
        });
    });

    describe('greet', () => {
        test('Should greet Rick', () => {
            const name = 'Rick';

            const result = service.greet(name);

            const expectedResult = 'Hello Rick';
            expect(result).toEqual(expectedResult);
        });

        test('Should return empty string in case invalid argument', () => {
            const result = service.greet(null);

            expect(result).toEqual('');
        });
    });

});
