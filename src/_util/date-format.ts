import * as moment from 'moment';

const dateParse = (value: string) => moment.default(value, 'YYYY/MM/DD').toDate();

const dateFormat = (value: Date) => moment.default(value).format('YYYY/MM/DD');
const dateFormat2 = (value: Date) => moment.default(value).format('YYYY-MM-DD');
const dateFormat3 = (value: Date) => moment.default(value).format('YYYY-MM-DD HH:mm:ss');

const dateFormatShort = (value: Date) => moment.default(value).format('MM/DD');
const dateFormat2Short = (value: Date) => moment.default(value).format('MM-DD');

const isAfter = (standard: Date, comparer: Date) => moment.default(standard).isAfter(comparer);
const dateDiffNow = (standard: Date) => moment.default(Date.now()).diff(standard);

export {
  dateParse,
  dateFormat,
  dateFormat2,
  dateFormat3,
  dateFormatShort,
  dateFormat2Short,
  isAfter,
  dateDiffNow,
};
