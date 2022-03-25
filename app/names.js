import * as R from 'ramda';

const formatFirstName_ = R.pipe(R.prop('firstname'), R.toLower);
const formatLastName_ = R.pipe(R.prop('lastname'), R.toUpper);

const formatName_ = R.pipe(
  R.juxt([formatFirstName_, formatLastName_]),
  R.insert(1, ' '),
  R.reduce(R.concat, '')
);

const assocNameAndRemoveFirstnameAndLastName = R.pipe(
  R.converge(R.assoc('name'), [formatName_, R.identity]),
  R.omit(['firstname', 'lastname'])
);

export {assocNameAndRemoveFirstnameAndLastName};
