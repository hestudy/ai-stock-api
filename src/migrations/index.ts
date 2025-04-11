import * as migration_20250411_071510 from './20250411_071510';
import * as migration_20250411_105314 from './20250411_105314';

export const migrations = [
  {
    up: migration_20250411_071510.up,
    down: migration_20250411_071510.down,
    name: '20250411_071510',
  },
  {
    up: migration_20250411_105314.up,
    down: migration_20250411_105314.down,
    name: '20250411_105314'
  },
];
