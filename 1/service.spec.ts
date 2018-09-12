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
        test('Should return 12 for ', () => {
            const myNumber: number = 7;

            const result = service.addFive(myNumber);

            const expectedResult: number = 12;
            expect(result).toEqual(expectedResult);
        });
    });

})