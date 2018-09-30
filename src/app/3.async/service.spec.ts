let service: any;
let expectedResult: any;

describe('', () => {

  test('should return data', (done: jest.DoneCallback) => {
    service.getData(result => {
      expect(result).toBe(expectedResult);

      done();
    });
  });

  // --------------------------------------------------

  test('should return data', () => {
    return service.getData().then(result => {
      expect(result).toBe(expectedResult);
    });
  });

  // or

  test('should return data', async () => {
    const result = await service.getData();
    expect(result).toBe(expectedResult);
  });

  // ---------- Try use type any for complicated test data


  test('should update user', () => {
    const newUser: any = {
      id: '1',
      name: 'Nick'
    };

  // ...
  });

});
