'use strict';

const rightSideView = require('./bt-rightside-view.js');

describe('rightSideView', () => {
  it ('returns the right side view of the binary tree', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        right: {
          val: 5
        }
      },
      right: {
        val: 3,
        right: {
          val: 4
        }
      }
    };
    const expected = [1, 3, 4];
    expect(rightSideView(root)).toEqual(expected);
  });

  it ('returns the right side view of the binary tree', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        right: {
          val: 5
        }
      },
      right: {
        val: 3
      }
    };
    const expected = [1, 3, 5];
    expect(rightSideView(root)).toEqual(expected);
  });

  it ('returns the right side view of the binary tree', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 4,
          left: {
            val: 5
          }
        }
      },
      right: {
        val: 3
      }
    };
    const expected = [1, 3, 4, 5];
    expect(rightSideView(root)).toEqual(expected);
  });

  it ('returns the right side view of the binary tree', () => {
    const root = {
      val: 1,
      right: {
        val: 3
      }
    };
    const expected = [1, 3];
    expect(rightSideView(root)).toEqual(expected);
  });

  it ('returns the right side view of the binary tree', () => {
    const root = null;
    const expected = [];
    expect(rightSideView(root)).toEqual(expected);
  });
});