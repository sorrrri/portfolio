import * as moment from 'moment';

const dateParse = (value: string) => moment.default(value, 'YYYY/MM/DD').toDate();

const dateFormat = (value: Date) => moment.default(value).format('YYYY/MM/DD');
const dateFormat2 = (value: Date) => moment.default(value).format('YYYY-MM-DD');

const dateFormatShort = (value: Date) => moment.default(value).format('MM/DD');
const dateFormat2Short = (value: Date) => moment.default(value).format('MM-DD');

const isAfter = (standard: Date, comparer: Date) => moment.default(standard).isAfter(comparer);

export { dateParse, dateFormat, dateFormat2, dateFormatShort, dateFormat2Short, isAfter };
