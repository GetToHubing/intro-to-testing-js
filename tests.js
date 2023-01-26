// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
  it('should be a function', function () {
    expect(typeof sayHello).toBe('function');
  });
  it('should return a string', function() {
    expect(typeof sayHello()).toBe("string");
  });
  it('should return "Hello, Jane!" when executed', function () {
    expect(sayHello("Jane")).toBe("Hello, Jane!");
  });
  it('should return "Hello, Alex!', function () {
    expect(sayHello("Alex")).toBe("Hello, Alex!");
  });
  it('should return "Hello, Pat!" when executed', function() {
    expect(sayHello("Pat")).toBe("Hello, Pat!");
  });
  it('should return "Hello, World!" when there is no input', function () {
    expect(sayHello()).toBe("Hello, World!");
  });
  it('should return "Hello, World!" when input is true', function () {
    expect(sayHello(true)).toBe("Hello, World!");
  });
  it('should return "Hello, World!" when input is false', function () {
    expect(sayHello(false)).toBe("Hello, World!");
  });
})

describe('isFive', function() {
  it('should be a function', function() {
    expect(typeof isFive).toBe('function');
  });
  it('should return a boolean no matter what', function() {
    expect(typeof isFive()).toBe("boolean");
  });
  it('should return true when input 5', function() {
    expect(isFive(5)).toBe("true");
  });
  it('should return true when input "5"', function() {
    expect(isFive("5")).toBe(true);
  });
})

describe('isEven', function() {
  it('returns false when called without an argument', function() {
    expect(isEven()).toBe(false);
  });
  it('should return false if input is boolean', function() {
    expect(isEven('boolean')).toBe(false);
  });
  it('should return false when input is infinity', function() {
    expect(isEven(Infinity)).toBe(false);
  });
  it('should return true when input is "8', function() {
    expect(isEven("8")).toBe(true);
  });
  it('should return false if input is a string of letters', function() {
    expect(isEven("banana")).toBe(false)
  })
  it('returns false if input is 3', function() {
    expect(isEven(3)).toBe(false);
  });
  it('returns true if input is -4', function() {
    expect(isEven(-4)).toBe(true);
  });
  it('returns true if input is 2', function() {
    expect(isEven(2)).toBe(true);
  });
})