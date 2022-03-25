import * as R from 'ramda';
import {parseTimeToSeconds} from './time-tools.js';

const averageTimes = R.pipe(
  R.pluck('result'),
  R.map(parseTimeToSeconds),
  R.mean
);

export {averageTimes};
