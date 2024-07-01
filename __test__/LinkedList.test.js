const { LinkedList } = require('../LinkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('append method', () => {
    list.append(1);
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(1);

    list.append(2);
    expect(list.size).toBe(2);
    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(2);
  });

  test('prepend method', () => {
    list.prepend(1);
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(1);

    list.prepend(2);
    expect(list.size).toBe(2);
    expect(list.head.data).toBe(2);
    expect(list.tail.data).toBe(1);
  });

  test('insertAt method', () => {
    list.insertAt(1, 1);
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(1);

    list.insertAt(2, 1);
    expect(list.size).toBe(2);
    expect(list.head.data).toBe(2);
    expect(list.tail.data).toBe(1);

    list.insertAt(3, 2);
    expect(list.size).toBe(3);
    expect(list.head.data).toBe(2);
    expect(list.tail.data).toBe(1);
  });

  test('at method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.at(1).data).toBe(1);
    expect(list.at(2).data).toBe(2);
    expect(list.at(3).data).toBe(3);
    expect(list.at(4)).toBeUndefined();
  });

  test('pop method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.pop();
    expect(list.size).toBe(2);
    expect(list.tail.data).toBe(2);

    list.pop();
    expect(list.size).toBe(1);
    expect(list.tail.data).toBe(1);

    list.pop();
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('shift method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.shift();
    expect(list.size).toBe(2);
    expect(list.head.data).toBe(2);

    list.shift();
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(3);

    list.shift();
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('removeAt method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(2);
    expect(list.size).toBe(2);
    expect(list.head.data).toBe(1);
    expect(list.tail.data).toBe(3);

    list.removeAt(1);
    expect(list.size).toBe(1);
    expect(list.head.data).toBe(3);
    expect(list.tail.data).toBe(3);

    list.removeAt(1);
    expect(list.size).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test('contains method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.contains(2)).toBe(true);
    expect(list.contains(4)).toBe(false);
  });

  test('find method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.find(2)).toBe(2);
    expect(list.find(4)).toBeNull();
  });

  test('toString method', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toString()).toBe('(1) -> (2) -> (3) -> null');
  });
});
