import {expect} from 'chai';
import {getWinner, parseTimeToSeconds} from '../../app/time-tools.js';

describe('app/time-tools.js', () => {
  describe('#parseTimeToSeconds()', () => {
    it('should return time with minutes and seconds as second in number', () => {
      expect(parseTimeToSeconds('30.12')).to.be.equal(30.12);
      expect(parseTimeToSeconds('1:30.12')).to.be.equal(91.12);
      // expect(parseTimeToSeconds('1:15:30.12')).to.be.equal(4530.12);
    });

    it.skip('should return an error', () => {
      // expect(parseTimeToSeconds('nono')).to.be.equal(Number.NaN);
      // expect(parseTimeToSeconds('aze')).to.be.equal(Number.NaN);
      // expect(parseTimeToSeconds('')).to.be.equal(Number.NaN);
    });
  });

  describe('#getWinner()', () => {
    it('should return the winner', () => {
      expect(
        getWinner([
          {lastname: 'alfred', firstname: 'azert', result: '2:34.5'},
          {lastname: 'collins', firstname: 'miguel', result: '3:13.2'},
          {lastname: 'collins', firstname: 'kim', result: '1:15.1'}
        ])
      ).to.be.deep.equal({
        lastname: 'collins',
        firstname: 'kim',
        result: '1:15.1'
      });
    });
  });
});
