import { transformer } from '../stringUtils.js';
import { describe, it, expect } from 'vitest';

describe('transformer function tests', () => {
  it('should return an empty string if input is an empty string', () => {
    const result = transformer('');
    expect(result).toBe('');
  });

  it('should convert a string with lowercase characters to uppercase', () => {
    const result = transformer('achref saidi');
    expect(result).toBe('ACHREF SAIDI');
  });

  it('should handle strings with special characters correctly', () => {
    const result = transformer('hello-world! 123');
    expect(result).toBe('HELLO-WORLD! 123');
  });
});