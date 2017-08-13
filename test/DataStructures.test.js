import LinkedList from '../src/data-structures/LinkedList';

describe('Data Structures', () => {
  test('LinkedList', () => {
    const numberLinkedList = new LinkedList();
    numberLinkedList.addFirst(2);
    numberLinkedList.addLast(3);
    numberLinkedList.addFirst(1);
    expect(numberLinkedList.head.data).toEqual(1);
    expect(numberLinkedList.head.next.data).toEqual(2);
    expect(numberLinkedList.head.next.next.data).toEqual(3);
    numberLinkedList.clear();
    expect(numberLinkedList.head).toEqual(null);
    expect(numberLinkedList.tail).toEqual(null);

    const stringLinkedList = new LinkedList();
    stringLinkedList.addLast('2');
    stringLinkedList.addFirst('1');
    stringLinkedList.addLast('3');
    expect(stringLinkedList.tail.data).toEqual('3');
    expect(stringLinkedList.tail.prev.data).toEqual('2');
    expect(stringLinkedList.tail.prev.prev.data).toEqual('1');
    stringLinkedList.delete(0);
    stringLinkedList.delete(1);
    expect(stringLinkedList.tail.data).toEqual('2');
    expect(stringLinkedList.head.data).toEqual('2');
  });
});
