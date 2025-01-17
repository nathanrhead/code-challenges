/**
 * @param {number} capacity
 */

class ListNode {
  constructor(key = 0, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Maps key to ListNode
  
    // Dummy head and tail nodes for the doubly linked list.
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get = function(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this._remove(node);
      this._addToFront(node);
      return node.value;
    }
    return -1;
  }

  put = function(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this._remove(node);
      this._addToFront(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const lruNode = this.tail.prev;
        this._remove(lruNode);
        this.cache.delete(lruNode.key);
      }

      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this._addToFront(newNode);
    }
  }

  _remove = function(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  };
  
  _addToFront = function(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextNode;
    nextNode.prev = node;
  };
};

module.exports = LRUCache;

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
