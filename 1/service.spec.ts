const describe: any = null;
const beforeEach: any = null;
const expect: any = null;
const test: any = null;

describe('Service', () => {
    let service: Service;

    beforeEach(() => {
        service = new Service();
    });

    describe('addFive', () => {
        test('Should return 12', () => {
            const myNumber: number = 7;

            const result = service.addFive(myNumber);

            const expectedResult: number = 12;
            expect(result).toEqual(expectedResult);
        });
    });

    describe('greet', () => {
        test('Should greet Rick', () => {
            const name: string = 'Rick';

            const result = service.greet(name);

            const expectedResult: string = 'Hello Rick';
            expect(result).toEqual(expectedResult);
        });

        test('Should return empty string in case invalid argument', () => {
            const result = service.greet(null);

            expect(result).toEqual('');
        });
    });

});
