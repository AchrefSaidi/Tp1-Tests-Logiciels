import { isPriceInRange } from '../priceRange.js';
import { describe, it, expect } from 'vitest';

describe('isPriceInRange function tests', () => {
    it('should return true if the price is exactly at the minimum boundary', () => {
        expect(isPriceInRange(10, 10, 20)).toBe(true);
    });

    it('should return true if the price is exactly at the maximum boundary', () => {
        expect(isPriceInRange(20, 10, 20)).toBe(true);
    });

    it('should return true if the price is within the range', () => {
        expect(isPriceInRange(15, 10, 20)).toBe(true);
    });

    it('should return false if the price is below the minimum boundary', () => {
        expect(isPriceInRange(9, 10, 20)).toBe(false);
    });

    it('should return false if the price is above the maximum boundary', () => {
        expect(isPriceInRange(21, 10, 20)).toBe(false);
    });
});
