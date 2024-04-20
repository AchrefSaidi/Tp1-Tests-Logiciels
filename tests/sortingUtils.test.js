import { trier } from '../sortingUtils.js';
import { describe, it, expect } from 'vitest';

describe('trier function', () => {
  it('should correctly sort an array of numbers', () => {
    const input = [5, 3, 8, 1];
    const expected = [1, 3, 5, 8];
    expect(trier(input)).toEqual(expected);
  });

  it('should handle an already sorted array', () => {
    const input = [1, 2, 3, 4];
    expect(trier(input)).toEqual(input);
  });

  it('should handle an array sorted in reverse order', () => {
    const input = [4, 3, 2, 1];
    const expected = [1, 2, 3, 4];
    expect(trier(input)).toEqual(expected);
  });

  it('should return an empty array if the input is empty', () => {
    expect(trier([])).toEqual([]);
  });
});
