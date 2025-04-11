import * as migration_20250411_071510 from './20250411_071510';

export const migrations = [
  {
    up: migration_20250411_071510.up,
    down: migration_20250411_071510.down,
    name: '20250411_071510'
  },
];
