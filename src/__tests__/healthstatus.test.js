import { getHealthStatus } from '../healthstatus';

describe('getHealthStatus', () => {
  test('should return healthy for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
  });

  test('should return wounded for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return critical for health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: -5 })).toBe('critical');
  });

  test('should throw error for invalid character object', () => {
    expect(() => getHealthStatus(null)).toThrow('Invalid character object');
    expect(() => getHealthStatus(undefined)).toThrow('Invalid character object');
    expect(() => getHealthStatus({ name: 'Маг' })).toThrow('Invalid character object');
    expect(() => getHealthStatus({ name: 'Маг', health: '90' })).toThrow('Invalid character object');
  });
});
