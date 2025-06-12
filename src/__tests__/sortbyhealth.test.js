import { sortHeroesByHealth } from "../healthstatus.js";

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(heroes);

    // Используем toEqual для глубокого сравнения объектов
    expect(result).toEqual(expected);

    // Проверяем, что исходный массив не изменился
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should throw error for non-array input', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth({})).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth('string')).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth(123)).toThrow('Input must be an array');
  });

  test('should correctly sort heroes with equal health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    const result = sortHeroesByHealth(heroes);

    // Порядок героев с одинаковым здоровьем должен сохраниться
    expect(result).toEqual([
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ]);
  });
});
