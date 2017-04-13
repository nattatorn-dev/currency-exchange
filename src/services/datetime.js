import moment from 'moment'
import 'moment/locale/th'
import 'moment/locale/en-au'

/**
 * @param {[string]}      date           | '2017-04-12T17:00:00.000Z' |
 * @return {[string]}     date           | '13 April 2017 12:00 AM' |
 */
// April 13, 2017 12:00 AM
const dateTimeFormat = date => moment( date )
// April 13, 2017
const dateFormat = date => dateTimeFormat( date ).format( 'LL' )
// Apr 13, 2017
const dateShortFormat = date => dateTimeFormat( date ).format( 'll' )
// 13 เมษายน 2560 เวลา 0:00
const thaiDateTimeFormat = date => moment( date ).add( 543, 'year' ).locale( 'th' )

// 13 เมษายน 2560
const thaiDateFormat = date => thaiDateTimeFormat( date ).format( 'LL' )
// 13 เม.ย. 2560
const thaiDateShortFormat = date => thaiDateTimeFormat( date ).format( 'll' )

const second = () => 10 * 100
const minute = () => 60 * second()

export {
  dateFormat,
  dateShortFormat,
  dateTimeFormat,
  minute,
  second,
  thaiDateFormat,
  thaiDateShortFormat,
  thaiDateTimeFormat,
}
