import tap from 'tap';

import { calc_ftl_rate } from './rules';

tap.same( calc_ftl_rate(111,'standard'), { mass: 12, cost: 24 },
    'mass rounded up' );

