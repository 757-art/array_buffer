import ArrayBufferConverter from "../src/index"

test ('Перевод в строку', () => {
    const string = ArrayBufferConverter.load('TestMyConverter');
    expect(string.byteLength).toEqual(30)
});

test('Объект в строке', () => {
    const array = ArrayBufferConverter.load('TestMyConverter');
    const result = ArrayBufferConverter.toString(array);
    expect(result).toEqual('TestMyConverter');
  });