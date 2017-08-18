import LinkedList from './LinkedList';

test('LinkedList of numbers', () => {
  const numberLinkedList = new LinkedList();
  numberLinkedList.addFirst(2);
  numberLinkedList.addLast(3);
  numberLinkedList.addFirst(1);
  expect(numberLinkedList.head.data).toEqual(1);
  expect(numberLinkedList.getFirst()).toEqual(numberLinkedList.head.data);
  expect(numberLinkedList.head.next.data).toEqual(2);
  expect(numberLinkedList.head.next.next.data).toEqual(3);
  expect(numberLinkedList.getLast()).toEqual(numberLinkedList.tail.data);
  expect(numberLinkedList.delete(2)).toEqual(true);
  expect(numberLinkedList.head.next).toEqual(numberLinkedList.tail);
  numberLinkedList.clear();
  expect(numberLinkedList.delete(2)).toEqual(false);
  expect(numberLinkedList.head).toEqual(null);
  expect(numberLinkedList.tail).toEqual(null);
});

test('LinkedList of strings', () => {
  const stringLinkedList = new LinkedList();
  stringLinkedList.addLast('2');
  stringLinkedList.addFirst('1');
  stringLinkedList.addLast('3');
  expect(stringLinkedList.tail.data).toEqual('3');
  expect(stringLinkedList.tail.prev.data).toEqual('2');
  expect(stringLinkedList.tail.prev.prev.data).toEqual('1');
  expect(stringLinkedList.delete(2)).toEqual(false);
  expect(stringLinkedList.delete('1')).toEqual(true);
  expect(stringLinkedList.delete('3')).toEqual(true);
  expect(stringLinkedList.getFirst()).toEqual(stringLinkedList.getLast());
  expect(stringLinkedList.delete('2')).toEqual(true);
  expect(() => {
    stringLinkedList.getFirst();
  }).toThrow();
  expect(() => {
    stringLinkedList.getLast();
  }).toThrow();
});
