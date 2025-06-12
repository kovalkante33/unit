// Получения информации о состоянии здоровья героя
export function getHealthStatus(character) {
  if (!character || typeof character.health !== 'number') {
    throw new Error('Invalid character object');
  }

  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health <= 50 && character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

// Сортировка героев по уровню здоровья
export function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Input must be an array');
  }
  return [...heroes].sort((a, b) => b.health - a.health);
}
