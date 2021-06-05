'use strict';

const isInterleave = require('./interleaving-strings');

describe ('interweaving strings', () => {

  it ('returns true when the third string is made up of strings one and two in order from left to right', () => {
    const b1 = 'abc', b2 = 'def', b3 = 'abcdef'; // true
    const z1 = 'ace', z2 = 'bdf', z3 = 'abcdef'; // true
    const d1 = 'aa', d2 = 'bb', d3 = 'aabb'; // true
    const s1 = 'aabcc', s2 = 'dbbca', s3 = 'aadbbcbcac'; // true
    expect(isInterleave(b1, b2, b3)).toEqual(true);
    expect(isInterleave(z1, z2, z3)).toEqual(true);
    expect(isInterleave(d1, d2, d3)).toEqual(true);
    expect(isInterleave(s1, s2, s3)).toEqual(true);
  });

  it ('returns false when the third string is not comprised of strings one and two in order from left to right', () => {
    const p1 = 'a', p2 = 'b', p3 = 'de'; // false
    const k1 = 'a', k2 = 'b', k3 = 'aa'; // false
    const r1 = 'abc', r2 = 'deg', r3 = 'abcdef'; // false
    const q1 = 'abcd', q2 = 'abcde', q3 = 'edcbadcba'; // false
    expect(isInterleave(p1, p2, p3)).toEqual(false);
    expect(isInterleave(k1, k2, k3)).toEqual(false);
    expect(isInterleave(r1, r2, r3)).toEqual(false);
    expect(isInterleave(q1, q2, q3)).toEqual(false);
  });

  it ('returns false when the sum of the lengths of s1 and s2 does not equal the length of s3', () => {
    const t1 = 'aabcc', t2 = 'dbbc', t3 = 'aadbbcabcc'; // false: t1.length + t2.length !== t3.length
    expect(isInterleave(t1, t2, t3)).toEqual(false);
  });

  it ('returns true when passed empty strings as arguments to all three parameters', () => {
     const p1 = '', p2 = '', p3 = '';
     expect(isInterleave(p1, p2, p3)).toEqual(true);
  });
})



