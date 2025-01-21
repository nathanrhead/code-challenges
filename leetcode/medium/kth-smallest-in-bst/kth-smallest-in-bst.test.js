'use strict';

const kthSmallest = require('./kth-smallest-in-bst');

describe('kthSmallest', () => {
  it('returns the kth smallest element in the BST', () => {
    const root = {
      val: 3,
      left: {
        val: 1,
        left: null,
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    };
    const k = 1;
    expect(kthSmallest(root, k)).toBe(1);
  });

  it('returns the kth smallest element in the BST', () => {
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 2,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    };
    const k = 3;
    expect(kthSmallest(root, k)).toBe(3);
  });
});
