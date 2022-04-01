import * as R from 'ramda';
import {averageTimes} from './app/chronometer.js';
import {getPodium, getWinner} from './app/time-tools.js';
import {assocNameAndRemoveFirstnameAndLastName} from './app/names.js';

const resultList = [
  {lastname: 'bob', firstname: 'xcv', result: '1:34.2'},
  {lastname: 'bobby', firstname: 'wxwc', result: '1:37.2'},
  {lastname: 'bobette', firstname: 'qsd', result: '1:42.2'},
  {lastname: 'alfred', firstname: 'azert', result: '2:34.5'},
  {lastname: 'collins', firstname: 'miguel', result: '3:13.2'},
  {lastname: 'collins', firstname: 'kim', result: '1:15.1'}
];

const getSwaggyResults = R.applySpec({
  average: averageTimes,
  podiumAverage: R.pipe(getPodium, averageTimes),
  winner: R.pipe(getWinner, assocNameAndRemoveFirstnameAndLastName),
  podium: R.pipe(getPodium, R.map(assocNameAndRemoveFirstnameAndLastName))
});

console.log(getSwaggyResults(resultList));
