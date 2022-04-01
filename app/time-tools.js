import * as R from 'ramda';

const hasMinutes_ = R.pipe(R.length, R.lt(1));
const handleMinutes_ = R.ifElse(
  hasMinutes_,
  R.pipe(R.head, R.multiply(60)),
  R.always(0)
);
const handleSeconds_ = R.last;

const parseTimeToSeconds = R.pipe(
  R.split(':'),
  R.map(Number),
  R.converge(R.add, [handleMinutes_, handleSeconds_])
);

const parseTimeForObject_ = R.pipe(R.prop('result'), parseTimeToSeconds);

const assocTimeInSeconds_ = (temporaryProp) =>
  R.converge(R.assoc(temporaryProp), [parseTimeForObject_, R.identity]);

const sortListByTimesWithTemporaryName_ = (temporaryProp) =>
  R.pipe(
    R.map(assocTimeInSeconds_(temporaryProp)),
    R.sortBy(R.prop(temporaryProp)),
    R.map(R.dissoc(temporaryProp))
  );

const sortListByTimes = sortListByTimesWithTemporaryName_('resultInSeconds');

const getWinner = R.pipe(sortListByTimes, R.head);
const getPodium = R.pipe(sortListByTimes, R.take(3));

export {sortListByTimes, parseTimeToSeconds, getWinner, getPodium};
